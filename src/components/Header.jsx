import { Link } from "react-router-dom";
import { IoCartSharp } from "react-icons/io5";
import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const context = useContext(BasketContext);

  const totalAmount = context.basket.reduce((total, i) => total + i.amount, 0);
  return (
    <header className="d-flex justify-content-between align-items-center p-4 text-light bg-dark sticky-top">
      <Link to={"/"}>
        <h2>Context Store</h2>
      </Link>

      <Link className="fs-4 text-light" to={"/sepet"}>
        <IoCartSharp />
        <span className="mx-2 fs-6 badge bg-danger">{totalAmount}</span>
      </Link>
    </header>
  );
};

export default Header;
