import "./styles.css";
import CartWidget from "../cart-widget/CartWidget";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <a href="/" className="brand-logo">
        {props.brand}
      </a>
      <div className="navbar-right">
        <Dropdown
          className="nav-dropdown"
          options={props.categories}
          value={props.categories[0]}
          placeholder="Select an option"
        />
        <CartWidget />
      </div>
    </div>
  );
};

export default Navbar;
