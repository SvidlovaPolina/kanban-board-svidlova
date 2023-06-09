import { useState } from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import { formatDate } from '../../utils'
import notFoundIcon from '../../assets/not-found.svg'
import FormAddDescription from '../forms/FormAddDescription'
import css from './TaskDetail.module.css'

const TaskDetail = (props) => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks, setTasks} = props
	const task = tasks.find(task => task.id === taskId)
	const [isFormDescriptionVisible, setFormDescriptionVisible] = useState(false)

	const updateDescription = (description) => {
		const updatedTasks = tasks.map(task => {
			if (task.id === taskId) {
			  return {...task, description: description}
			}
			return task
		  })
		  setTasks(updatedTasks)
	}
	
	const AddDescriptionClick = () => {
		setFormDescriptionVisible(!isFormDescriptionVisible)
	}

	const renderTaskDetails = () => {
		return (
			<>
				<p className={css.createdAt}>Created at: {formatDate(task.created)}</p>
				<p>Description: {task.description || 'This task has no description'}</p>
				<button className={css.addButton} onClick={AddDescriptionClick}>+ Add description</button>
				{isFormDescriptionVisible && (
					<FormAddDescription updateDescription={updateDescription} currentDescription={task.description} setFormDescriptionVisible={setFormDescriptionVisible} />
				)}
			</>
		)
	}

	const renderEmptyState = () => {
		return (
			<div className={css.emptyState}>
				<h2>Task with ID <em>{taskId}</em> was not found</h2>
				<img className={css.emptyStateIcon} src={notFoundIcon} alt='' />
			</div>
		)
	}

	return (
		<>
			<div className={css.wrapper}>
			<div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
				<Link to='/' className={css.homeLink}>&#9587;</Link>
			</div>
				{task ? renderTaskDetails() : renderEmptyState()}
			</div>
		</>
	)
}

export default TaskDetail