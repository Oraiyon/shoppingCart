import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Icon from "@mdi/react";
import { mdiHomeCircle, mdiCart } from "@mdi/js";

const Navbar = (props) => {
  const changeCurrentPage = () => {
    props.currentPage === "home"
      ? props.setCurrentPage("cart")
      : props.setCurrentPage("home");
  };

  return (
    <nav>
      {props.currentPage === "home" ? (
        <>
          <h1 className={styles.pageName}>Home</h1>
          <p className={styles.cartAmount}>
            {props.cart.reduce((acc, item) => acc + item.amount, 0)}
          </p>
          <button onClick={changeCurrentPage}>
            <NavLink to={"/cart"} className={styles.link}>
              <Icon path={mdiCart} size={1} />
            </NavLink>
          </button>
        </>
      ) : (
        <>
          <h1 className={styles.pageName}>Cart</h1>
          <button onClick={changeCurrentPage}>
            <NavLink to={"/home"} className={styles.link}>
              <Icon path={mdiHomeCircle} size={1} />
            </NavLink>
          </button>
        </>
      )}
    </nav>
  );
};

export default Navbar;
