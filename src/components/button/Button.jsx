import "./Button.css";

const Button = ({ label, onClick, mode }) => {

    const className = mode === "primary" ? "btn btn-primary" : "btn btn-secondary";

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