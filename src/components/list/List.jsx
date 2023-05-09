import { useState } from 'react'
import { LIST_TYPES } from '../../config'
import FormAddNewTask from '../forms/FormAddNewTask'
import css from './List.module.css'

const List = props => {
	const {title, type, tasks, addNewTask} = props
	const [isFormVisible, setFormVisible] = useState(false)

	const handleClick = () => {
		setFormVisible(!isFormVisible)
	}

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return (
					<div key={task.id} className={css.task}>{task.title}</div>
				)
			})}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
				<FormAddNewTask addNewTask={addNewTask} setFormVisible={setFormVisible} />
			)}
			<button className={css.addButton} onClick={handleClick}>+ Add card</button>
		</div>
	)
}

export default List