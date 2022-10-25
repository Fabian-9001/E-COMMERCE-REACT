import React from 'react'

const CartPurchase = ({ purchase }) => {


    return (
        <article>
            <header>
                {purchase.updatedAt}
            </header>
            <div>
                {
                    purchase.cart.products.map(product => (
                        <section key={product.id}>
                            <h3>{product.title}</h3>
                            <div>{product.productsInCart.quantity}</div>
                            <div>${product.price}</div>
                        </section>
                    ))
                }
            </div>
        </article>
    )
}

export default CartPurchase