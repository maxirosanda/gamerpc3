import * as FileSystem from 'expo-file-system';
import { insertMiPc, fetchMispcs,deleteAddress } from '../../db';

export const ADD_MIPC = 'ADD_MIPC';
export const LOAD_MISPCS = 'LOAD_MISPCS';
export const DELETE_MISPCS = 'DELETE_MISPCS'

export const addmiPc = (title, image,description,userId,lat,lgn) => {
    return async dispatch => {
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
            FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            const result = await insertMiPc(
                title,
                Path,
                description,
                userId,
                lat,
                lgn
            );

            dispatch({
                type: ADD_MIPC,
                payload: {
                    id: result.insertId,
                    title,
                    image: Path,
                    description,
                    userId:userId,
                    latitud:lat,
                    longitud:lgn
                    
                }
               
            });
        
        } catch (err) {
            console.log(err.message);
            throw err;
        }

        
    }
}

export const loadMisPcs = (UserId) => {

    return async dispatch => {
        try {
            const result = await fetchMispcs(UserId);
            console.log(result)
            dispatch({ type:LOAD_MISPCS, misPcs: result.rows._array })
        } catch (error) {
            throw error;
        }
    }
}


export const deletePC = (id) => {
    return async dispatch => {
        try {
            
            await deleteAddress(id);
            dispatch({ type:DELETE_MISPCS})
           
        } catch (error) {
            throw error;
        }
    }
}