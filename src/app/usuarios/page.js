export default function Usuarios() {
    return (
        <div className="card border-radius-10 justify-center">
            <h1 className="text">Listado de Usuarios</h1>
            <div className="flex justify-end mb-4">
                <button className="bg-blue-700 border border-r-2 text-white px-6 py-2">Agregar</button>
            </div>

            <table className="table min-w-full border-collapse border border-gray-300 text-sm text-left">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-4 font-medium text-gray-900 border border-gray-300">Id</th>
                        <th className="px-6 py-4 font-medium text-gray-900 border border-gray-300">Nombre</th>
                        <th className="px-6 py-4 font-medium text-gray-900 border border-gray-300">Apellido</th>
                        <th className="px-6 py-4 font-medium text-gray-900 border border-gray-300">Email</th>
                        <th className="px-6 py-4 font-medium text-gray-900 border border-gray-300">Acciones</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-300 bg-white">
                    <tr>
                        <td className="px-6 py-4 border border-gray-300">1</td>
                        <td className="px-6 py-4 border border-gray-300">John</td>
                        <td className="px-6 py-4 border border-gray-300">Doe</td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 border border-gray-300">2</td>
                        <td className="px-6 py-4 border border-gray-300">John</td>
                        <td className="px-6 py-4 border border-gray-300">Doe</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}