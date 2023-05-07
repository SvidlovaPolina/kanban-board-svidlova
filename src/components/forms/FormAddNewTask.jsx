import clsx from 'clsx'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	return (
		<form className={css.form}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
			/>
			<button className={css.submit} type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask

/*<textarea
				className={clsx(css.input, css.textarea)}
				id='taskDescription'
				name='description'
				placeholder='Enter task description'
			/>*/