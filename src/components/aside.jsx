import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";
import { getCookie } from "cookies-next";

// heroicons
import {
  // ChevronDoubleLeftIcon,
  ArrowLeftOnRectangleIcon,
  Bars4Icon,
  HomeIcon,
  UserIcon,
  DocumentChartBarIcon
} from "@heroicons/react/24/solid";

function Aside() {
  const router = useRouter();
  const usuario = JSON.parse(getCookie("usuario"));

  // Navegación
  const Menus = [
    { title: "Mis Tareas", src: HomeIcon, path: "/mis-tareas" },
    { title: "Usuarios", src: UserIcon, path: "/usuarios" },
    { title: "Administrar", src: DocumentChartBarIcon, path: "/admin" },
  ];

  // Cerrar Sesión
  const handleLogout = () => {
    deleteCookie("_token");
    deleteCookie("usuario");
    router.push("/");
  };

  return (
    <aside className="md:w-1/10 p-5 pt-8 relative duration-300 bg-blue-600 px-5 py-10 md:overflow-y-auto md:h-screen">
      {/* ... */}
      <header className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-x-4 justify-center items-center py-3">
          <h1 className="text-white origin-left font-medium text-xl duration-200 ">
            PWG 
          </h1>
          <nav className="flex flex-col justify-center py-3">
            {Menus.map((Menu, index) => (
              <div key={index}>
                {(usuario?.role === "administrador" && Menu.title !== "Mis Tareas") ||
                (usuario?.role === "colaborador" && Menu.title === "Mis Tareas") ? (
                  <Link
                    key={index}
                    href={Menu.path}
                    className="w-full my-4 rounded-md p-2 cursor-pointer transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 flex items-center text-white"
                  >
                    <Menu.src className="h-6 w-6" />
                    {/* <span className="text-lg font-black origin-left duration-200">
                      {Menu.title}
                    </span> */}
                  </Link>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
        {/* cerrar sesion */}
        <button
          onClick={handleLogout}
          className="flex text-sm gap-x-4 items-center justify-center cursor-pointer text-white p-2 rounded-sm transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600"
        >
          <ArrowLeftOnRectangleIcon className="w-8 h-8" />
        </button>
      </header>
    </aside>
  );
}

export default Aside;
