import { TfiShoppingCartFull } from "react-icons/tfi";
import "./CartWidget.css";

import { Link } from "react-router-dom";

const CartWidget = ({ numero }) => {
  return (
    <Link to="/cart">
      <div className="container-cart">
        <TfiShoppingCartFull
          style={{
            fontsize: "3rem",
            color: "#000000",
          }}
        />
        <div className="bubble-counter">
          <span>0</span>
        </div>
      </div>
    </Link>
  );
};

export default CartWidget;
