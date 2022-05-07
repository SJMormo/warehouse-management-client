import useInventories from '../../Hooks/useInventories';

const ManageInventories = () => {
    const [inventories] = useInventories({});
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
                                < tr >
                                    <th scope="row">{index + 1}</th>
                                    <td>{inventory.name}</td>
                                    <td>{inventory.description}</td>
                                    <td>{inventory.price}</td>
                                    <td>{inventory.quantity}</td>
                                    <td>{inventory.supplierName}</td>
                                    <td><button type="button" className="btn btn-danger">X</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageInventories;