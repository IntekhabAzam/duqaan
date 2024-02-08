import { Link, NavLink } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import logo from "../assets/logo.png";

// import { Cart } from './';
// import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  //   const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className="navbar-container">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/inventory">Inventory</NavLink>
        </li>
      </ul>

      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">0</span>
      </button>

      {/* {showCart && <Cart />} */}
    </nav>

    // <div className="navbar-container">
    //   <p>
    //     <Link to="/">
    //         <img src={logo} className="logo" alt="logo" />
    //     </Link>
    //     <p>home</p>
    //   <p>contact</p>
    //   </p>

    //   <button type="button" className="cart-icon" >
    //     <AiOutlineShopping />
    //     <span className="cart-item-qty">5</span>
    //   </button>

    //   {/* {showCart && <Cart />} */}
    // </div>
  );
};

export default Navbar;
