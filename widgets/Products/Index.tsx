import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PRODUCTS } from 'services/graphql/queries/products';
import ProductLoader from 'widgets/Loaders/ProductLoader';


const Products = () => {
    const { loading, data, error } = useQuery(
        GET_ALL_PRODUCTS, {
        variables: { currency: 'NGN' },
    }
    );
    if (loading) return <ProductLoader />
    if (error) return <div>An error occurred</div>
    return (
        <section className="w-full">
            <ProductLoader />
        </section>
    );
};

export default Products;