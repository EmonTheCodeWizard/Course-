import PropTypes from "prop-types";

const Button = ({ addToCart, course }) => {
  return (
    <div>
      <button
        onClick={() => addToCart(course)}
        className="relative w-full data-twe-ripple-init-blue rounded-lg overflow-hidden bg-blue-500 text-white px-5 py-2.5 group"
      >
        <span className="absolute active:cursor-zoom-in w-0 group-hover:w-full transition-all ease-out duration-300 h-full bg-blue-700 left-0 top-0"></span>
        <span className="relative">Purchace</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  addToCart: PropTypes.func,
  course: PropTypes.object,
};

export default Button;
