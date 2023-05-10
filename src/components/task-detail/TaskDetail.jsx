import { useRouteMatch } from 'react-router-dom'
import { formatDate } from '../../utils'
import css from './TaskDetail.module.css'

const TaskDetail = props => {
	const match = useRouteMatch()
	const {taskId} = match.params
	const {tasks} = props

	const task = tasks.find(task => task.id === taskId)
	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<h2 className={css.title}>{task.title}</h2>
			</div>
			<p className={css.createdAt}>{formatDate(task.created)}</p>
			<p>Description</p>
			<button className={css.addButton}>+ Add description</button>
		</div>
	)
}

export default TaskDetail