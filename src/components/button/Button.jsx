import "./Button.css";

const Button = ({ label, onClick, mode = "primary" }) => {

    const modeClasses = {
        primary: "btn btn-primary",
        secondary: "btn btn-secondary",
        login: "btn btn-login"
    }

    const className = modeClasses[mode] || "btn"

    return (
        <>
            <button
                className={className}
                onClick={onClick}
            >
                {label}
            </button>
        </>
    )
}

export default Button;