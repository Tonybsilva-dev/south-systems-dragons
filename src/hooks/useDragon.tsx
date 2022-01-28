import { useState } from 'react';
import { api } from '../service/api';

export default function useDragon() {

    const [dragons, setDragons] = useState([]);


    async function listDragons() {
        try {
            const { data } = await api.get('/dragon');
            return data as Object;
        } catch (error) {
            console.log(error);
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
        dragons
    }
}