import React from "react";
import pizza from "../assets/images/pizza.png";

interface SelectedCategoryProps {}

const SelectedCategory: React.FC<SelectedCategoryProps> = () => {
  const products = [
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 0,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus deleniti ipsam, quam optio reiciendis. Odio vitae, nam, saepe quis exercitationem ullam, voluptates rem sed quisquam blanditiis rerum nostrum libero?",
      price: 25.0,
      isPopular: true,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 1,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus deleniti ipsam, quam optio reiciendis. Odio vitae, nam, saepe quis exercitationem ullam, voluptates rem sed quisquam blanditiis rerum nostrum libero?",
      price: 25.0,
      isPopular: true,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 2,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus deleniti ipsam, quam optio reiciendis. Odio vitae, nam, saepe quis exercitationem ullam, voluptates rem sed quisquam blanditiis rerum nostrum libero?",
      price: 25.0,
      isPopular: true,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 3,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus deleniti ipsam, quam optio reiciendis. Odio vitae, nam, saepe quis exercitationem ullam, voluptates rem sed quisquam blanditiis rerum nostrum libero?",
      price: 25.0,
      isPopular: false,
    },
    {
      categoryName: "Pizza",
      categoryPosition: 0,
      id: 4,
      img: pizza,
      title: "Red N Hot (Thin Crust)",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex doloribus deleniti ipsam, quam optio reiciendis. Odio vitae, nam, saepe quis exercitationem ullam, voluptates rem sed quisquam blanditiis rerum nostrum libero?",
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
            ?.map((product) => (
              <div className="element">
                <div className="element-img">
                  <img src={product?.img} alt={product?.categoryName} />
                </div>
                <div className="element-information">
                  <h3>{product?.title}</h3>
                  <p>{product?.description}</p>
                </div>
                <div className="element-price">
                  <p className="price">{`$${product?.price}`}</p>
                  <p className="add-to-cart">Add to cart</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="all-products">
        <div className="header">
          <h2>All</h2>
          <div className="sort">
            <p>Sort by</p>
          </div>
        </div>
        {products?.map((product) => (
          <div className="product">
            <div className="product-img">
              <img src={product?.img} alt={product?.categoryName} />
            </div>
            <div className="product-title">
              <p>{product?.title}</p>
            </div>
            <div className="product-price">
              <p>{`$${product?.price}`}</p>
            </div>
            <div className="add-to-cart">
              <p>Add to cart</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategory;
