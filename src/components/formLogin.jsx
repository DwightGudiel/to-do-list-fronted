"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import { setCookie } from "cookies-next";
import {toast } from 'react-toastify';

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setFormSubmitted(true);
  
      const url = "http://127.0.0.1:8000/api/login";

      const usuario = { email: email.trim(), password: password.trim() };

      if (usuario.email === "" || usuario.password === "") {
        setFormSubmitted(false);
        toast.error("Todos los campos son obligatorios");
        return;
      }

      const response = await axios.post(url, usuario);
     

      setFormSubmitted(false);

      const token = response.data.token;

      // Guardar el token en las cookies
      setCookie("_token", token, {
        maxAge: 28800, // Duración de la cookie en segundos
        path: "/", // Ruta de acceso de la cookie
      });

      setCookie("usuario", JSON.stringify(response.data.usuario), {
        path: "/", 
      });

      // Redireccionar a la ruta indicada
      router.push("/dashboard");

    } catch (error) {
      setFormSubmitted(false);
      if (error.response) {
        // Ocurrió un error durante la configuración de la solicitud
        toast.error("Usuario o contraseña incorrecta");
      }
    }
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          className="block text-sm text-gray-700 font-bold mb-2"
          htmlFor="email"
        >
          Correo Electrónico
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo@correo.com"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-sm text-gray-700 font-bold mb-2"
          htmlFor="password"
        >
          Contraseña
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 text-sm"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
        />
      </div>

      <input
        className="bg-indigo-600 mt-3 text-white p-3 w-full rounded-md hover:bg-indigo-700"
        type="submit"
        value={formSubmitted ? "Iniciando sesión, por favor espera..." : "Iniciar Sesión"}
        disabled={formSubmitted}
      />
    </form>
  );
}

export default FormLogin;