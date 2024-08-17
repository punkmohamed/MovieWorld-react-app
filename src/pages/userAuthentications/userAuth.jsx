import { useState } from 'react';
import { useSelector } from 'react-redux';
import Register from './register/Register';
import Login from './login/login';

const UserAuth = () => {
    const [form, setForm] = useState(true);

    const translate = useSelector(state => state.languageSlice.translation);

    const handleShowForm = () => {
        setForm(!form);
    };

    return (
        <>
            <div className='d-flex justify-content-center mt-4'>
                <button className='btn btn-danger' onClick={handleShowForm}>
                    {form ? translate.ShowRegisterForm : translate.ShowLoginForm}
                </button>
            </div>
            {form ? <Login /> : <Register />}
        </>
    );
};

export default UserAuth;
