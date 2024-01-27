import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const fetchingItems = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=9",
        );
        if (response.status >= 400) {
          throw new Error("Server Error");
        }
        const processedResponse = await response.json();
        setItems((i) => processedResponse);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchingItems();
  }, []);

  if (error) {
    //add .error class to <p></p>
    return <p>A network error was encountered</p>;
  }

  if (loading) {
    //add .loading class to <p></p>
    return <p>Loading Page...</p>;
  }

  const putInCart = (index) => {
    const item = {
      title: items[index].title,
      price: items[index].price,
      amount: 1,
      id: items[index].id,
      image: items[index].image,
    };
    setCart((c) => [...c, item]);
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Outlet context={[items, putInCart, cart, setCart]} />
    </>
  );
}

export default App;
