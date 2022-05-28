import React, { useEffect, useState } from 'react';

const MakeAdmin = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [users]);

    const handleMakeAdmin = id =>{
        console.log(id)
        const admin = 'true';
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({admin})
        })
        .then(res => res.json())
        .then(data => {})
    };

    return (
        <section className='px-5'>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead className='text-accent'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((u, index) => <tr key={u._id}>
                            <th>{index + 1}</th>
                            <td>{u.displayName}</td>
                            <td>{u.email}</td>
                            <td>{
                                u.admin === 'true' ?
                                <p className='text-orange-500'>Admin</p>:
                                <p>User <button onClick={()=>handleMakeAdmin(u._id)} className='btn btn-sm bg-accent text-white border-0 ml-3'>Make Admin</button></p>
                            }</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MakeAdmin;