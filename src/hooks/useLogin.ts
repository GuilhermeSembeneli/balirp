import React from "react";
import { api } from "../services/api";

export default function useLogin() {
   React.useEffect(() => {
        api.post('createuser', {
            email: 'teste',
            password: 'test'
        })
   }, [])
}
