import { useState } from "react";
import { useSelector } from "react-redux";

function Register() {
    const [form, setForm] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    // Get translations from Redux store
    const translate = useSelector(state => state.languageSlice.translation);

    const handleFormData = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));

        if (name === "name") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                name: value.length === 0 && translate.NameRequired
            }));
        }

        if (name === "email") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                email: value.length === 0
                    ? translate.EmailRequired
                    : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                        ? ""
                        : translate.InvalidEmailFormat
            }));
        }

        if (name === "username") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                username: value.length === 0
                    ? translate.UsernameRequired
                    : /\s/.test(value)
                        ? translate.UsernameCannotContainSpaces
                        : ""
            }));
        }

        if (name === "password") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                password: value.length === 0
                    ? translate.PasswordRequired
                    : /^[A-Za-z0-9]{6,}$/.test(value)
                        ? ""
                        : translate.InvalidPassword
            }));
        }

        if (name === "confirmPassword") {
            setErrors((prevErrors) => ({
                ...prevErrors,
                confirmPassword: value.length === 0
                    ? translate.ConfirmPasswordRequired
                    : value === form.password
                        ? ""
                        : translate.PasswordsDoNotMatch
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="container mt-5" style={{ width: '600px' }}>
            <h1 className="text-center">{translate.Register}</h1>
            <div className="border border-2 border-info rounded-5 shadow p-5">
                <form className="m-5 needs-validation" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="font-weight-bold">{translate.Name}</label>
                        <input
                            onChange={handleFormData}
                            type="text"
                            className={`form-control form-control-lg ${errors.name ? "is-invalid" : "is-valid"}`}
                            placeholder={translate.EnterYourName}
                            name="name"
                            value={form.name}
                            required
                        />
                        <div className="invalid-feedback">{errors.name}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">{translate.EmailAddress}</label>
                        <input
                            onChange={handleFormData}
                            type="email"
                            className={`form-control form-control-lg ${errors.email ? "is-invalid" : "is-valid"}`}
                            placeholder={translate.EnterYourEmail}
                            name="email"
                            value={form.email}
                            required
                        />
                        <div className="invalid-feedback">{errors.email}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">{translate.Username}</label>
                        <input
                            onChange={handleFormData}
                            type="text"
                            className={`form-control form-control-lg ${errors.username ? "is-invalid" : "is-valid"}`}
                            placeholder={translate.EnterYourUsername}
                            name="username"
                            value={form.username}
                            required
                        />
                        <div className="invalid-feedback">{errors.username}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">{translate.Password}</label>
                        <input
                            onChange={handleFormData}
                            type="password"
                            className={`form-control form-control-lg ${errors.password ? "is-invalid" : "is-valid"}`}
                            placeholder={translate.EnterYourPassword}
                            name="password"
                            value={form.password}
                            required
                        />
                        <div className="invalid-feedback">{errors.password}</div>
                    </div>
                    <div className="form-group">
                        <label className="font-weight-bold">{translate.ConfirmPassword}</label>
                        <input
                            onChange={handleFormData}
                            type="password"
                            className={`form-control form-control-lg ${errors.confirmPassword ? "is-invalid" : "is-valid"}`}
                            placeholder={translate.ConfirmYourPassword}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            required
                        />
                        <div className="invalid-feedback">{errors.confirmPassword}</div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-block btn-lg mt-2">{translate.Register}</button>
                </form>
            </div>
        </div>
    )
}

export default Register;
