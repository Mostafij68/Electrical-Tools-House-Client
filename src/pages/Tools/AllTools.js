import React from 'react';
import useProducts from '../../hooks/useProducts';
import Footer from '../../shared/Footer';
import ToolsCard from '../Home/ToolsCard';

const AllTools = () => {
    const [products, setProducts] = useProducts([]);
    
    return (
        <>
            <section className='mt-8 mb-14 w-11/12 mx-auto'>
                <h1 className='text-5xl text-secondary font-medium mb-14 text-center'>Tools</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                    {
                        products.map(product => <ToolsCard key={product._id} product={product}></ToolsCard>)
                    }
                </div>
            </section>
            <Footer></Footer>
        </>
    );
};

export default AllTools;