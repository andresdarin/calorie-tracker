import type { Activity } from "../types";
import categories from '../data/categories';
import { useMemo } from "react";
import { Pen } from "lucide-react";



type ActivityListProps = {
    activities: Activity[];
};

export const ActivityList = ({ activities }: ActivityListProps) => {

    const categoryName = useMemo(() =>
        (category: Activity['category']) =>
            categories.map((cat) => cat.id === category ? cat.name : '').join(''),
        [activities]);



    return (
        <>
            <h2 className="font-bold text-lg">Activity List</h2>
            {activities.map((activity) => (
                <div key={activity.id} className="border-b border-slate-300 py-2 last:border-0">
                    <div className="space-y-2 relative">
                        <p className={` w-fit -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-red-500' : 'bg-blue-500'}`}>{categoryName(activity.category)}</p>
                        <p className="uppercase">{activity.name}</p>
                        <p className="text-sm italic">Calories: {activity.calories}</p>
                        <button className="absolute top-2 right-2 p-2 rounded-full hover:bg-slate-200">
                            <Pen size={16}


                            />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
