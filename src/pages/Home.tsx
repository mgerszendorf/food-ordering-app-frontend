import React, { useEffect, useRef, useState } from "react";
import PizzaIcon from "../assets/images/Pizza.svg";
import BurgerIcon from "../assets/images/Burger.svg";
import BurritoIcon from "../assets/images/Burrito.svg";
import HotDogIcon from "../assets/images/HotDog.svg";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import SelectedCategory from "../components/Home/SelectedCategory";
import { motion } from "framer-motion";
import Reviews from "../components/Home/Reviews";

interface IFoodCategory {
  id: number;
  img: any;
  text: string;
}

function Home() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [width, setWidth] = useState(0);
  const carousel = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

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
      <main>
        <div className="categories">
          <motion.div ref={carousel} className="carousel">
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              whileTap={{ cursor: "grabbing" }}
              className="inner-carousel"
            >
              {foodCategories?.map((category: IFoodCategory, key) => (
                <motion.div
                  className="item"
                  key={key}
                  onClick={() => setActiveCategory(key)}
                >
                  <img src={category?.img} alt={category?.text} />
                  <p
                    style={
                      activeCategory === key
                        ? {
                            borderBottom: "2px solid #3458e4",
                            color: "#3458e4",
                          }
                        : undefined
                    }
                  >
                    {category?.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <SelectedCategory />
        </div>
        <Reviews />
      </main>
    </section>
  );
}

export default Home;
