import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'

const List = props => {
	const {title, type, tasks, addNewTask} = props
	const [isFormVisible, setFormVisible] = useState(false)
	const [isSelectVisible, setSelectVisible] = useState(false)

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
		setSelectVisible(!isSelectVisible)
	}

	const formSubmit = (title, description) => {
		addNewTask(title, description)
		setFormVisible(false)
	}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.length? 
				tasks.map(task => 
					<Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
						<div className={css.task}>{task.title}</div>
					</Link>
			) : 
				<p>No tasks added yet</p>
			}

			{type === LIST_TYPES.BACKLOG && <button className={css.addButton} onClick={handleAddNewClick}>+ Add card</button>} 
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask formSubmit={formSubmit} />
			)}
			{type === LIST_TYPES.READY && <button className={css.addButton} onClick={handleAddNewClick}>+ Add task</button>}
			{type === LIST_TYPES.READY && isSelectVisible && (
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