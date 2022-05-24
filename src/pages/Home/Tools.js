import React, { useEffect, useState } from 'react';
import ToolsCard from './ToolsCard';

const Tools = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>  setProducts(data))
    },[]);
    return (
        <section className='my-14 w-11/12 mx-auto'>
            <h1 className='text-5xl text-secondary mb-14 text-center'>Tools</h1>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                {
                    products.slice(0, 4).map(product => <ToolsCard key={product._id} product={product}></ToolsCard>)
                }
            </div>
        </section>
    );
};

export default Tools;