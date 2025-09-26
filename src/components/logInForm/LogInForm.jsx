import { useState } from "react";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";
import "./LogInForm.css";

const LogInForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}))

        // clear errors while typing
        setErrors(prev => ({...prev, [name]: ""}))
    }

    const handleSubmit = () => {
        let newErrors = {};

        if (!formData.username) {
            newErrors.username = "Username is required";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; // stop submission if there are errors
        }
        // proceed if no errors
        alert(`Logging in with\nUsername: ${formData.username}\nPassword: ${formData.password}`);
    }
    return (
        <div className="logInForm">
            <FormInput
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your username"
                required = {true}
            />
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

            <FormInput
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required = {true}
            />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

            <Button label="Log in" mode="login" onClick={handleSubmit} />
        </div>
    )
}

export default LogInForm;