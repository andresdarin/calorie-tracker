import { useMemo } from 'react';
import type { Activity } from '../types';
import CalorieDisplay from './CalorieDisplay';

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CalorieTracker({ activities }: CalorieTrackerProps) {

    //Contaores

    const caloriesConsumed = useMemo(() =>
        activities.reduce((total, activity) =>
            activity.category === 1 ? total + activity.calories : total, 0), [activities]);

    const caloriesBurned = useMemo(() =>
        activities.reduce((total, activity) =>
            activity.category === 2 ? total + activity.calories : total, 0), [activities]);

    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesConsumed, caloriesBurned]);

    return (
        <div className='text-center'>
            <h2 className="text-center text-white font-bold text-lg mb-4">Calorie Tracker Summary</h2>
            <div className='flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10'>
                <CalorieDisplay calories={caloriesConsumed} text="Calories Consumed" />
                <CalorieDisplay calories={caloriesBurned} text="Calories Burned" />
                <CalorieDisplay calories={netCalories} text="Net Calories" />
            </div>
        </div>
    )
}
