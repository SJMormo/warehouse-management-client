import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryDetail = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>This is inventory no: {id} </h3>
        </div>
    );
};

export default InventoryDetail;