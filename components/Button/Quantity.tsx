import React from 'react';
import { useDispatch } from 'react-redux'
import { updateCart } from 'redux/actions/cart';
interface Props {
    quantity: number,
    id: number
}
const Quantity = (props: Props) => {
    const dispatch = useDispatch()
    let { quantity, id } = props
    const adjustQuantity = (increase: Boolean) => {
        dispatch(
            updateCart({
                id,
                increase
            })
        )
    }
    return (
        <div className="inline-flex justify-around md:w-24 w-16 border-black border p-1">
            <span onClick={() => adjustQuantity(false)} className="text-xs my-auto cursor-pointer">-</span>
            <span>{quantity}</span>
            <span onClick={() => adjustQuantity(true)} className="text-xs my-auto cursor-pointer">+</span>
        </div>
    );
};

export default Quantity;