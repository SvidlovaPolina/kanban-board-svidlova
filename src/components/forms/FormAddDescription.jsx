import { useState } from 'react'
import clsx from 'clsx'
import css from './Forms.module.css'

const FormAddDescription = props => {
    const {formSubmit, setFormDescriptionVisible} = props
    const [values, setValues] = useState({
		description: '',
	})

    const descriptionChange = (e) => {
		const fieldName = e.target.name
		setValues({...values, [fieldName]: e.target.value})
	}

    const descriptionSubmit = (e) => {
		e.preventDefault()
		if (values.description) {
			formSubmit(values.description)
		}
		setFormDescriptionVisible(false)
	}

    return (
        <form className={css.form} onSubmit={descriptionSubmit}>
            <textarea
                className={clsx(css.input, css.textarea)}
                id='taskDescription'
                name='description'
                placeholder='Enter task description'
                value={values.description}
				onChange={descriptionChange}
            />
            <button className={css.submit} type='submit'>Submit</button>
        </form>
    )
}

export default FormAddDescription