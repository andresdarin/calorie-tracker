import type { Activity } from "../types";

export type ActivityActions = {
    type: 'SAVE_ACTIVITY'; //tipo de accion que vamos a realizar
    payload: { newActivity: Activity }; //los datos de la actividad que queremos guardar en el state
}

type ActivityState = {
    activities: Activity[]; //array de actividades que vamos a manejar en el state
}

export const initialState: ActivityState = {
    activities: [] //inicialmente el array de actividades esta vacio
}

export const activityReducer = (
    state: ActivityState = initialState, //estado inicial
    action: ActivityActions //accion que vamos a realizar
) => {
    if (action.type === 'SAVE_ACTIVITY') { //maneja la logica para guardar una nueva actividad
        return {
            ...state, //toma una copia que siempre es recomendable porque el state es inmutable y no se debe modificar directamente
            activities: [...state.activities, action.payload.newActivity] //agregamos la nueva actividad al array de actividades
        }
    }
    return state; //si no se cumple ninguna accion, retornamos el estado actual
}

