import React from "react";
import { useCart } from "../../context/CartContext";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface CartCounterProps {
  productId: number;
  quantity: number;
}

export const CartCounter: React.FC<CartCounterProps> = ({
  productId,
  quantity,
}) => {
  const { updateQuantity } = useCart();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      {" "}
      <IconButton onClick={() => updateQuantity(productId, quantity - 1)}>
        {" "}
        <RemoveIcon />{" "}
      </IconButton>{" "}
      <span>{quantity}</span>{" "}
      <IconButton onClick={() => updateQuantity(productId, quantity + 1)}>
        {" "}
        <AddIcon />{" "}
      </IconButton>{" "}
    </div>
  );
};
