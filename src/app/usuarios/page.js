"use client";
import { gql } from '@apollo/client'
import { useEffect, useState } from 'react';
import client from '../helpers/apolloClient';
const GET_DATA = gql`
query GetUsers {
  getUsers {
    id
    name
    email
    lastname
    password
  }
}`;
export default function Usuarios() {
    const [users, setUsers] = useState(null)
    useEffect(() => {
        const getData = async () => {
            const { data } = await client.query({ query: GET_DATA });
            setUsers(data.getUsers)
            console.log(data.getUsers);
        }
        getData()
    }, [])
    return (
        <div className="card border-radius-10 justify-center">
            <h1 className="text">Listado de Usuarios</h1>
            <div className="flex justify-end mb-4">
                <a href='/usuarios/crear' className="bg-blue-700 border border-r-2 text-white px-6 py-2">Agregar</a>
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
                    {users && users.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td className="px-6 py-4 border border-gray-300">{user.id}</td>
                                <td className="px-6 py-4 border border-gray-300">{user.name}</td>
                                <td className="px-6 py-4 border border-gray-300">{user.lastname}</td>
                                <td className="px-6 py-4 border border-gray-300">{user.email}</td>
                            </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}