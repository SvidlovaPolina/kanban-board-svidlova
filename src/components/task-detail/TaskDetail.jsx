import { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { formatDate } from '../../utils'
import FormAddDescription from '../forms/FormAddNewTask'
import css from './TaskDetail.module.css'

const TaskDetail = props => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks, addNewTask} = props
	const [isFormDescriptionVisible, setFormDescriptionVisible] = useState(false)

	const AddDescriptionClick = () => {
		setFormDescriptionVisible(!isFormDescriptionVisible)
	}

	const task = tasks.find(task => task.id === taskId)

	return (
		<div className={css.wrapper}>
		<div className={css.close}>
		<Link to='/' className={css.homeLink}>&#9587;</Link>
		</div>
		{task ? (
			<>
				<div className={css.header}>
					<h2 className={css.title}>{task.title}</h2>
				</div>
				<p className={css.createdAt}>{formatDate(task.created)}</p>
				<p>Description: {task.description || '(No description)'}</p>
				<button className={css.addButton} onClick={AddDescriptionClick}>+ Add description</button>
				
				{isFormDescriptionVisible && (
					<FormAddDescription addNewTask={addNewTask} setFormDescriptionVisible={setFormDescriptionVisible} />
				)}
			</>
		) : (
			<h2>Task with ID {taskId} not found</h2>
		)}
		</div>
	)
}

export default TaskDetail