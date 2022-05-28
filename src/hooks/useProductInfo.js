import { useEffect, useState } from "react";

const useProductInfo = id => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `https://thawing-wave-57644.herokuapp.com/products/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return [product, setProduct]
};

export default useProductInfo;