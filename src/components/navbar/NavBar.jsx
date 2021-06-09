import "./styles.css";
import CartWidget from "../cart-widget/CartWidget";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Navbar = ({brand, categories}) => {
  return (
    <header className="navbar">
      <a href="/" className="brand-logo">
        {brand}
      </a>
      <div className="navbar-right">
        <Dropdown
          className="nav-dropdown"
          options={categories}
          value={categories[0]}
          placeholder="Select an option"
        />
        <CartWidget />
      </div>
    </header>
  );
};

export default Navbar;
