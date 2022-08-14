import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import user from "../../assets/images/user.png";

function Reviews() {
  const customersOpinion = [
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
    {
      userImage: user,
      name: "Marek Gerszendorf",
      rate: 5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi minima inventore amet quaerat expedita ipsam esse accusamus ad, quos, libero earum eligendi blanditiis voluptates consequatur odio aliquid obcaecati fugit soluta.",
    },
  ];

  return (
    <div className="reviews-wrapper">
      <div className="reviews">
        <div className="reviews-header">
          <h2>Reviews</h2>
          <div className="overall-rating">
            <p>Overall Rating</p>
            <div className="rate">
              <p>4.5</p>
              <AiFillStar />
            </div>
          </div>
        </div>
        {customersOpinion?.map((opinion, key) => (
          <div className="opinion" key={key}>
            <div className="user-information">
              <img src={opinion?.userImage} alt="" />
              <div className="name-and-stars">
                <p>{opinion?.name}</p>
                <div className="stars">
                  {[...Array(opinion?.rate)].map((star, key) => (
                    <AiFillStar key={key} />
                  ))}
                  {[...Array(5 - opinion?.rate)].map((star, key) => (
                    <AiOutlineStar key={key} />
                  ))}
                </div>
              </div>
            </div>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                minima inventore amet quaerat expedita ipsam esse accusamus ad,
                quos, libero earum eligendi blanditiis voluptates consequatur
                odio aliquid obcaecati fugit soluta.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
