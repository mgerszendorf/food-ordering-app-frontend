import React, { useState } from "react";
import PizzaIcon from "../assets/images/Pizza.svg";
import BurgerIcon from "../assets/images/Burger.svg";
import BurritoIcon from "../assets/images/Burrito.svg";
import HotDogIcon from "../assets/images/HotDog.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface IFoodCategory {
  id: number;
  img: any;
  text: string;
}

function Home() {
  const [position, setPosition] = useState<number>(0);

  const foodCategories = [
    {
      id: 0,
      img: PizzaIcon,
      text: "Pizza",
    },
    {
      id: 1,
      img: BurgerIcon,
      text: "Burger",
    },
    {
      id: 2,
      img: BurritoIcon,
      text: "Burrito",
    },
    {
      id: 3,
      img: HotDogIcon,
      text: "Hot Dog",
    },
  ];

  const onLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const onRight = () => {
    if (position < foodCategories?.length - 1) {
      setPosition(position + 1);
    }
  };

  return (
    <section className="home">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here"
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Search here")}
        />
      </div>
      <div className="category-selection">
        <div className="left-arrow" onClick={onLeft}>
          <MdKeyboardArrowLeft />
        </div>
        {foodCategories?.map((category: IFoodCategory, key) => (
          <div
            className="category"
            style={position === key ? { display: "flex" } : undefined}
          >
            <img src={category?.img} alt={category?.text} />
            <p
              style={
                position === key
                  ? { borderBottom: "2px solid #3458e4", color: "#3458e4" }
                  : undefined
              }
            >
              {category?.text}
            </p>
          </div>
        ))}
        <div className="right-arrow" onClick={onRight}>
          <MdKeyboardArrowRight />
        </div>
      </div>
    </section>
  );
}

export default Home;
