import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const [inventories, setInventories] = useState([]);


    const handleDeleteInventory = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            console.log('deleting user with id', id);
            fetch(`http://localhost:5000/manageinventories/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        // console.log(data);
                        const remaining = inventories.filter(inventory => inventory._id !== id);
                        setInventories(remaining);
                    }
                });
        }
    }


    useEffect(() => {
        // const email = user?.email;
        // fetch(`http://localhost:5000/inventoryfilter?email=${email}`, {
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(data => setInventories(data));


        // 
        const getMyItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/inventoryfilter?email=${email}`;

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setInventories(data);
            } catch (error) {
                console.log(error.message);
            }
        }
        getMyItems();
        //
    }, [user, handleDeleteInventory]);

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h3 className='my-3 text-center'>My Inventories</h3>

            <div className="table-responsive">
                <table className="table table-striped table-hover w-75 mx-auto">
                    <caption>List of Inventories</caption>
                    <thead className="table-light text-center">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Supplier Name</th>
                            <th scope="col">Delete Item</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            inventories.map((inventory, index) =>
                                <tr key={inventory._id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{inventory.name}</td>
                                    <td>{inventory.description}</td>
                                    <td>{inventory.price}</td>
                                    <td>{inventory.quantity}</td>
                                    <td>{inventory.supplierName}</td>
                                    <td><button onClick={() => handleDeleteInventory(inventory._id)} type="button" className="btn btn-danger">X</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default MyItems;