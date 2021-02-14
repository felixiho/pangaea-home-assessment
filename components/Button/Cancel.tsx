import React, { Ref, RefObject } from 'react';

type Props = {
    buttonRef: RefObject<HTMLButtonElement>,
    handleClick: Function
}
const Cancel = (props:Props) => {
    return (
        <button ref={props.buttonRef} onClick={() => props.handleClick(false)} className="absolute left-0">
            <div className="w-6 h-6 border-brown-400 border rounded-full flex justify-center">
                <svg viewBox="0 0 256 512" focusable="false" role="presentation" className="w-2">
                    <path fill="#2b2e2b"
                        d="M231.293 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L70.393 256 251.092 74.87c4.686-4.686 4.686-12.284 0-16.971L231.293 38.1c-4.686-4.686-12.284-4.686-16.971 0L4.908 247.515c-4.686 4.686-4.686 12.284 0 16.971L214.322 473.9c4.687 4.686 12.285 4.686 16.971-.001z">
                    </path>
                </svg>
            </div>
        </button>
    );
};

export default Cancel;