import ContentLoader from "react-content-loader"

const CustomLoader = () => {
    return (
        <ContentLoader
            width="100%"
            height={'33vh'}
            speed={2}
            backgroundColor="#DADCDA"
            foregroundColor="#cdd1ce"
            uniqueKey={Math.random().toString(36).substring(7)}
        >
            <rect x="0" y="0" rx="7" ry="7" width='100%' height="160" />
            <rect x="0" y="175" rx="7" ry="7" width='100%' height="30" />
            <rect x="0" y="220" rx="7" ry="7" width='100%' height="20" />
            <rect x="0" y="255" rx="7" ry="7" width='100%' height="40" />
        </ContentLoader>
    );
};

export default CustomLoader;