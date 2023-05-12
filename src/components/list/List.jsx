import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'

const List = props => {
	const {title, type, tasks, addNewTask} = props
	const [isFormVisible, setFormVisible] = useState(false)
	const [isSelectVisible, setSelectVisible] = useState(false)

	const handleClick = () => {
		setFormVisible(!isFormVisible)
		setSelectVisible(!isSelectVisible)
	}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return (
					<Link to={`/tasks/${task.id}`} className={css.taskLink}>
						<div key={task.id} className={css.task}>{task.title}</div>
					</Link>
				)
			})}
			{type === LIST_TYPES.BACKLOG && <button className={css.addButton} onClick={handleClick}>+ Add card</button>}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
			)}
			{type === LIST_TYPES.IN_PROGRESS && <button className={css.addButton} onClick={handleClick}>+ Add task</button>}
			{type === LIST_TYPES.IN_PROGRESS && isSelectVisible && (
				<select className={css.select}>
					{tasks.map(task => {
						return (
							<option value={title}>{title}</option>
						)
					})}
				</select>
			)}
		</div>
	)
}

export default List