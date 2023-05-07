import css from './Footer.module.css'

const Footer = props => {
	return (
		<footer className={css.footer}>
			<div className={css.counts} />
			<div className={css.copy}>
				Created by Polina 2023
			</div>
		</footer>
	)
}

export default Footer