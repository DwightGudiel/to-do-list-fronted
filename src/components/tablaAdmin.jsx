// loader
import ClipLoader from "react-spinners/ClipLoader";

function Table({ data, loading, headers, columns }) {
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
