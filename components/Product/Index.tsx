
import PrimaryButton from "components/Button/Primary";
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from "redux/actions/cart";
import { ProductType } from "types/ProductType";
import { showCart } from 'redux/actions/cart'


const Product = (props: ProductType) => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products)
    const handleClick = () => {
        dispatch(addToCart({
            id: props.id,
        }))
        dispatch(showCart({
            type: true
        }))
    }
    return (
        <div className="w-full flex flex-wrap flex-1 mb-32">
            <div className="w-full md:mx-8 mx-4 lex-1 ">
                <Link href={"/product" + props.id}>
                    <a className="w-full">
                        <img src={props.image_url} className="object-contain flex-1  mt-auto w-full product-image" />
                        <h3 className="my-6 lg:text-base text-sm w-full text-center">{props.title}</h3>

                    </a>
                </Link>

            </div>
            <div className=" w-full my-auto">
                <h3 className="mb-3 lg:text-base text-sm w-full   text-center">
                    From: {products.activeCurrency} {props.price.toFixed(2 )}
                </h3>
            </div>

            <div className=" w-full lg:mx-12 xl:mx-20">
                <PrimaryButton value="Add to Cart" handleClick={handleClick} type="button" />
            </div>

        </div>
    );
};

export default Product;