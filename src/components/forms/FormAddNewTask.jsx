import { useState } from 'react'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const {formSubmit} = props
	const [values, setValues] = useState({
		title: '',
	})

	const handleChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (values.title) {
			formSubmit(values.title)
		}
		//обработать пустое значение title, чтобы пользователь понял, что пустая задача не добавится
		if (values.title === '') {
			<p>Please fill in the field</p>
		}
	}

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<input
				className={css.input}
				id='taskTitle'
				name='title'
				type='text'
				placeholder='Enter task title'
				value={values.title}
				onChange={handleChange}
			/>
			<div className={css.backlogButtons}>
				<button className={css.submit} type='submit'>Submit</button>
				<button className={css.submit}>Cancel</button>
			</div>
		</form>
	)
}

export default FormAddNewTask