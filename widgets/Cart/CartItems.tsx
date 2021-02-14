import CartProduct from "components/Product/CartProduct"
import styles from './Cart.module.css'

const CartItems = () => {

    const item =  {
        id: 1,
        title: 'Ultra-Hydrating Moisturizing Balm',
        price: 10000,
        quantity: 1,
        image_url: 'https://d1b929y2mmls08.cloudfront.net/luminskin/img/new-landing-page/charcoal-cleanser.png'
    }
    const currency =  "USD"
    return (
        <section className={`w-full mb-12`}>
            <CartProduct currency={currency} item={item} />
            <CartProduct currency={currency} item={item} />
            <CartProduct currency={currency} item={item} />
            <CartProduct currency={currency} item={item} />
            <CartProduct currency={currency} item={item} />
            <CartProduct currency={currency} item={item} />
            <CartProduct currency={currency} item={item} />
        </section>
    );
};

export default CartItems;