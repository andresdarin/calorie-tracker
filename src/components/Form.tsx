import { useState, type ChangeEvent, type Dispatch, type FormEvent } from "react";
import categories from "../data/categories"
import type { Activity } from "../types";
import type { ActivityActions } from "../reducers/activity-reducer";
import { initialState } from '../reducers/activity-reducer';

type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

export default function Form({ dispatch }: FormProps) {

    const initialState = {
        category: 1,
        name: '',
        calories: 0
    };
    const [activity, setActivity] = useState<Activity>(initialState);


    const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.name);

        setActivity({
            ...activity,
            [e.target.name]: isNumberField ? +(e.target.value) : e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(activity);

        dispatch({
            type: 'SAVE_ACTIVITY', //enviamos el tipo de accion al reducer
            payload: { newActivity: activity } //enviamos la nueva actividad al reducer
        });

        setActivity(initialState);
    }

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== '' && calories > 0;
    }

    return (
        <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
            <label htmlFor="category">Category:</label>
            <select id="category" value={activity.category} onChange={handleChange} name="category" className="border border-slate-300 p-2 rounded">
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="name"
                    className="font-bold">
                    Activity:
                </label>
                <input
                    type="text"
                    id="name"
                    value={activity.name}
                    onChange={handleChange}
                    name="name"
                    className="border border-slate-300 p-2 rounded"
                    placeholder="Food, Orange Juice, Salad, Excercise, Lifting, etc..." />

            </div>
            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="calories"
                    className="font-bold">
                    Calories:
                </label>
                <input
                    type="text"
                    id="calories"
                    value={activity.calories}
                    onChange={handleChange}
                    name="calories"
                    className="border border-slate-300 p-2 rounded"
                    placeholder="Enter calories burned" />
            </div>
            <input
                type="submit"
                className="bg-gray-800 text-white p-2 rounded hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                value=
                {categories.find(cat => cat.id === activity.category)?.name
                    ? `Add ${categories.find(cat => cat.id === activity.category)?.name}`
                    : 'Add Activity'}
                disabled={!isValidActivity()}
            />

        </form>
    )
}
