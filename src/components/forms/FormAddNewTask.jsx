import { useState } from 'react'
import css from './Forms.module.css'

const FormAddNewTask = props => {
	const {addNewTask, setFormVisible} = props
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
			addNewTask(values.title)
		}
		setFormVisible(false)
		//обработать пустое значение title, чтобы пользователь понял, что пустая задача не добавится
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
			<button className={css.submit} type='submit'>Submit</button>
		</form>
	)
}

export default FormAddNewTask