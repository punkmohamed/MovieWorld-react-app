import { useState } from "react"

function Register() {
    const [form, setForm] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({});
    const handleFormData = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }))

        if (name === "name") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: value.length === 0 && "Name is required"
            }));
        }

        if (name === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: value.length === 0
                    ? "Email is required"
                    : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? ""
                        : "Invalid email format"
            }));
        }

        if (name === "username") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: value.length === 0
                    ? "Username is required"
                    : /\s/.test(value)
                        ? "Username cannot contain spaces"
                        : ""
            }));
        }

        if (name === "password") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: value.length === 0
                    ? "Password is required"
                    : /^[A-Za-z0-9]{6,}$/.test(value)
                        ? ""
                        : "invalid password"
            }));
        }

        if (name === "confirmPassword") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: value.length === 0
                    ? "Confirm password is required"
                    : value === form.password
                        ? ""
                        : "Passwords do not match"
            }))
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    return (
        <div className="container mt-5" style={{ width: '600px' }}>
            <h1 className="text-center">Register</h1>
            <div className="border border-2 border-info rounded-5 shadow p-5">
                <form className="m-5 needs-validation" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="font-weight-bold">Name</label>
                        <input
                            onChange={handleFormData}
                            type="text"
                            className={`form-control form-control-lg  ${errors.name ? " is-invalid" : "is-valid"}`}
                            placeholder="Enter your name"
                            name="name"
                            value={form.name}
                            required
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Email address</label>
                        <input
                            onChange={handleFormData}
                            type="email"
                            className={`form-control form-control-lg ${errors.email ? "is-invalid" : "is-valid"}`}
                            placeholder="Enter your email"
                            name="email"
                            value={form.email}
                            required
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Username</label>
                        <input
                            onChange={handleFormData}
                            type="text"
                            className={`form-control form-control-lg ${errors.username ? "is-invalid" : "is-valid"}`}
                            placeholder="Enter your username"
                            name="username"
                            value={form.username}
                            required
                        />
                        <div className="invalid-feedback">{errors.username}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Password</label>
                        <input
                            onChange={handleFormData}
                            type="password"
                            className={`form-control form-control-lg ${errors.password ? "is-invalid" : "is-valid"}`}
                            placeholder="Enter your password"
                            name="password"
                            value={form.password}
                            required
                        />
                        <div className="invalid-feedback">{errors.password}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">Confirm Password</label>
                        <input
                            onChange={handleFormData}
                            type="password"
                            className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : "is-valid"}`}
                            placeholder="Confirm your password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            required
                        />
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block btn-lg mt-2">Register</button>
                </form>
            </div>
        </div>
    )
}
export default Register