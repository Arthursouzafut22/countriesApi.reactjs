import styles from "./Nav.module.scss";
import { FaSearch } from "react-icons/fa";
import MenuDropdown from "../MenuDropdown/MenuDropdown";
import { UseContexto } from "../../Hooks/UseContextApi";
import { useContext } from "react";

const Nav = () => {
  const { backgroundColor, colorWhite, changeCountry, setdropAtivo } =
    useContext(UseContexto);

  return (
    <>
      <nav className={styles.nav} onClick={() => setdropAtivo(false) }>
        <div className={styles.wrapper}>
          <div className={styles.searchContainer}>
            <FaSearch className={styles.serachIcon} style={colorWhite} />
            <input
              className={styles.input}
              type="text"
              placeholder="Search..."
              style={backgroundColor}
              onKeyUp={changeCountry}
            />
          </div>
          <MenuDropdown
            colorWhite={colorWhite}
            backgroundColor={backgroundColor}
          />
        </div>
      </nav>
    </>
  );
};

export default Nav;
