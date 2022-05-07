import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Header = () => {
    const [user, loading] = useAuthState(auth);

    const navigate = useNavigate();

    const logOut = () => {
        signOut(auth);
        navigate('/');
    }

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <nav className='d-flex justify-content-evenly align-items-center'>
                <Link className='fs-5 text-decoration-none text-black' to="/home">Home</Link>
                <Link className='fs-1 text-decoration-none text-black' to="/">Fragrance Outlet</Link>
                {
                    user ?
                        <button type='button' onClick={logOut} className='btn btn-link fs-5 text-decoration-none text-black'>Sign Out</button>
                        :
                        <Link className='fs-5 text-decoration-none text-black' to="/login">Login</Link>
                }
            </nav >
            <hr className={user ? 'mb-2' : 'mb-0'} />

            {/* if user */}
            {
                user ?
                    <div>
                        <nav className='d-flex justify-content-evenly align-items-center'>
                            <Link className='fs-5 text-decoration-none text-black' to="/manageinventories">Manage Items</Link>
                            <Link className='fs-5 text-decoration-none text-black' to="/addnewitem">Add Items</Link>
                            <Link className='fs-5 text-decoration-none text-black' to="/myitems">My Items</Link>
                        </nav>
                        <hr className='mb-0' />
                    </div>
                    :
                    <></>
            }

        </div >
    );
};

export default Header;