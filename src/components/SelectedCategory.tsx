import React from "react";
import pizza from "../assets/images/pizza.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface SelectedCategoryProps {}

const SelectedCategory: React.FC<SelectedCategoryProps> = () => {
  const products = [
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 0,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description: "Spicy chicken, beef, onions, tomatoes, green chilies.",
      price: 25.0,
      isPopular: true,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 1,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description: "Spicy chicken, beef, onions, tomatoes, green chilies.",
      price: 25.0,
      isPopular: true,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 2,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description: "Spicy chicken, beef, onions, tomatoes, green chilies.",
      price: 25.0,
      isPopular: true,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 3,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description: "Spicy chicken, beef, onions, tomatoes, green chilies.",
      price: 25.0,
      isPopular: false,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 4,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description: "Spicy chicken, beef, onions, tomatoes, green chilies.",
      price: 25.0,
      isPopular: false,
    },
  ];

  return (
    <div className="selected-category">
      <div className="popular-products">
        <h2>Popular Pizza</h2>

        <div className="popular-products-container">
          {products
            ?.filter((product) => product?.isPopular === true)
            ?.map((product, key) => (
              <div className="element" key={key}>
                <div className="element-img">
                  <img src={product?.img} alt={product?.categoryName} />
                </div>
                <div className="element-information">
                  <h3>{product?.title}</h3>
                  <p>{product?.description}</p>
                </div>
                <div className="element-price">
                  <p className="price">{`$${parseFloat(
                    String(product?.price)
                  ).toFixed(2)}`}</p>
                  <p className="add-to-cart">Add to cart</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="all-products">
        <div className="header">
          <h2>All products</h2>
          <div className="sort-wrapper">
            <p>Sort by:</p>
            <div className="sort">
              <p>Price</p>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
        </div>
        {products?.map((product, key) => (
          <div className="product" key={key}>
            <div className="product-img">
              <img src={product?.img} alt={product?.categoryName} />
            </div>
            <div className="product-information">
              <h3 className="product-title">{product?.title}</h3>
              <div className="price-container">
                <p>{`$${parseFloat(String(product?.price)).toFixed(2)}`}</p>
                <p className="add-to-cart">Add to cart</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategory;
