import { useEffect, useState } from "react";
import Card from "./Card";
import Carts from "./Carts";
import Swal from "sweetalert2";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [time, setTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const resetSelectedCourse = () => {
    setSelectedCourse([]);
    setTime(0);
    setTotalPrice(0);
    setRemainingTime(0);
  };

  const addToCart = (course) => {
    const isExist = selectedCourse.find((item) => item.id === course.id);
    if (isExist) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Can Select One Cart At a Time!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    } else {
      let price = course.price;
      let hrs = course.credit;
      let creditHrs = 20;
      selectedCourse.forEach((item) => {
        price = price + item.price;
        hrs = hrs + item.credit;
      });

      if (hrs > 20) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "You Can't Go Above 20hrs!",
          footer: '<a href="">Why do I have this issue?</a>',
        });
      }

      setRemainingTime(creditHrs - hrs);
      setTime(hrs);
      setTotalPrice(price);
      setSelectedCourse([...selectedCourse, course]);
    }
  };

  return (
    <section className="lg:flex container mx-auto mt-10">
      <div className="w-full justify-center lg:w-3/4">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            Courses
          </h1>
          <hr className="h-1 bg-[#2F80ED] border-1 w-28 mx-auto" />
        </div>

        <div className="container justify-items-center grid grid-cols-1 gap-x-px lg:gap-x-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card course={course} key={course.id} addToCart={addToCart} />
          ))}
        </div>
      </div>

      <div className="flex-1 mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-gray-700 text-center">
            Your Carts
          </h1>
          <hr className="h-1 bg-[#2F80ED] border-1 w-36 mx-auto" />
        </div>
        <div className="flex mt-6 justify-center bg-white ml-8 p-5 rounded-lg sticky top-4">
          <Carts
            time={time}
            totalPrice={totalPrice}
            selectedCourse={selectedCourse}
            remainingTime={remainingTime}
            resetSelectedCourse={resetSelectedCourse}
          />
        </div>
      </div>
    </section>
  );
};

export default Courses;
