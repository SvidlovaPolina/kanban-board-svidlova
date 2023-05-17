import { LIST_TYPES, LIST_COPY } from '../../config'
import css from './Footer.module.css'

function Footer(props) {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).filter(t => t === 'finished' || t === 'backlog').map(type => {
					const listTasks = tasks.filter(task => task.status === type)
					let name;
					if(type === 'backlog') name = 'Active tasks';
					if(type === 'finished') name = 'Finished tasks';
					return (
						<p key={LIST_COPY[type]} className={css.count}>{name}: {listTasks.length}</p>
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