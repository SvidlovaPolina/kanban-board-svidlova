import Board from '../board/Board'
import css from './Main.module.css'

const Main = props => {
    const {tasks, setTasks} = props
    return (
        <main className={css.main}>
            <Board tasks={tasks} setTasks={setTasks} />
        </main>
    )
}

export default Main