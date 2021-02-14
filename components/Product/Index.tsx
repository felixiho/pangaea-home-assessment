
import PrimaryButton from "components/Button/Primary";
import Link from "next/link";
import { ProductType } from "types/ProductType";


const Product = (props: ProductType) => {
    const handleClick = () => {
        console.log(props.id)
    }
    return (
        <div className="w-full flex flex-wrap flex-1 mb-32">
            <div className="w-full md:mx-8 mx-4 lex-1 ">
                <Link href={"/product"+props.id}>
                    <a className="w-full">
                        <img src={props.image_url} className="object-contain flex-1  mt-auto w-full product-image" />
                        <h3 className="my-6 lg:text-base text-sm w-full text-center">{props.title}</h3>

                    </a>
                </Link>

            </div>
            <div className=" w-full my-auto">
                <h3 className="mb-3 lg:text-base text-sm w-full   text-center">
                    From: NGN {props.price}
                </h3>
            </div>

            <div className=" w-full lg:mx-12 xl:mx-20">
                <PrimaryButton value="Add to Cart" handleClick={handleClick} type="button" />
            </div>

        </div>
    );
};

export default Product;