"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import LayoutApp from "../dashboard/layout";
import FiltroAdmin from "@/components/filtroAdmin";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import axios from "axios";
import Table from "@/components/tablaAdmin";
import {formatFecha, convertirMinutosAHoras} from "@/app/utilidades";

function Admin() {
  const usuarioData = getCookie("usuario");
  const router = useRouter();
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [filtro, setFiltro] = useState({ selectedStatus: 'todas', selectedUser: 'todos' });

  const headers = [
    { key: 1, label: "Descripcion" },
    { key: 2, label: "Horas" },
    { key: 3, label: "Estado" },
    { key: 4, label: "Colaborador" },
  ];

  const columns = [
    {
      key: "descripcion",
      render: (tareas) => (
        <div>
          <p className="ml-3 text-sm">
            {" "}
            <span className="font-bold capitalize">{`${
              tareas?.plataforma
            } - ${formatFecha(tareas?.fecha_vencimiento)} - `}</span>
            {tareas?.descripcion}
          </p>
        </div>
      ),
    },
    {
      key: "hora",
      render: (tareas) => (
        <div>
          <p className="ml-3 text-sm">{convertirMinutosAHoras(tareas?.hora)}</p>
        </div>
      ),
    },
    {
      key: "estado",
      render: (tareas) => (
        <div>
          <span className={`${tareas.estado === "completada" ? "bg-green-100 text-green-800 border-green-400" : tareas.estado === "atrasada" ? "bg-red-100 text-red-800 border-red-400 " : "bg-blue-100 text-blue-800 border-blue-400"} text-xs font-medium me-2 px-2.5 py-0.5 rounded border`}>{tareas?.estado}</span> 
        </div>
      ),
    },
    {
      key: "usuario",
      render: (tareas) => (
        <div>
          <p className="font-bold">{tareas?.user?.name}</p>
        </div>
      ),
    },
  ];

  const listarTareas = async () => {
    try {
      setLoading(true);
      const url = `https://webdevgt.com/pwg/public/api/tareas`;
      const response = await axios(url);
      setLoading(false);
      setTareas(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const listarUsuarios = async () => {
    try {
      setLoading(true);
      const url = "https://webdevgt.com/pwg/public/api/users";
      const response = await axios(url);
      setLoading(false);
      setUsuarios(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFilterChange = useCallback((filtro) => {
    setFiltro(filtro);
    listarUsuarios();
  }, [setFiltro]);
  

  const tareasFiltradas = useMemo(() => {
    return tareas.filter((tarea) => {
      const filtroStatus = filtro.selectedStatus === 'todas' || tarea.estado === filtro.selectedStatus;
      const filtroUser = filtro.selectedUser === 'todos' || tarea.user?.name === filtro.selectedUser;
      return filtroStatus && filtroUser;
    });
  }, [tareas, filtro.selectedStatus, filtro.selectedUser]);
  

  
  const calcularHorasTotalesUsuario = (tareasFiltradas) => {
    const fechaActual = new Date().toISOString().split('T')[0]; // Obtenemos la fecha actual en formato YYYY-MM-DD
  
    return tareasFiltradas.reduce((result, tarea) => {
      const userId = tarea.user?.id;
      const tareaFecha = tarea.fecha_vencimiento;
  
      if (
        userId &&
        typeof tarea.hora === 'number' &&
        tareaFecha &&
        tarea.estado !== 'pendiente' &&
        (tareaFecha === fechaActual || new Date(tareaFecha) < new Date(fechaActual))
      ) {
        const horasTotales = (result[userId]?.horasTotales || 0) + tarea.hora;
        result[userId] = {
          userId,
          nombre: usuarios.find((user) => user.id === parseInt(userId))?.name,
          horasTotales,
        };
      }
  
      return result;
    }, {});
  };
  
  const horasTotalesUsuarios = Object.values(
    calcularHorasTotalesUsuario(tareasFiltradas)
  );



  useEffect(() => {
    listarTareas();
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
        <div>
          <h1 className="text-2xl font-bold mb-4 my-10">
            Administra las tareas
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {horasTotalesUsuarios.map((usuario) => (
              <div
                key={usuario.userId}
                className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md mb-4"
              >
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2 text-gray-800">
                    {usuario.nombre}
                  </h2>
                  <p className="text-gray-600">
                    {`Horas Totales: ${convertirMinutosAHoras(usuario.horasTotales)}`}
                  </p>
                </div>
              </div>
            ))}
          </div>


          <FiltroAdmin usuarios={usuarios} onFilterChange={handleFilterChange} />


          <Table
            headers={headers}
            columns={columns}
            data={tareasFiltradas} 
            // data={tareas}
            loading={loading}
          />
        </div>
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

export default Admin;
