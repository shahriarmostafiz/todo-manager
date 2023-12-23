import React, { useContext } from 'react';


import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../AuthProvider/AuthContext';
import useAxios from './useAxios';


const useTask = () => {
    const { user, loading } = useContext(AuthContext)
    const myAxios = useAxios()
    const { data, isPending, refetch } = useQuery({
        queryKey: ["Task"],
        queryFn: async () => {
            const res = await myAxios.get(`/todo/${user.email}`)
            return res.data
        }
    })
    return [data, isPending, refetch]

};

export default useTask;