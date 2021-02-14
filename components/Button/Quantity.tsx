import React from 'react';

interface Props {
    quantity: number
}
const Quantity = (props: Props) => {
    let { quantity } = props
    const adjustQuantity = (increase: Boolean) => {
        if (increase) {
            quantity += 1
        } else {
            quantity = quantity > 1 ? quantity - 1 : 1
        }
    }
    return (
        <div className="inline-flex justify-around md:w-24 w-16 border-black border p-1">
            <span onClick={() => adjustQuantity(true)} className="text-xs my-auto cursor-pointer">+</span>
            <span>{quantity}</span>
            <span onClick={() => adjustQuantity(false)} className="text-xs my-auto cursor-pointer">-</span>
        </div>
    );
};

export default Quantity;