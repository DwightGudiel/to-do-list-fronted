"use client";

// Componentes
import Aside from "@/components/aside";
import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";


function LayoutApp({ children }) {
  const [open, setOpen] = useState(true);
  const token = getCookie("_token");
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);

  return (
    <>
      {token ? (
        <div className="md:flex md:min-h-screen">
          <Aside setOpen={setOpen} open={open} />
          <main
            className={`${
              open ? "md:w-3/4" : "md:w-full"
            } md:h-screen overflow-auto p-10`}
          >
            {children}
          </main>
        </div>
      ) : (
        <main className="flex justify-center items-center min-h-screen">
          <div className="p-6">
            <h1 className="text-center text-4xl font-black text-gray-700">
              Cargando Página...
            </h1>
            <div className="mt-4 flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default LayoutApp;
