import {  useDispatch, useSelector } from 'react-redux'
import Quantity from "components/Button/Quantity";
import { useRef } from "react";
import { removeFromCart } from 'redux/actions/cart';

type Props = {
    item: {
        id: number,
        title: string,
        price: number,
        image_url: string
    },
    quantity: number
}

const CartProduct = (props: Props) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const { item, quantity } = props
    const buttonRef = useRef(null)
    const removeItem = (id: number) => {
        dispatch(
            removeFromCart({
                id
            })
        )
    }
    return (
        <div className="w-full flex relative bg-white p-3 mb-3">
            <button ref={buttonRef} onClick={() => removeItem(item.id)} className="absolute right-0">
                <div className="w-6 h-6 flex justify-center">
                    X
                </div>
            </button>
            <div className=" w-4/6 flex flex-wrap">
                <h2 className="w-full">{item.title}</h2>
                <h4 className="w-full text-xs mt-1">MADE FOR: ***</h4>
                <p className="w-full text-xs mt-1 font-thin">Oily</p>
                <p className="w-full text-xs mt-1 font-thin">One time purchase of Two Month supply.</p>
                <div className="w-full inline-flex mt-3 justify-between">
                    <Quantity quantity={quantity} id={item.id} />
                    <h2 className="font-thin overflow-hidden my-auto">{products.activeCurrency} {(item.price*quantity).toFixed(2)}</h2>
                </div>
            </div>
            <div className="w-2/6 md:mx-8 lg:mx-12 mx-4 my-auto">
                <img src={item.image_url} className="object-contain flex-1  mt-auto w-full product-image-cart" />
            </div>
        </div>
    );
};

export default CartProduct;