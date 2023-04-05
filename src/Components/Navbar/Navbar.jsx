import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 10;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#000000", textDecoration: "none" }}>
          ZonaGames
        </Link>

        <ul className={styles.containerList}>
          <Link to="/" className={styles.navbarItem}>
            Tienda
          </Link>
          <Link to="/category/ps5" className={styles.navbarItem}>
            PS5
          </Link>
          <Link to="/category/xbox" className={styles.navbarItem}>
            Xbox
          </Link>
          <Link to="/category/nintendo" className={styles.navbarItem}>
            Nintendo
          </Link>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
