import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setInventories(data));
    })
    return (
        <div style={{ 'position': 'relative' }} className='mt-5 container'>
            <h3 className='text-center'>Fragrance Collection</h3>
            <h6 className='text-center mb-5'>Explore the best selling perfumes of all times</h6>
            <Row xs={1} md={3} className="g-4">
                {
                    inventories.map(inventory => <Inventory
                        key={inventory.id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </Row>
        </div>
    );
};

export default Inventories;