import { LIST_TYPES, LIST_COPY } from '../../config'
import List from '../list/List'
import css from './Board.module.css'

const Board = props => {
    const {tasks, setTasks} = props
    return (
        <div className={css.board}>
            {Object.values(LIST_TYPES).map(type => {
                const listTasks = tasks.filter(task => task.status === type)
                return (
                    <List key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} setTasks={setTasks} />

                )
            })}
        </div>
    )
}

export default Board