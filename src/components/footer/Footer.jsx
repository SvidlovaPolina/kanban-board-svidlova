import { LIST_TYPES, LIST_COPY } from '../../config'
import css from './Footer.module.css'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					return (
						<p key={LIST_COPY[type]} className={css.count}>{LIST_COPY[type]}: {listTasks.length}</p>
					)
				})}
			</div>
			<div className={css.copy}>
				Created by Polina 2023
			</div>
		</footer>
	)
}

export default Footer