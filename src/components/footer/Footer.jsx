import { LIST_TYPES, LIST_COPY } from '../../config'
import css from './Footer.module.css'

const Footer = props => {
	const {tasks} = props
	return (
		<footer className={css.footer}>
			<div className={css.counts}>
				{Object.values(LIST_TYPES).map(type => {
					const listCount = tasks.filter(task => task.status === type)
					return (
						<div key={type} className={css.count}>{LIST_COPY[type]}: {listCount.length}</div>
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