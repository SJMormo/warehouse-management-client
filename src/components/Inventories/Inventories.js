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

            <div className='d-flex justify-content-center text-wrap'>

            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-6 mx-auto">
                    <Link className='mt-3 btn btn-dark w-50 d-block mx-auto' to="/manageinventories">Manage Inventories</Link>
                </div>
            </div>
        </div>
    );
};

export default Inventories;