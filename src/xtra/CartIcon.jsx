import React from "react";
import "./CartIcon.css";

const CartIcon = () => {
  return (
    <div>
      <div className="cart_container">
        <a
          href="/viewcart?exploreMode=true&amp;preference=FLIPKART"
          title="Cart"
          className="_3RX0a-"
        >
          <img
            src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
            alt="Cart"
            className="_1XmrCc"
            width="24"
            height="24"
          />
        </a>
        <span className="cartSpan">Cart</span>
        <a
          className="_1krdK5"
          href="/viewcart?exploreMode=true&amp;preference=FLIPKART"
          title="Cart"
        />
      </div>
    </div>
  );
};

export default CartIcon;
