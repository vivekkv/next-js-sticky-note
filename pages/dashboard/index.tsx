import React, { useReducer, useEffect } from 'react';
import Reducer from './reducer';
import Router from 'next/router';

export default function Login() {

    const [state, dispatch] = useReducer(Reducer, { posts: [] })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
            }
        }).then(response => response.json())
            .then(posts => {
                dispatch({
                    type: "SET_POSTS",
                    posts: posts
                })
            })
    }, [])

    const onLogOff = () => {
        dispatch({ type: 'ON_LOG_OFF' });
        Router.push("/");
    }

    return <div>
        <button onClick={onLogOff}>Log Off</button>
        <ul>
            {
                state.posts.map((i) => {

                    return <li key={i.id}>
                        <h1>{i.title}</h1>
                        <p>{i.body}</p>
                    </li>
                })
            }
        </ul>
    </div>
}