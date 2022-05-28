import React from 'react';

const AddProduct = () => {

    const hanldeProduct = event => {

    };
    return (
        <section className='px-3 mb-5'>
            <h2 className='mb-4 text-center text-xl font-semibold text-accent'>Add Review</h2>
            <div class="card mx-auto mt-5 md:w-2/3 w-full text-center glass p-5">

                <form onSubmit={hanldeProduct}>
                    <ul>
                        <li>
                            <input name='product' type="text" placeholder="Product Name" class="input input-bordered w-full mb-4" />
                        </li>
                        <li>
                            <input name='price' type="number" placeholder="Price /per piece" class="input input-bordered w-full mb-4" />
                        </li>
                        <li className='text-left'>
                            <label htmlFor="file">Product Image</label>
                            <input name='file' type="file" class="input input-bordered w-full p-2 mt-2 mb-4" />
                        </li>
                        <li>
                            <input name='quantity' type="number" placeholder="How many Product /Product Quantity" class="input input-bordered w-full mb-4" />
                        </li>
                        <li>
                            <input name='minOrder' type="number" placeholder="How Min Sell Order" class="input input-bordered w-full mb-4" />
                        </li>
                        <li>
                            <input name='supplier' type="text" placeholder="Brand / Company Name" class="input input-bordered w-full mb-4" />
                        </li>
                        <li>
                            <input name='email' type="email" placeholder="Your Email" class="input input-bordered w-full mb-4" />
                        </li>
                        <li>
                            <textarea name='description' class="textarea w-full textarea-bordered" placeholder="Product Description"></textarea>
                        </li>
                        <li>
                            <input className='btn btn-secondary mt-5' type="submit" value="Submit" />
                        </li>
                    </ul>
                </form>
            </div>
        </section>
    );
};

export default AddProduct;