import { useSelector, useDispatch } from 'react-redux'
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from 'services/graphql/queries/products';
import ProductLoader from 'widgets/Loaders/ProductLoader';
import Product from 'components/Product/Index';
import { addProducts } from 'redux/actions/products';
import { useEffect } from 'react';


const Products = () => {
    const products = useSelector((state) => state.products)
    const dispatch = useDispatch()

    const { loading, data, error } = useQuery(
        GET_ALL_PRODUCTS, {
        variables: { currency: products.activeCurrency},
    }
    );

    useEffect(() => {
        if (data) {
            dispatch(
                addProducts(
                    data.products
                )
            )
        }
    }, [data])

    if ((!products.allProducts.length && loading) || !products.allProducts.length) return <ProductLoader />
    if (error) return <div>An error occurred</div>

    return (
        <section className=" flex w-full justify-center mt-10 bg-light-300">
            <div className="w-full flex flex-wrap  py-12 landing-max px-2 md:px-8 ">
                {
                    products.allProducts.length &&
                    products.allProducts.map(product =>
                        <div key={product.id} className="md:w-1/3 w-1/2 lg:px-10 md:px-4 px-2 mt-auto">
                            <Product
                                id={product.id}
                                image_url={product.image_url}
                                price={product.price}
                                title={product.title}
                            />
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Products;