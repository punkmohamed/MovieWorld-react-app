import { GoogleLogin } from "@react-oauth/google";
import { Formik } from "formik";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleLoginSuccess = (response) => {
        const idToken = response.credential
        console.log(response);

        try {
            const decoded = jwtDecode(idToken);
            console.log(decoded);
        } catch (error) {
            console.error('Failed to decode JWT', error);
        }
    };

    const handleLoginError = () => {
        console.log('Login Failed');
    };

    return (
        <>
            <div>
                <div className="container mt-5" style={{ width: '400px' }}>
                    <h1 className="text-center">Login</h1>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.password) {
                                errors.password = 'Required';
                            } else if (
                                values.password.length < 3
                            ) {
                                errors.password = 'Password must be at least 3 characters';
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <div className="border border-2 border-info rounded-5 shadow">
                                <div className="m-5">
                                    <form onSubmit={handleSubmit} className="form-signin">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input
                                                className="form-control"
                                                type="email"
                                                name="email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            {errors.email && touched.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <div className=" position-relative">
                                                <input
                                                    className="form-control"
                                                    type={showPassword ? "text" : "password"}
                                                    name="password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                <div className="position-absolute top-0 end-0 p-2">
                                                    <button className="m-0 p-0">
                                                        <i onClick={handleShowPassword} className="fas fa-eye" ></i>
                                                    </button>
                                                </div>
                                            </div>
                                            {errors.password && touched.password && <div className="text-danger">{errors.password}</div>}
                                        </div>
                                        <button type="submit" className="btn btn-danger btn-block mt-2" disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        )}
                    </Formik>
                    <GoogleLogin
                        onSuccess={handleLoginSuccess}
                        onError={handleLoginError}
                    />
                </div>
            </div>
        </>
    )
}

export default Login;