import React, { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { ADD } from "../../../controller/action";

export const ProductItem = ({ data }) => {
  const [openImage, setOpenImage] = useState(false);
  const [img, setImg] = useState("");

  const onOpenImage = (src) => {
    setImg(src);
    setOpenImage(true);
  };
  const dispatch = useDispatch(); 
  const addToCart = (e) =>{
    dispatch(ADD(e));
  }
  return (
    <>
      <div className="product_items">
        {data.map((items) => (
          <div className="box" key={items.id}>
            <div className="img">
              <img src={items.cover} alt="" />
              <div className="overlay">
                <button className="button" onClick={() => addToCart(items)}>
                  <FiShoppingBag />
                </button>
                <button className="button">
                  <AiOutlineHeart />
                </button>
                <button
                  className="button"
                  onClick={() => onOpenImage(items.cover)}
                >
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className="details">
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>Price : $ {items.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className={openImage ? "modelOpen" : "modelClose"}>
        <div className="onClickImage">
          <img src={img} alt="" />
          <button className="button" onClick={() => setOpenImage(false)}>
            <AiOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};