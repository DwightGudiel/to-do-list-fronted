"use client";

import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import axios from "axios";
import TareaCompletada from "./tareaCompletada";
import TareaPendiente from "./tareaPendiente";
import { toast } from "react-toastify";
import Modal from "./modal";
import Form from "./formulario";


function ContenedorTareas() {
  const fechaActual = new Date();
const offset = fechaActual.getTimezoneOffset() * 60000; // Convertir el desfase a milisegundos
const fechaLocal = new Date(fechaActual - offset).toISOString().split('T')[0];
  const [fechaSeleccionada, setFechaSeleccionada] = useState(fechaLocal);
  const [descripcion, setDescripcion] = useState("");
  const [plataforma, setPlataforma] = useState("");
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const usuario = JSON.parse(getCookie("usuario"));
  const [tareas, setTareas] = useState([]);
  const [tareasCompletadas, setTareasCompletadas] = useState([]);
  const [tareasAtrasadas, setTareasAtrasadas] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [initialValues, setInitialValues] = useState({});
  const inputs = [
    {
      name: "descripcion",
      placeholder: "Añade una nueva tarea",
      type: "text",
      pattern: {
        value: /^(?!\s+$).+/,
        message: "La descripcion no puede contener solo espacios en blanco",
      },
    },
    {
      name: "plataforma",
      type: "select",
      options: [
        { value: "", label: "Plataforma" },
        { value: "atulado", label: "Atulado" },
        { value: "caplin", label: "Caplin" },
        { value: "lancasco", label: "Lancasco" },
      ],
    },
    {
      name: "estado",
      type: "select",
      options: [
        { value: "pendiente", label: "Pendiente" },
        { value: "completada", label: "Completada" },
        { value: "atrasada", label: "Atrasada" },
      ],
    },
    {
      name: "fecha_vencimiento",
      type: "date",
    },
  ];

  const listarTareas = async () => {
    try {
      const url = `https://webdevgt.com/pwg/public/api/tareas/${usuario?.id}`;
      const response = await axios(url);

      const tareasPendientes = response.data.filter(
        (tarea) => tarea?.estado === "pendiente"
      );

      console.log("uwu", tareasPendientes);

      setTareas(tareasPendientes);

      listarTareasCompletadas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listarTareasAtrasadas = async () => {
    try {
      const url = `https://webdevgt.com/pwg/public/api/tareas-atrasadas/${usuario?.id}`;
      const response = await axios(url);

      const data = response.data;
      setTareasAtrasadas(data);
    } catch (error) {
      console.log(error);
    }
  };

  const listarTareasCompletadas = (tareas) => {
    const completadas = tareas.filter(
      (tarea) => tarea?.estado === "completada"
    );
    setTareasCompletadas(completadas);
  };

  const handleSubmitTarea = async (e) => {
    e.preventDefault();

    try {
      const url = "https://webdevgt.com/pwg/public/api/tareas/crear";

      const tarea = {
        users_id: usuario.id,
        descripcion: descripcion.trim(),
        plataforma: plataforma.trim(),
        estado: "pendiente",
        fecha_vencimiento: fechaSeleccionada,
        hora: horaSeleccionada,
      };

      console.log(tarea);

      if (tarea.descripcion === "" || tarea.plataforma === "") {
        toast.error("Todos los campos son obligatorios");
        return;
      }

      const response = await axios.post(url, tarea);

      await listarTareas();

      setDescripcion("");
      setPlataforma("");

      toast.success("La tarea fue creada exitosamente");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompletarTarea = async (id) => {
    try {
      const estado = { estado: "completada" };
      const url = `https://webdevgt.com/pwg/public/api/tarea/completar/${id}`;
      const response = await axios.post(url, estado);
      console.log(response);
      await listarTareas();
      await listarTareasAtrasadas();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCambiarEstadoTarea = async (id, estaCompletada) => {
    try {
      const nuevoEstado = estaCompletada ? "completada" : "pendiente";
      const url = `https://webdevgt.com/pwg/public/api/tarea/completar/${id}`;
      const response = await axios.post(url, { estado: nuevoEstado });
      console.log(response);
      await listarTareas();
      await listarTareasAtrasadas();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (data) => {
    try {
      console.log(data);
      await axios.put(`https://webdevgt.com/pwg/public/api/tarea/${data.id}`, data);
      setShowModal(false);
      await listarTareas();
      await listarTareasAtrasadas();
      toast.success("Tarea actualizada con exito");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleUpdate = (id) => {
    // const completada = tareasCompletadas.find((tarea) => tarea.id === id);
    const atrasada = tareasAtrasadas.find((tarea) => tarea.id === id);
    const pendiente = tareas.find((tarea) => tarea.id === id);

    // if (completada) {
    //   setInitialValues(completada);
    // } else if (atrasada) {
    //   setInitialValues(atrasada);
    // } else if (pendiente) {
    //   setInitialValues(pendiente);
    // } else {
    //   setInitialValues({});
    // }

    if (atrasada) {
      setInitialValues(atrasada);
    } else if (pendiente) {
      setInitialValues(pendiente);
    } else {
      setInitialValues({});
    }

    setShowModal(true);
  };

  useEffect(() => {
    listarTareas();
    listarTareasAtrasadas();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-xl font-bold mb-4">Mis Tareas</h2>{" "}
        <p className="text-xl font-bold mb-4">{usuario?.name}</p>
      </div>

      {/* Task List */}
      <div className=" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-lg font-bold mb-4 text-red-600">
          Tareas Atrasadas: {tareasAtrasadas.length}
        </h2>{" "}
        <ul className="md:overflow-y-auto">
          {tareasAtrasadas.map((tarea, index) => (
            <TareaPendiente
              key={index}
              tarea={tarea}
              handleCompletarTarea={handleCompletarTarea}
              setShowModal={setShowModal}
              handleUpdate={handleUpdate}
            />
          ))}
        </ul>
      </div>

      {/* Tarea Form */}
      <div className="w-full bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <h2 className="text-lg font-bold mb-4 text-gray-700">Nueva Tarea</h2>{" "}
        <form onSubmit={handleSubmitTarea}>
          <div className="flex gap-6 shadow appearance-none border rounded text-sm">
            <input
              className="w-10/12 py-4 px-3 text-sm leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="descripcion"
              name="descripcion"
              placeholder="Añade una nueva tarea"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            <select
              className="w-2/12 focus:outline-none text-sm "
              id="plataforma"
              name="plataforma"
              value={plataforma}
              onChange={(e) => setPlataforma(e.target.value)}
            >
              <option value="">Plataforma</option>
              <option value="atulado">Atulado</option>
              <option value="caplin">Caplin</option>
              <option value="lancasco">Lancasco</option>
            </select>

            <input
              className="w-2/12 focus:outline-none text-sm"
              type="date"
              id="fecha_vencimiento"
              name="fecha_vencimiento"
              value={fechaSeleccionada}
              onChange={(e) => setFechaSeleccionada(e.target.value)}
            />

            <select
              className="w-2/12 focus:outline-none text-sm"
              id="hora"
              name="hora"
              value={horaSeleccionada}
              onChange={(e) => setHoraSeleccionada(e.target.value)}
            >
              <option value="">Hora</option>
              <option value="5">5 min</option>
              <option value="10">10 min</option>
              <option value="15">15 min</option>
              <option value="20">20 min</option>
              <option value="25">25 min</option>
              <option value="30">30 min</option>
              <option value="40">40 min</option>
              <option value="50">50 min</option>
              <option value="60">1 hr</option>
              <option value="120">2 hrs</option>
              <option value="240">4 hrs</option>
              <option value="360">6 hrs</option>
              <option value="480">8 hrs</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Añadir Tarea
          </button>
        </form>
      </div>

      {/* Task List */}
      <div className=" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <h2 className="text-lg font-bold mb-4 text-blue-600">
          Tareas Actuales: {tareas.length}
        </h2>{" "}
        <ul className="md:overflow-y-auto">
          {tareas.map((tarea, index) => (
            <TareaPendiente
              key={index}
              tarea={tarea}
              handleCompletarTarea={handleCompletarTarea}
              setShowModal={setShowModal}
              handleUpdate={handleUpdate}
            />
          ))}
        </ul>
      </div>

      {/* Task List */}
      <div className=" bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 mt-10">
        <h2 className="text-lg font-bold mb-4 text-green-600">
          Tareas Completadas: {tareasCompletadas.length}
        </h2>{" "}
        <ul className="md:overflow-y-auto">
          {tareasCompletadas.map((tarea) => (
            <TareaCompletada
              key={tarea?.id}
              tarea={tarea}
              // setShowModal={setShowModal}
              // handleUpdate={handleUpdate}
              handleCambiarEstadoTarea={handleCambiarEstadoTarea}
            />
          ))}
        </ul>
      </div>

      <Modal isOpen={showModal} onClose={handleCloseModal}>
        <h2 className="text-lg font-medium mb-4">Actualizar Tarea</h2>
        <Form
          inputs={inputs}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </Modal>
    </div>
  );
}

export default ContenedorTareas;
