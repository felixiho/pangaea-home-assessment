import CartProduct from "components/Product/CartProduct"
import { useSelector } from 'react-redux'


const CartItems = () => {
    const cart = useSelector((state) => state.cart)
    const products = useSelector((state) => state.products)
    const getItem = (id) => products.allProducts.find(product => product.id === id)
    return (
        <section className={`w-full mb-12`}>
            {
                cart.cartItems.length &&
                cart.cartItems.map(
                    cartItem =>
                        <CartProduct
                            key={cartItem.id}
                            quantity={cartItem.quantity}
                             item={getItem(cartItem.id)}
                        />
                )
            }

        </section>
    );
};

export default CartItems;