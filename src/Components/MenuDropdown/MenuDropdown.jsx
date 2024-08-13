import styles from "./MenuDropdown.module.scss";
import { TiArrowSortedDown } from "react-icons/ti";
import { UseContexto } from "../../Hooks/UseContextApi";
import { useContext } from "react";

const MenuDropdown = ({ colorWhite, backgroundColor }) => {
  const continentes = ["Asia", "Europe", "Africa", "Americas", "Oceania"];
  const { filterCountry, dropAtivo, setdropAtivo } = useContext(UseContexto);

  const toggleDropnw = (event) => {
    event.stopPropagation();
    setdropAtivo(!dropAtivo);
  };

  return (
    <>
      <div className={styles.dropdownContainer}>
        <button
          className={styles.menuDropdown}
          onClick={toggleDropnw}
          style={{ ...colorWhite, ...backgroundColor }}
        >
          Filter by Region
          <TiArrowSortedDown className={`${dropAtivo ? styles.rotate : ""}`} />
        </button>
        {dropAtivo && (
          <ul className={styles.lista} style={backgroundColor}>
            <span>Filter by Region</span>
            {continentes?.map((item) => (
              <li key={item} style={colorWhite} onClick={filterCountry}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MenuDropdown;
