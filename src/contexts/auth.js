import { createContext, useEffect, useState } from "react";
import axios from "axios";
import api from "../components/services/api";

export const AuthContext = createContext({});

export function AuthProvider({children}) {
    const [user, setUser] = useState();

    const signIn = async (form) => {
        const response = await axios.post('https://bvz-back.herokuapp.com/api/login', form)
        const { data } = response;

        console.log(data);
        localStorage.setItem('user', JSON.stringify(data.nome));
        localStorage.setItem('token', data.token);
        setUser(data.nome);
    }

    const signOut = async () => {
        await localStorage.clear();
        await setUser(null);
    }

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await localStorage.getItem('user');
            const storagedToken = await localStorage.getItem('token');

            api.defaults.headers['Authorization'] = `Bearer ${storagedToken}`;
            if(storagedUser && storagedToken) {
                setUser(JSON.parse(storagedUser));
            }
        }
        loadStorage();
    });

    return(
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}