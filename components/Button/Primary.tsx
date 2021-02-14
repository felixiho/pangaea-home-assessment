import React from 'react';

type Props = {
    value: string,
    type: 'button' | 'submit',
    handleClick: Function
}
const PrimaryButton = (props: Props) => {
    const {
        type,
        value,
        handleClick,
    } = props
    return (
        <button
            onClick={(e) => handleClick(e)}
            type={type}
            className="bg-brown-700 w-full text-light-400 flex justify-center py-3  outline-none transition ease-linear duration-200 hover:bg-brown-800 focus:outline-none"
        >
            {value}
        </button>
    );
};

export default PrimaryButton;