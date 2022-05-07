import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories] = useInventories({});
    return (
        <div className='mt-5 container'>
            <h3 className='text-center'>Fragrance Collection</h3>
            <h6 className='text-center mb-5'>Explore the best selling perfumes of all times</h6>
            <Row xs={1} md={3} className="g-4">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </Row>

            <div className='d-flex justify-content-center'>
                <Link className='mt-3 w-25 btn btn-dark' to="/manageinventories">Manage Inventories</Link>
            </div>
        </div>
    );
};

export default Inventories;