import styles from "../CardInfo/CardInfo.module.scss";
import { UseContexto } from "../../Hooks/UseContextApi";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useResquestAxiosGet } from "../../Hooks/UseQueryApi";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const CardInfo = () => {
  const { data, isLoading, error } = useResquestAxiosGet();
  const { name } = useParams();
  const country = data?.find((item) => item?.name === name);
  const { backgroundColor, colorWhite } = useContext(UseContexto);

  return (
    <>
      <section className={styles.info}>
        {isLoading && <Spinner />}
        {error && <p>Error: {error}</p>}
        <div style={{ maxWidth: "110px" }} className={styles.contLink}>
          <Link to="/" style={{ ...colorWhite, ...backgroundColor }}>
            <FaArrowLeft />
            Voltar
          </Link>
        </div>
        {country ? (
          <div className={styles.wrapper}>
            <div className={styles.ccImg}>
              <img src={country?.flag} alt="imagen" />
            </div>
            <div className={styles.conatinerInfo}>
              <div className={styles.wrapper1} style={{ ...colorWhite }}>
                <h1>{country?.name}</h1>
                <p>
                  Native Name: <span>{country?.nativeName}</span>
                </p>
                <p>
                  Population: <span>{country?.population}</span>
                </p>
                <p>
                  Region: <span>{country?.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country?.subregion}</span>
                </p>
              </div>
              <div className={styles.wrapper2} style={{ ...colorWhite }}>
                <p>
                  Top Level Domain: <span>{country?.alpha2Code}</span>
                </p>
                <p>
                  Currencies: <span>{country?.alpha3Code}</span>
                </p>
                {country?.languages?.map((item, index) => (
                  <p key={index}>
                    Languages: <span>{item?.name}</span>
                  </p>
                ))}
                <p>
                  Capital: <span>{country?.capital}</span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p>Country not found</p>
        )}
      </section>
    </>
  );
};

export default CardInfo;
