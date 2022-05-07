import { Link } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';

const ManageInventories = () => {
    const [inventories, setInventories] = useInventories({});

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
                })
        }
    }
    return (
        <div>
            <h3 className='my-3 text-center'>Manage Inventories</h3>

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
            <div className='d-flex justify-content-center'>
                <Link className='mt-1 w-25 btn btn-outline-dark' to="/addnewitem">Add New Item</Link>
            </div>
        </div >
    );
};

export default ManageInventories;