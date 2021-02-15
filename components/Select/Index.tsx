import { useEffect, useState } from 'react';
import styles from './Select.module.css'

type Option = {
    id: number,
    value: string,
    title: string
}
interface Props {
    label?: string,
    options: Option[],
    selected: string,
    handleChange?: Function,
    small? : Boolean
}
const Select = (props: Props) => {
    const { label, options } = props
    const [active, setActive] = useState<Boolean>(false)
    return (
        <div className={`${active ? "border-black" : "border-brown-500"} font-thin border bg-white relative inline-flex w-full`}>
            <select
                {...(!props.selected && { defaultValue: "DEFAULT" })}
                onChange={(e) => props.handleChange(e)}
                onBlur={() => setActive(false)}
                onFocus={() => setActive(true)}
                className={`w-full ${props.small ? "p-1 pl-2 text-sm" : " px-4 py-6 pr-8"}   transition ease-linear duration-200 cursor-pointer appearance-none focus:outline-none `}>
                <option disabled value="DEFAULT" >{label}</option>
                {
                    options.map(
                        option =>
                            <option
                                className="font-thin"
                                value={option.value}
                                key={option.id}
                                selected={option.value === props.selected}
                            >
                                {option.title}
                            </option>
                    )
                }
            </select>
            <div className={`absolute ${props.small ? "py-1 right-2" : "right-4 py-6 "}   cursor-pointer`}>
                <svg viewBox="0 0 24 24" role="presentation" className="text-brown-100 h-6 w-6" focusable="false" aria-hidden="true"><path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z">
                </path></svg>
            </div>
        </div>

    );
};

export default Select;