import Form from "./components/Form"


function App() {

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
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
