import styles from "./ui.module.scss";

const Loading = () => {
  return (
    <div className={styles.loader_bg}>
      <div className={styles.loader_container}>
        <div className={styles.loader_spinner}></div>
        <p className={styles.loader_text}>Please wait...</p>
      </div>
    </div>
  );
};

export default Loading;
