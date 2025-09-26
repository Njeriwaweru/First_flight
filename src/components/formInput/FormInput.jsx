import { useState } from "react";
import "./FormInput.css";

const FormInput = ({
        label,
        name,
        placeholder,
        onChange,
        value,
        type = "text",
        required = false,
    }) => {

        const [showPassword, setShowPassword] = useState(false);
        const isPasswordType = type === "password";

    return (
        <div className="formInput">
            <div className="inputContainer">
                {label && <label htmlFor={name} className="formLabel">
                {label}
                {required && <span style={{ color: "red" }}>*</span>}
            </label>}
            <input
                name={name}
                value={value}
                type={isPasswordType && showPassword ? "text" : type}
                onChange={onChange}
                placeholder={placeholder}
                className="formField"
            />
            {isPasswordType && (
                <button
                    type="button"
                    className="togglePassword"
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? "🙈" : "👁️"}
                </button>
            )}
            </div>
        </div>
    )
}

export default FormInput;