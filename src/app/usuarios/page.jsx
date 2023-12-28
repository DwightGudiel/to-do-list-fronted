"use client";

import { useEffect, useState } from "react";
import LayoutApp from "../dashboard/layout";
import Table from "@/components/tabla";
import axios from "axios";
import Boton from "@/components/boton";
import Modal from "@/components/modal";
import Form from "@/components/formulario";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

function Usuarios() {
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const [isUpdatingUsuario, setIsUpdatingUsuario] = useState(false);
  const router = useRouter();
  const usuarioData = getCookie("usuario");

  // Table
  const headers = [
    { key: 1, label: "Usuario" },
    { key: 2, label: "Email" },
    { key: 3, label: "Rol" },
  ];

  const columns = [
    {
      key: "name",
      render: (usuarios) => (
        <div>
          <p className="font-bold">{usuarios?.name}</p>
        </div>
      ),
    },
    {
      key: "email",
      render: (usuarios) => (
        <div>
          <p className="font-bold">{usuarios?.email}</p>
        </div>
      ),
    },
    {
      key: "role",
      render: (usuarios) => (
        <div>
          <p className="font-bold">{usuarios?.role}</p>
        </div>
      ),
    },
  ];

  const inputs = [
    {
      name: "name",
      placeholder: "Nombre de usuario",
      type: "text",
      // Validacion
      ...(isUpdatingUsuario
        ? {}
        : {
            required: "El nombre de usuario es requerido",
            pattern: {
              value: /^(?!\s+$).+/,
              message: "El nombre no puede contener solo espacios en blanco",
            },
          }),
    },
    {
      name: "email",
      placeholder: "Correo electrónico",
      type: "email",
      // Validacion
      ...(isUpdatingUsuario
        ? {}
        : {
            required: "El correo electrónico es requerido",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Ingresa un correo electrónico válido",
            },
          }),
    },
    {
      name: "password",
      placeholder: "Contraseña",
      type: "password",
      // Validacion
      ...(isUpdatingUsuario
        ? {}
        : {
            required: "La contraseña es requerida",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
            pattern: {
              value: /^(?!\s+$).+/,
              message:
                "La contraseña no puede contener solo espacios en blanco",
            },
          }),
    },
    {
      name: "role",
      type: "select",
      options: [
        { value: "", label: "Selecciona un rol" },
        { value: "administrador", label: "Administrador" },
        { value: "colaborador", label: "Colaborador" },
      ],
      // Validacion
      ...(isUpdatingUsuario ? {} : { required: "El rol es requerido" }),
    },
  ];

  const listarUsuarios = async () => {
    try {
      setLoading(true);
      const url = "http://tareas.webdevgt.com/api/users";
      const response = await axios(url);
      setLoading(false);
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    // Resetea el estado initialValues cuando el modal se cierra
    setIsUpdatingUsuario(false);
    setInitialValues({});
    setShowModal(false);
  };

  const handleSubmit = async (data) => {
    try {
      if (isUpdatingUsuario) {
        if (data.password === "") {
          delete data.password;
        }

        const response = await axios.put(
          `http://tareas.webdevgt.com/api/usuario/${data.id}`,
          data
        );
        console.log(response);
        setIsUpdatingUsuario(false);
        setShowModal(false);
        await listarUsuarios();
        setInitialValues({});
        toast.success("El Usuario fue actualizado exitosamente");
        return;
      }

      await axios.post("http://tareas.webdevgt.com/api/register", data);
      setShowModal(false);
      await listarUsuarios();
      toast.success("Usuario creado con exito");
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmation = window.confirm(
        "¿Estás seguro de eliminar este usuario?"
      );

      if (confirmation) {
        await axios.delete(`http://tareas.webdevgt.com/api/usuario/${id}`);
        await listarUsuarios();
        toast.warning("El usuario ha sido eliminado con exito");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = (id) => {
    const data = usuarios.filter((usuario) => usuario.id === id);
    setInitialValues(data[0] || {});
    setIsUpdatingUsuario(true);
    setShowModal(true);
  };

  useEffect(() => {
    listarUsuarios();
  }, []);


  
  const usuario = JSON.parse(usuarioData ?? "{}");

  useEffect(() => {
    if (!usuarioData) {
      router.push("/");
      return;
  
    }
  },[]);

  return (
    <LayoutApp>
      {usuario?.role !== "colaborador" ? (
        <>
          <div className="flex items-center justify-between gap-4 pb-4">
            <Boton onClick={() => setShowModal(true)}>
              <PlusCircleIcon className="h-6 w-6 me-2" /> Crear Usuario
            </Boton>
          </div>

          <Table
            headers={headers}
            columns={columns}
            data={usuarios}
            loading={loading}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />

          <Modal isOpen={showModal} onClose={handleCloseModal}>
            <h2 className="text-lg font-medium mb-4">{`${
              isUpdatingUsuario ? "Actualizar Usuario" : "Crear Usuario"
            }`}</h2>{" "}
            <Form
              inputs={inputs}
              onSubmit={handleSubmit}
              initialValues={initialValues}
            />
          </Modal>
        </>
      ) : (
        <div>
          <h1 className="text-center font-black text-4xl my-10 text-gray-700">
            Esta ruta esta protegida, ¡No eres un administrador!
          </h1>
        </div>
      )}
    </LayoutApp>
  );
}

export default Usuarios;
