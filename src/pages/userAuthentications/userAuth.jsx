import { useState } from 'react';
import Register from './register/Register';
import Login from './login/login';

const UserAuth = () => {
    const [form, setForm] = useState(true);

    const handleShowForm = () => {
        setForm(!form);
    };

    return (
        <>
            <div className='d-flex justify-content-center mt-4'>
                <button className='btn btn-danger' onClick={handleShowForm}>
                    {form ? 'Show Register Form' : 'Show Login Form'}
                </button>
            </div>
            {form ? <Login /> : <Register />}
        </>
    );
};

export default UserAuth;
