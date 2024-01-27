import { useState } from "react";
import styles from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

const Home = () => {
  const [items, putInCart] = useOutletContext();
  const [selected, setSelected] = useState("");

  const handleSelected = (index) =>
    index !== selected ? setSelected(index) : setSelected("");

  return (
    <ul className={styles.itemCards}>
      {items.map((item, index) => (
        <li key={item.id} className={styles.itemCard}>
          <div>
            <p>{item.title}</p>
            {index !== selected ? (
              <>
                <img src={item.image} alt={item.title + " image"} />
                <div>
                  <button onClick={() => handleSelected(index)}>
                    Show Info
                  </button>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => putInCart(index)}>Add To Cart</button>
                </div>
              </>
            ) : (
              <>
                <p>{item.description}</p>
                <p className={styles.rating}>
                  {item.rating.rate}
                  <Icon path={mdiStar} size={1} />
                  out of 5
                </p>
                <div>
                  <button onClick={() => handleSelected(index)}>
                    Hide Info
                  </button>
                  <p>${item.price.toFixed(2)}</p>
                  <button onClick={() => putInCart(index)}>Add To Cart</button>
                </div>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;
