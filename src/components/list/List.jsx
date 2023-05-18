import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'

const List = props => {
	const {title, type, tasks, addNewTask, allTasks, setTasks} = props
	const [isFormVisible, setFormVisible] = useState(false)
	const [isSelectVisible, setSelectVisible] = useState(false)

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}

	const handleSelectClick = () => {
		setSelectVisible(!isSelectVisible)
	}

	const handleSelectChange = (e) => {
		const updatedTasks = allTasks.map(task => {
			if (task.id === e.target.value) {
			  return {...task, status: type}
			}
			return task
		  })
		  setTasks(updatedTasks)
		  setSelectVisible(false)
	}

	const formSubmit = (title) => {
		addNewTask(title)
		setFormVisible(false)
	}

	const emptyBacklog = allTasks.filter(task => task.status === "backlog").length === 0
	const emptyReady = allTasks.filter(task => task.status === "ready").length === 0
	const emptyInProgress = allTasks.filter(task => task.status === "inProgress").length === 0

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			<div className={css.scroll}>
			{tasks.length? 
				tasks.map(task => 
					<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
						<div className={css.task}>{task.title}</div>
					</Link>
			) : 
				<p>No tasks added yet</p>
			}
			</div>
			
			{type === LIST_TYPES.BACKLOG && <button className={css.addButton} onClick={handleAddNewClick}>+ Add card</button>}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask formSubmit={formSubmit} />
			)}

			<div className={css.lists}>
			{type === LIST_TYPES.READY && <button className={css.addButton} disabled={emptyBacklog} onClick={handleSelectClick}>+ Add task</button>}
			{type === LIST_TYPES.READY && isSelectVisible &&
			<select key={tasks} className={css.select} onChange={handleSelectChange}>
				<option>Сhoose task</option>
				{
					allTasks.filter(task => task.status === "backlog").map(task => {
						return <option key={task.id} value={task.id}>{task.title}</option>
					})
				}
			</select>
			}
			</div>

			<div className={css.lists}>
			{type === LIST_TYPES.IN_PROGRESS && <button className={css.addButton} disabled={emptyReady} onClick={handleSelectClick}>+ Add task</button>}
			{type === LIST_TYPES.IN_PROGRESS && isSelectVisible &&
			<select key={tasks} className={css.select} onChange={handleSelectChange}>
				<option>Сhoose task</option>
				{
					allTasks.filter(task => task.status === "ready").map(task => {
						return <option key={task.id} value={task.id}>{task.title}</option>
					})
				}
			</select>
			}
			</div>

			<div className={css.lists}>
			{type === LIST_TYPES.FINISHED && <button className={css.addButton} disabled={emptyInProgress} onClick={handleSelectClick}>+ Add task</button>}
			{type === LIST_TYPES.FINISHED && isSelectVisible &&
			<select key={tasks} className={css.select} onChange={handleSelectChange}>
				<option>Сhoose task</option>
				{
					allTasks.filter(task => task.status === "inProgress").map(task => {
						return <option key={task.id} value={task.id}>{task.title}</option>
					})
				}
			</select>
			}
			</div>
		</div>
	)
}

export default List