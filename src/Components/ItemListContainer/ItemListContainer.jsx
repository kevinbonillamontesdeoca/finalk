import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

import { PulseLoader } from "react-spinners/PulseLoader";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsColletion = collection(db, "products");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsColletion, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsColletion);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PulseLoader
          color={"#203EE5"}
          size={40}
          arial-label="Loading Spinner"
          data-testid="Loader"
        />
      </div>
    );
  }

  return (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
