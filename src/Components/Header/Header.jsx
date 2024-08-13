import styles from "../Header/Header.module.scss";
import { useEffect, useContext } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { UseContexto } from "../../Hooks/UseContextApi";

const Header = () => {
  const { bkColor, setColor, backgroundColor, colorWhite } =
    useContext(UseContexto);

  useEffect(() => {
    document.body.style.background = bkColor;

    return () => {
      document.body.style.background = "";
    };
  }, [bkColor]);

  return (
    <>
      <header className={styles.header} style={backgroundColor}>
        <div>
          <p style={colorWhite}>Onde no mundo?</p>
          <button
            onClick={() => setColor(!bkColor && "#202C37")}
            style={colorWhite}
          >
            <IoMoonOutline style={{ fontSize: "1.25rem" }} />
            Dark Mode
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
