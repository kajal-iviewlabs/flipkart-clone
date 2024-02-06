import React from "react";
import "./Dropdown.css";

const Dropdown = () => {
  return (
    <ul className="_3YjYK7 ecs1XG" style={{ width: "28rem" }}>
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
          </div>
          My Profile
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
          </div>
          Flipkart Plus Zone
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
          </div>
          Orders
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
          </div>
          Wishlist
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
          </div>
          Rewards
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
          </div>
          Gift Cards
        </li>
      </a>
    </ul>
  );
};

export default Dropdown;
