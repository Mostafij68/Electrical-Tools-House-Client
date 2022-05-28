import React from 'react';

const DeleteModal = ({ children }) => {
    const handleDelete = id => {
        const url = `https://thawing-wave-57644.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {});
    };

    return (
        <div>
            <div class="modal" id="delete">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Do you want to Cancel your order?</h3>
                    <div class="modal-action">
                        <a onClick={() => handleDelete(children)} href="#" class="btn">Yes</a>
                        <a href="#" class="btn">No</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteModal;