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

function Aside({ open, setOpen }) {
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
    <aside
      className={` ${
        open ? "md:w-1/4" : "md:w-36"
      }  p-5 pt-8 relative duration-300 bg-blue-600 px-5 py-10 md:overflow-y-auto md:h-screen`}
    >
      <Bars4Icon
        className="h-8 w-8  text-white font-black absolute cursor-pointer right-1 top-6"
        onClick={() => setOpen(!open)}
      />

      <header className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-x-4 justify-center items-center py-3">
          <h1 className="text-white origin-left font-medium text-xl duration-200 ">
            PWG
          </h1>

          <nav
            className={`${
              !open ? "hidden lg:block" : "block lg:block"
            } flex flex-col justify-center py-3`}
          >
            {Menus.map((Menu, index) => (
             <div key={index}>
             {(usuario?.role === "administrador" && Menu.title !== "Mis Tareas") ||
             (usuario?.role === "colaborador" && Menu.title === "Mis Tareas") ? (
               <Link
                 key={index}
                 href={Menu.path}
                 className={`mt-5 flex ${
                   !open ? "justify-center" : ""
                 } w-full rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-sm gap-x-10 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600`}
               >
                 <Menu.src className="h-6 w-6" />
                 <span
                   className={`${
                     !open && "hidden"
                   } text-lg font-black origin-left duration-200`}
                 >
                   {Menu.title}
                 </span>
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
          <ArrowLeftOnRectangleIcon className="w-8 h-8 " />
          <span className={`${!open && "hidden"} font-black`}>
            Cerrar Sesión{" "}
          </span>
        </button>
      </header>
    </aside>
  );
}

export default Aside;
