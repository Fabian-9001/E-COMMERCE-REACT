import React from 'react'

const InputSearch = ({ setInputText, inputText }) => {

    const handleChange = e => {
        setInputText(e.target.value)
    }

    return (
        <input className='home__input' value={inputText} type="text" onChange={handleChange} />
    )
}

export default InputSearch