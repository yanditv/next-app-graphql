"use client";
import { gql } from '@apollo/client'
import client from '@app/app/helpers/apolloClient';
import { useState } from 'react';
const CREATE_USER = gql`
mutation CreateUser($name: String!, $email: String!, $lastname: String!, $password: String!) {
  createUser(name: $name, email: $email, lastname: $lastname, password: $password) {
    id
    name
    email
    lastname
    password
  }
}
`

export default function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await client.mutate({
            mutation: CREATE_USER,
            variables: {
                name: name,
                email: email,
                lastname: lastname,
                password: password
            }
        });
        console.log(data);
    }
    return (
        <div>
            <h1>Crear Usuario</h1>

            <form onSubmit={handleSubmit}>
                <label>Nombre</label>
                <input type="text" onChange={(e) => setName(e.target.value)} />
                <label>Apellido</label>
                <input type="text" onChange={(e) => setLastname(e.target.value)} />
                <label>Email</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Crear</button>
            </form>
        </div>
    )
}