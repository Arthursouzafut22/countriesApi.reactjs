import styles from "../Cards/CardsWorld.module.scss";
import { UseContexto } from "../../Hooks/UseContextApi";
import { useContext } from "react";
import { Link } from "react-router-dom";

const CardsWorld = () => {
  const { backgroundColor, colorWhite, country, data, searchCountry } =
    useContext(UseContexto);

  const renderCardWord = (item) => (
    <Link
      to={`country/${encodeURIComponent(item?.name)}`}
      key={item.name}
      className={styles.cards}
      style={{ ...colorWhite, ...backgroundColor }}
    >
      <img src={item?.flag} alt={`${item?.name} flag`} />
      <div className={styles.wrapperCards}>
        <p>{item?.name}</p>
        <p>
          Population: <span>{item?.population?.toLocaleString()}</span>
        </p>
        <p>
          Region: <span>{item?.region}</span>
        </p>
        <p>
          Capital: <span>{item?.capital}</span>
        </p>
      </div>
    </Link>
  );

  const cardsToRender =
    searchCountry.length > 0
      ? searchCountry
      : country.length > 0
      ? country
      : data;

  return <>{cardsToRender && cardsToRender.map(renderCardWord)}</>;
};

export default CardsWorld;
