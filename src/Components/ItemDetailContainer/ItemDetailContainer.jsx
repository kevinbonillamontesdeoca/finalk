import React, { useContex, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { agregarCarrito, getQuantityById } = useContex(CartContext);
  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarCarrito(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto corractamente agregado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};

export default ItemDetailContainer;
