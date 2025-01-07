import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CartButtonWithPopup = () => {
  const cartItems = useSelector((state) => state.cart);

  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      {/* Cart Button */}
      <CartBtn onClick={handleCartClick}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="m397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z" />
          <path d="m222 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
          <path d="m368.42 450a57.48 57.48 0 1 1 57.48-57.48 57.54 57.54 0 0 1 -57.48 57.48zm0-84.95a27.48 27.48 0 1 0 27.48 27.47 27.5 27.5 0 0 0 -27.48-27.47z" />
          <path d="m158.08 165.49a15 15 0 0 1 -14.23-10.26l-25.71-77.23h-47.44a15 15 0 1 1 0-30h58.3a15 15 0 0 1 14.23 10.26l29.13 87.49a15 15 0 0 1 -14.23 19.74z" />
        </svg>
      </CartBtn>

      {/* Cart Panel */}
      <CartPanel show={showCart}>
        <CloseBtn onClick={handleCloseCart}>X</CloseBtn>
        <h3>Your Cart</h3>
        <CartItemsList>
          {cartItems.length === 0 ? (
            <li>Your cart is empty</li>
          ) : (
            cartItems.map((item, index) => (
              <CartItemTile key={index}>
                <div className="card-img">
                  <div className="img" style={{ backgroundColor: "#228b22" }} />
                </div>
                <div className="card-title">{item.productName}</div>
                <div className="card-footer">
                  <div className="card-price">₹ {item.price}</div>
                </div>
              </CartItemTile>
            ))
          )}
        </CartItemsList>
      </CartPanel>
    </div>
  );
};

// Styled Components
const CartBtn = styled.button`
  width: 60px;
  height: 60px;
  background-color: #323232;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2d8cf0;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

const CartPanel = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
  transform: translateX(${(props) => (props.show ? "0" : "100%")});
  transition: transform 0.3s ease;
  z-index: 999;
  overflow-y: auto; /* Scroll if content exceeds height */
`;

const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: #323232;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const CartItemsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const CartItemTile = styled.li`
  margin-bottom: 15px;
  width: 100%;
  background: #fff;
  border: 2px solid #323232;
  box-shadow: 4px 4px #323232;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  .card-img {
    display: flex;
    justify-content: center;
  }

  .card-img .img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #228b22;
  }

  .card-title {
    font-size: 16px;
    font-weight: 500;
    color: #323232;
    text-align: center;
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card-price {
    font-size: 18px;
    font-weight: 500;
    color: #323232;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default CartButtonWithPopup;
