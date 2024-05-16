import PropTypes from "prop-types";

const Button = ({ className, children }) => {
  return <button className={className}>{children}</button>;
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

Button.defaultProps = {
  className:
    "px-6 lg:px-10 py-[10px] text-[20px] justify-center flex-col bg-liniear-greem outline-none hover:bg-liniear-greem2 hover:text-white rounded-full",
  children: "Button",
};

export default Button;
