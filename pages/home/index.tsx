import React, { useReducer, useState, useEffect } from 'react';
import Reducer from './reducer';
import { IUser } from './type';
import Router from 'next/router'

export default function Login() {

    const [state, dispatch] = useReducer(Reducer, { users: [] })
    const [formData, setFormData] = useState<IUser | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            }
        }).then(response => response.json())
            .then(users => {
                dispatch({
                    type: 'SET_USERS',
                    users: users
                })
            })
    }, [])

    const onLogin = () => {

        if (formData && formData.username && formData.Password) {

            let userExists = state.users?.find((p: IUser) => p.username == formData.username);

            if (userExists && formData.Password == "123") {

                Router.push("/dashboard")

            } else {

                dispatch({
                    type: 'ON_LOGIN_FAILED',
                })

            }

            return;
        }
        alert("Please enter all fields")
    }


    return <div>
        <div>
            <input onChange={(e) => setFormData({ username: e.target.value, Password: formData?.Password })} placeholder="user name" />
            <input onChange={(e) => setFormData({ Password: e.target.value, username: formData?.username })} placeholder="password" />
            <button onClick={onLogin}>Login</button>
            {
                state.message && <label>{state.message}</label>
            }
        </div>
    </div>
}