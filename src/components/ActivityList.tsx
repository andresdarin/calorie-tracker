import type { Activity } from "../types";
import categories from '../data/categories';
import { useMemo, type Dispatch } from "react";
import { Pen, Trash } from "lucide-react";



type ActivityListProps = {
    activities: Activity[];
    dispatch: Dispatch<any>;
};

export const ActivityList = ({ activities, dispatch }: ActivityListProps) => {

    const categoryName = useMemo(() =>
        (category: Activity['category']) =>
            categories.map((cat) => cat.id === category ? cat.name : '').join(''),
        [activities]);

    const isEmptyActivity = useMemo(() => activities.length === 0, [activities]);


    return (
        <>
            <h2 className="font-bold text-lg flex justify-center">Activity List</h2>

            {isEmptyActivity && (
                <p className="text-center italic text-gray-500">No activities added yet.</p>
            )}
            {activities.map((activity) => (
                <div key={activity.id} className="border-b border-slate-300 py-2 last:border-0">
                    <div className="flex flex-row space-y-2 justify-between relative">
                        <div>
                            <p className={` w-fit -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-red-500' : 'bg-blue-500'}`}>{categoryName(activity.category)}</p>
                            <p className="uppercase">{activity.name}</p>
                            <p className="text-sm italic">Calories: {activity.calories}</p>
                        </div>

                        <div className="flex flex-row top-2 right-2 gap-2">
                            <button onClick={() => dispatch({ type: 'SET_ACTIVE_ID', payload: { id: activity.id } })} className=" top-2 right-2 p-2 rounded-full hover:bg-slate-200">
                                <Pen size={16} />
                            </button>
                            <button onClick={() => dispatch({ type: 'DELETE_ACTIVITY', payload: { id: activity.id } })} className=" top-2 right-2 p-2 rounded-full hover:bg-slate-200">
                                <Trash size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
