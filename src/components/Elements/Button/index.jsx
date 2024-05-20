import PropTypes from "prop-types";

const Button = ({ className, type, children }) => {
  return (
    <button
      className={`${className} py-2 px-10 rounded-xl bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-300`}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
