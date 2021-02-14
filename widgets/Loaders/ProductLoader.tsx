import CustomLoader from "./CustomLoader"



const ProductLoader = () => {
    return (
        <section className=" flex w-full justify-center mt-10 bg-light-300">
            <div className="w-full flex flex-wrap  py-12 landing-max px-2 md:px-8 ">
                <div className="md:w-1/3 w-1/2 lg:px-10 md:px-4 px-2">
                    <CustomLoader />
                </div>
                <div className="md:w-1/3 w-1/2 lg:px-10 md:px-4 px-2">
                    <CustomLoader />
                </div>
                <div className="md:w-1/3 md:flex hidden lg:px-10 md:px-4">
                    <CustomLoader />
                </div>
            </div>
        </section>
    );
};

export default ProductLoader;