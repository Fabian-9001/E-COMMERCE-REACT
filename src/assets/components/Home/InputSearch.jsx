import React from 'react'

const InputSearch = ({ setInputText, inputText }) => {

    const handleChange = e => {
        setInputText(e.target.value)
    }

    return (
        <section className='container__input'>
            <form className='form__input' action="">
                    <input className='search__input' value={inputText} type="text" onChange={handleChange} />
            </form>
        </section>
    )
}

export default InputSearch