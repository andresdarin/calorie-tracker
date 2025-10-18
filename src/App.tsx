import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import Form from "./components/Form"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState) //usamos el reducer para manejar el estado de las actividades 

  return (
    <>
      <header className="bg-lime-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Calorie Tracker
          </h1>
        </div>
      </header>

      <section className="py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Form

            dispatch={dispatch}
          />
        </div>
      </section>
    </>
  )
}

export default App
