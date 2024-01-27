import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styles from "./ShoppingCart.module.css";
import Icon from "@mdi/react";
import {
  mdiMinusCircle,
  mdiPlusCircle,
  mdiAlphaXCircle,
  mdiCheckCircle,
} from "@mdi/js";

const ShoppingCart = () => {
  const [items, putInCart, cart, setCart] = useOutletContext();
  const [selected, setSelected] = useState("");

  const inputAmount = styles.inputAmount;

  const decreaseAmount = (index, id) => {
    const item = cart[index];
    if (item.amount === 1) {
      const filtered = cart.filter((item) => item.id !== id);
      setCart(filtered);
    } else {
      const filtered = cart.filter((item) => item.id !== id);
      item.amount--;
      filtered.splice(index, 0, item);
      setCart(filtered);
    }
  };

  const increaseAmount = (index, id) => {
    const item = cart[index];
    const filtered = cart.filter((item) => item.id !== id);
    console.log(filtered);
    item.amount++;
    filtered.splice(index, 0, item);
    setCart(filtered);
  };

  const changeAmount = (index, id) => {
    const item = cart[index];
    const filtered = cart.filter((item) => item.id !== id);
    const input = document.querySelector(`.${inputAmount}`);
    if (input.value > 0) {
      item.amount = Number(input.value);
      filtered.splice(index, 0, item);
    }
    if (input.value === "") {
      item.amount = input.placeholder;
      filtered.splice(index, 0, item);
    }
    setCart(filtered);
    setSelected("");
  };

  const deleteItem = (id) => {
    const filtered = cart.filter((item) => item.id !== id);
    setCart(filtered);
  };

  return (
    <>
      {cart.length === 0 ? (
        <p className={styles.emptyCartMessage}>Your Cart Is Empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.product}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <img src={item.image} alt={item.title + " image"} />
              </div>
              <button onClick={() => deleteItem(item.id)}>
                <Icon path={mdiAlphaXCircle} size={1.25} />
              </button>
              <div>
                {item.id !== selected ? (
                  <div className={styles.buttonVersion}>
                    <button onClick={() => decreaseAmount(index, item.id)}>
                      <Icon path={mdiMinusCircle} size={1.25} />
                    </button>
                    <p onClick={() => setSelected(item.id)}>{item.amount}</p>
                    <button onClick={() => increaseAmount(index, item.id)}>
                      <Icon path={mdiPlusCircle} size={1.25} />
                    </button>
                  </div>
                ) : (
                  <div className={styles.inputVersion}>
                    <input
                      className={inputAmount}
                      type="text"
                      inputMode="numeric"
                      placeholder={item.amount}
                    />
                    <button
                      className={styles.inputButton}
                      onClick={() => changeAmount(index, item.id)}
                    >
                      <Icon path={mdiCheckCircle} size={1.25} />
                    </button>
                  </div>
                )}
              </div>
              <p>${item.price * item.amount}</p>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShoppingCart;
