import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { BiDollar } from "react-icons/bi";
import Swal from "sweetalert2";
const Carts = ({
  selectedCourse,
  time,
  totalPrice,
  remainingTime,
  resetSelectedCourse,
}) => {
  const [cartsNotEmpty, setCartsNotEmpty] = useState(false);

  useEffect(() => {
    if (selectedCourse.length > 0) {
      setCartsNotEmpty(true);
    }
  }, [selectedCourse]);

  const handlePurchase = () => {
    resetSelectedCourse();
    setCartsNotEmpty(false);
    if (cartsNotEmpty) {
      Swal.fire({
        title: "Good job!",
        text: "Thanks Happy Programming",
        icon: "success",
      });
    }
  };

  return (
    <div>
      <h2 className="font-bold text-center text-2xl mb-1">
        Remaining Hours <span className="text-blue-500">{remainingTime}</span>
      </h2>
      <hr className="h-1 bg-black border-1 mx-auto mb-5" />
      {
        <ul className="list-disc">
          {selectedCourse.map((course) => (
            <li className="font-medium" key={course.id}>
              {course.title}
            </li>
          ))}
          <p className="font-medium text-xl mt-2">Total Hours : {time}</p>
        </ul>
      }
      <hr className="h-1 bg-black border-1 mx-auto mt-5" />
      <p className="flex mt-5 text-xl font-medium items-center">
        Total Price : <span className="ml-5">{totalPrice}</span>{" "}
        <BiDollar size={20} />
      </p>

      <button
        className={`relative w-full data-twe-ripple-init-blue rounded-lg overflow-hidden mt-4 bg-blue-500 text-white px-5 py-2.5 group ${
          cartsNotEmpty ? "bg-blue-500" : "bg-gray-300"
        }`}
        onClick={handlePurchase}
        disabled={!cartsNotEmpty}
      >
        <span
          className={`absolute active:cursor-zoom-in w-0 group-hover:w-full transition-all ease-out duration-300 h-full ${
            cartsNotEmpty ? "bg-blue-700" : "bg-slate-300"
          } left-0 top-0`}
        ></span>
        <span className="relative">Purchase</span>
      </button>
    </div>
  );
};

Carts.propTypes = {
  selectedCourse: PropTypes.array,
  time: PropTypes.any,
  remainingTime: PropTypes.any,
  totalPrice: PropTypes.any,
  addToCart: PropTypes.func,
  resetSelectedCourse: PropTypes.func,
};

export default Carts;
