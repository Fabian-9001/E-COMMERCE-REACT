import React from 'react'

const FilterPrice = ({ setFilterByPrice }) => {



    const handleSubmit = e => {
        e.preventDefault()
        const from = +e.target.from.value
        const to = +e.target.to.value
        const obj = {
            from: from,
            to: to !== 0 ? to : Infinity
        }
        setFilterByPrice(obj)
    }

    return (
        <section className='container__filterByPrice'>
            <form className='form__filterByPrice' onSubmit={handleSubmit}>
                <div>
                    <label className='form__filterByPrice__label' htmlFor="from">From</label>
                    <input className='form__filterByPrice__input' type="number" id='from' />
                </div>

                <div>
                    <label className='form__filterByPrice__label' htmlFor="to">To</label>
                    <input className='form__filterByPrice__input' type="number" id='to' />
                </div>
                <button className='form__filterByPrice__btn'>Filter</button>
            </form>
        </section>
    )
}

export default FilterPrice