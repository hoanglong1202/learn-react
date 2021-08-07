import React from "react";
import { useSelector } from "react-redux";
import { cartItemTotalSelector } from "./selectors";
import { formatPrice } from "utils";

function CartFeature(props) {
  const cartTotalMoney = useSelector(cartItemTotalSelector);
  return <div>This is Cart {formatPrice(cartTotalMoney)}</div>;
}

export default CartFeature;
