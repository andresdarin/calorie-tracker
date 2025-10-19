type CalorieDisplayProps = {
    calories: number;
    text: string;
}

export default function CalorieDisplay({ calories, text }: CalorieDisplayProps) {
    return (
        <div className="text-white p-4 rounded w-64">
            <h3 className="font-bold text-lg mb-2">{calories}</h3>
            <p className="text-2xl">{text}</p>
        </div>
    )
}
