const Button = ({ children, onClick, className }) => {
    return (
        <button
            onClick={onClick}
            className={`bg-pink-500 text-white text-lg px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
