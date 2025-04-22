import React from "react";
import { useCart } from "../../context/CartContext";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const CartSummary: React.FC = () => {
  const { cart, getTotal } = useCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
      {" "}
      <Badge badgeContent={itemCount} color="primary">
        {" "}
        <ShoppingCartIcon />{" "}
      </Badge>{" "}
      <span>Total: ${getTotal().toFixed(2)}</span>{" "}
    </div>
  );
};
