import styles from "../Spinner/Spinner.module.scss";

const Spinner = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.loader}></div>
      </div>
    </>
  );
};

export default Spinner;
