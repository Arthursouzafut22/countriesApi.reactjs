import styles from "../Main/Main.module.scss";
import Spinner from "../Spinner/Spinner";
import CardsWorld from "../Cards/CardsWorld";
import { UseContexto } from "../../Hooks/UseContextApi";
import { useContext } from "react";
import Nav from "../Nav/Nav";

const Main = () => {
  const { isLoading, error } = useContext(UseContexto);
  return (
    <>
      <Nav />
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      <main className={styles.main}>
        <CardsWorld />
      </main>
    </>
  );
};

export default Main;
