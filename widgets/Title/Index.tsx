import styles from './Title.module.css'
import Select from 'components/Select/Index'

const Title = () => {
    const filters = [
        {
            id: 1,
            value: 'all',
            title: 'All Products'
        },
        {
            id: 2,
            value: 'new',
            title: 'New Products'
        },
        {
            id: 3,
            value: 'sets',
            title: 'Sets'
        },
        {
            id: 4,
            value: 'skincare',
            title: 'Skincare'
        }
    ]
    return (
        <section className="w-full flex flex-wrap mt:my-20 my-14 px-4 md:px-10">
            <div className="md:w-1/2 w-full flex flex-wrap">
                <h1 className="md:text-5xl text-3xl w-full">All Products</h1>
                <p className="mt-6 font-thin">A 360° look at Lumin</p>
            </div>
            <div className="md:w-1/2 w-full md:mt-auto mt-10 flex flex-wrap md:justify-end">
                <div className={styles.select_custom}>
                    <Select
                        label="Filter by"
                        options={filters}
                    />
                </div>
            </div>
        </section>
    );
};

export default Title;