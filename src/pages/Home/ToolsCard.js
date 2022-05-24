import React from 'react';

const ToolsCard = ({ product }) => {
    const { _id, name, price, img, description, total, minOrder, supplier } = product
    return (
        <div class="card w-full bg-base-100 shadow-xl">
            <figure><img src={img} className='w-auto lg:h-96 h-80' alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="text-2xl font-medium">{name}</h2>
                <ul>
                    {
                        description.map(d => 
                        <li className='text-lg text-gray-600'><i class="fa-solid fa-angles-right text-secondary"></i> {d}</li>)
                    }
                </ul>
                <h5 className='text-xl font-medium mt-5'>Supplier <i class="fa-solid fa-arrow-right-long"></i> <span className='text-accent'>{supplier}</span></h5>
                <h5 className='text-xl font-medium'>Available products <i class="fa-solid fa-arrow-right"></i> {total} <span className='text-md font-normal text-gray-400'>/piece</span></h5>
                <h5 className='text-xl font-medium'>Min order : {minOrder} <span className='text-md font-normal text-gray-400'>/piece</span></h5>
                <p className='text-xl font-medium'>Price : ${price}<span className='text-md font-normal text-gray-400'>/per piece</span></p>
                <div class="card-actions justify-center">
                    <button class="btn btn-secondary text-white">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default ToolsCard;