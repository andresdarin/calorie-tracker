import type { Activity } from "../types";

export type ActivityActions =
    { type: 'SAVE_ACTIVITY', payload: { newActivity: Activity } } | //accion para guardar una nueva actividad
    { type: 'SET_ACTIVE_ID', payload: { id: Activity['id'] } } | //accion para establecer la actividad activa
    { type: 'DELETE_ACTIVITY', payload: { id: Activity['id'] } } |
    { type: 'RESTART_APP' }; //accion para reiniciar la aplicacion


export type ActivityState = {
    activities: Activity[], //array de actividades que vamos a manejar en el state
    activeId: Activity['id'] //id de la actividad que esta activa en el momento
}

export const localStorageActivities = (): Activity[] => {
    const storedActivities = localStorage.getItem('activities');
    return storedActivities ? JSON.parse(storedActivities) : [];
};


export const initialState: ActivityState = {
    activities: [], //inicialmente el array de actividades esta vacio
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState, //estado inicial
    action: ActivityActions //accion que vamos a realizar
) => {
    if (action.type === 'SAVE_ACTIVITY') { //maneja la logica para guardar una nueva actividad

        let updatedActivities: Activity[] = [];
        if (state.activeId) {
            updatedActivities = state.activities.map(act =>
                act.id === state.activeId ? action.payload.newActivity : act
            );
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity];
        }
        return {
            ...state, //toma una copia que siempre es recomendable porque el state es inmutable y no se debe modificar directamente
            activities: updatedActivities, //actualiza el array de actividades con la nueva actividad
            activeId: '' //resetea la actividad activa despues de guardar
        }
    }
    if (action.type === 'SET_ACTIVE_ID') {
        return {
            ...state, //toma una copia del estado actual
            activeId: action.payload.id //establece la nueva actividad activa
        }
    }//maneja la logica para establecer la actividad activa
    if (action.type === 'DELETE_ACTIVITY') {
        return {
            ...state, //toma una copia del estado actual
            activities: state.activities.filter(act => act.id !== action.payload.id) //elimina la actividad del array
        }
    }//maneja la logica para eliminar una actividad
    if (action.type === 'RESTART_APP') {
        return {
            activities: [],
            activeId: ''
        }; //reinicia el estado a su valor inicial
    }//maneja la logica para reiniciar la aplicacion
    return state; //si no se cumple ninguna accion, retornamos el estado actual
}

