import { useState } from 'react';
import { api } from '../service/api';

export default function useDragon() {

    const 
    [dragons, setDragons] = useState([]),
    [filterDone, setFilterDone] = useState(false),
    [loading, setLoading] = useState(false);



    async function listDragons() {

        setFilterDone(false);
        setLoading(true);

        try {
            const { data } = await api.get('/dragon');
            setDragons(data);
            setFilterDone(true);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    async function listDragon(id: number) {

    }

    async function createDragon() {

    }

    async function updateDragon() {

    }

    async function deleteDragon() {

    }

    return {
        listDragons, 
        dragons,
        filterDone
    }
}