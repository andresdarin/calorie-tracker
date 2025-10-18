import { useEffect, useMemo, useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import Form from "./components/Form"
import { ActivityList } from "./components/ActivityList"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState) //usamos el reducer para manejar el estado de las actividades 

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities));
  }, [state.activities]);

  const canRestartApp = () => useMemo(() => state.activities.length, [state.activities]);

  return (
    <>
      <header className="bg-lime-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Calorie Tracker
          </h1>
          <button disabled={!canRestartApp()} onClick={() => dispatch({ type: 'RESTART_APP' })} className="bg-white text-lime-700 px-3 py-1 rounded hover:bg-lime-100 font-bold disabled:opacity-50 disabled:cursor-not-allowed">
            Restart
          </button>
        </div>
      </header>

      <section className="py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Form
            state={state}
            dispatch={dispatch}
          />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
