import Button from "./Button";
import PropTypes from "prop-types";
import { BiDollar } from "react-icons/bi";
import { BiBookOpen } from "react-icons/bi";
const Card = ({ course, addToCart }) => {
  const { img, title, para, price, credit } = course;

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white  rounded-xl md:w-auto w-80">
      <div className="relative mx-4 mt-4  rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
        <img
          className="rounded-lg md:h-[190px] w-full"
          src={img}
          alt="card-image"
        />
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-inter text-xl antialiased font-semibold text-blue-gray-900">
          {title}
        </h5>
        <p className="block text-base antialiased font-light leading-relaxed text-inherit">
          {para}
        </p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <BiDollar className="mr-4" size={20} />
            <p className="text-xl">Price: {price}</p>
          </div>
          <div className="flex items-center">
            <BiBookOpen className="mr-4" size={20} />
            <p className="text-xl">
              Credit: <span className="px-2">{credit}</span>Hrs
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 pt-0">
        <Button course={course} addToCart={addToCart} />
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object,
  addToCart: PropTypes.func,
  totalPrice: PropTypes.func,
};

export default Card;
