import styles from "./roadmap.module.css";

const Roadmap = () => {
  return (
    <>
      <div className={styles.roadmap}>
        <h3>Roadmap</h3>
        <ul className={styles.timeline}>
          <li>
            <h4>Feb 4</h4>
            <div>Pre-sale</div>
          </li>
          <li>
            <h4>Feb 8</h4>
            <div>Minting</div>
          </li>
          <li>
            <h4>After Minting</h4>
            <div>Marketplace</div>
          </li>
          <li>
            <h4>Future</h4>
            <div>VR mode</div>
          </li>
          <li>
            <h4>Possibility</h4>
            <div>AR mode</div>
          </li>
          <li>
            <h4>Beyond</h4>
            <div>&#8734;</div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Roadmap;
