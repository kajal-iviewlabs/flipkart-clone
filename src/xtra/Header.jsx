import React, { useState } from "react";
import "./Header.css";
import CartIcon from "./CartIcon";
import SellerIcon from "./SellerDropDown";
import HelpDropdown from "./HelpDropDown";

const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="icon"
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
        />
      </div>
      <div>
        <form className="form-class">
          <button className="header__searchButton">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Search Icon</title>
              <path
                d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z"
                stroke="#717478"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M16 16L21 21"
                stroke="#717478"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <input placeholder="Search for Products, Brand and More"></input>
          </button>
        </form>
      </div>
      <div className="login_container">
        <div className="dropdown-container">
          <a
            className="_1TOQfO"
            title="Login"
            aria-haspopup="true"
            href="/account/login?ret=/"
          >
            <img
              style={{ marginRight: "0.8rem" }}
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
              alt="Login"
              className="loginicon"
              width="24"
              height="24"
            />
            <span className="loginText">Login</span>
          </a>
          <img
            className="arrowimg"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxNCAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF80OTc0Xzc1OTY5KSI+CjxwYXRoIGQ9Ik0zIDJMNyA2TDExIDIiIHN0cm9rZT0iIzExMTExMiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfNDk3NF83NTk2OSIgeD0iMC4yNSIgeT0iMC4yNSIgd2lkdGg9IjEzLjUiIGhlaWdodD0iOS44MTI1IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjEiLz4KPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMSIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xNiAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzQ5NzRfNzU5NjkiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3QxX2Ryb3BTaGFkb3dfNDk3NF83NTk2OSIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K"
            alt="Chevron"
            width="12"
            height="12"
          />
        </div>
        <div className="dropdown-content0">
          <ul style={{ width: "28rem" }}>
            <a
              href="/account/login?signup=true&amp;ret=/"
              title="Sign Up"
              className="_2Udqwk"
            >
              <span>New customer?</span>
              <span className="_1Mikcj">Sign Up</span>
            </a>
            <hr />
            <a
              href="/account/?rd=0&amp;link=home_account"
              className="yx2hEq"
              title="My Profile"
            >
              <li className="AT0fUR">
                <div className="_3pKU-e">
                  <img
                    className="SFnind"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                    alt="My Profile"
                    width="24"
                    height="24"
                  />
                  My Profile
                </div>
              </li>
            </a>
            <a href="/plus" className="yx2hEq" title="Flipkart Plus Zone">
              <li className="AT0fUR">
                <div className="_3pKU-e">
                  <img
                    className="SFnind"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkplus-4ff29a.svg"
                    alt="Flipkart Plus Zone"
                    width="24"
                    height="24"
                  />
                  Flipkart Plus Zone
                </div>
              </li>
            </a>
            <a
              href="/account/orders?link=home_orders"
              className="yx2hEq"
              title="Orders"
            >
              <li className="AT0fUR">
                <div className="_3pKU-e">
                  <img
                    className="SFnind"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
                    alt="Orders"
                    width="24"
                    height="24"
                  />
                  Orders
                </div>
              </li>
            </a>
            <a
              href="/wishlist?link=home_wishlist"
              className="yx2hEq"
              title="Wishlist"
            >
              <li className="AT0fUR">
                <div className="_3pKU-e">
                  <img
                    className="SFnind"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                    alt="Wishlist"
                    width="24"
                    height="24"
                  />
                  Wishlist
                </div>
              </li>
            </a>
            <a
              href="/account/rewards?link=home_rewards"
              className="yx2hEq"
              title="Rewards"
            >
              <li className="AT0fUR">
                <div className="_3pKU-e">
                  <img
                    className="SFnind"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/rewards-fbd212.svg"
                    alt="Rewards"
                    width="24"
                    height="24"
                  />
                  Rewards
                </div>
              </li>
            </a>
            <a
              href="/the-gift-card-store?link=home_giftcard"
              className="yx2hEq"
              title="Gift Cards"
            >
              <li className="AT0fUR">
                <div className="_3pKU-e">
                  <img
                    className="SFnind"
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/giftCard-bd87e1.svg"
                    alt="Gift Cards"
                    width="24"
                    height="24"
                  />
                  Gift Cards
                </div>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <CartIcon />
      <SellerIcon />
      <HelpDropdown />
    </div>
  );
};

export default Header;
