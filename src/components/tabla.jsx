// Iconos
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

// loader
import ClipLoader from "react-spinners/ClipLoader";

function Table({
  data,
  loading,
  headers,
  columns,
  handleDelete,
  handleUpdate,
}) {
  const handleUpdateItem = (itemId) => {
    if (handleUpdate) {
      handleUpdate(itemId);
    }
  };

  const handleDeleteItem = (itemId) => {
    // Llama a la función handleDelete proporcionada con el parámetro itemId
    if (handleDelete) {
      handleDelete(itemId);
    }
  };
  

  if (data.length === 0) {
    return (
      <>
        {loading ? (
          <div className="flex items-center justify-center h-20">
            {/* // Mostrar loading mientras carga los datos */}
            <ClipLoader loading={loading} />
          </div>
        ) : (
          <p className="text-center font-black text-2xl text-gray-700">
            No hay datos
          </p>
        )}
      </>
    );
  }

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-20">
          {/* // Mostrar loading mientras carga los datos */}
          <ClipLoader loading={loading} />
        </div>
      ) : (
        <table className="w-full text-sm text-left">
          <thead className="text-sm uppercase bg-blue-500 text-white">
            <tr>
              {headers.map((header) => (
                <th key={header.key} scope="col" className="px-6 py-3">
                  {header.label}
                </th>
              ))}
              <th scope="col" className="px-6 py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 border ">
                {columns.map((column) => (
                  <td key={column.key} className="px-6 py-4">
                    {column.render(item)}
                  </td>
                ))}
                <td className="px-6 py-4 flex justify-start gap-x-4">
                  <button
                    className="font-medium text-blue-600 hover:underline"
                    onClick={() => handleUpdateItem(item.id)}
                  >
                    <PencilSquareIcon className="h-6 w-6" /> {/*actualizar*/}
                  </button>
                  <button
                    className="ml-2 font-medium text-blue-600"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <TrashIcon className="h-6 w-6" /> {/*Eliminar*/}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
