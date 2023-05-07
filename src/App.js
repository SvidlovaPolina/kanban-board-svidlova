import { useState } from "react";
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import data from './mock.json'

function App() {
    const [tasks, setTasks] = useState(data)

    return (
        <div className='wrapper'>
            <Header />
            <Main tasks={tasks} setTasks={setTasks} />
            <Footer tasks={tasks} />
        </div>
    )
}

export default App
