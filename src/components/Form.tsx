import { useState } from "react";
import categories from "../data/categories"

export default function Form() {

    const [activity, setActivity] = useState({
        category: 1,
        name: '',
        calories: 0
    });

    const handleChange = () => {

    };

    return (
        <form className="grid grid-cols-1 gap-3">
            <label htmlFor="category">Category:</label>
            <select id="category" value={activity.category} name="category" className="border border-slate-300 p-2 rounded">
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

                    name="calories"
                    className="border border-slate-300 p-2 rounded"
                    placeholder="Enter calories burned" />
            </div>
            <input
                type="submit"
                className="bg-gray-800 text-white p-2 rounded hover:bg-sky-400"
                value="Guardar Comida o Guardar Actividad" />
        </form>
    )
}
