import React from "react";
import { useCart } from "../../context/CartContext";
import { Product } from "../../types/product";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { CartCounter } from "../Cart/CartCounter";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart, addToCart } = useCart();
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Link href={`/products/${product.id}`}>
          {" "}
          <Typography variant="h6" component="div">
            {" "}
            {product.name}{" "}
          </Typography>{" "}
        </Link>{" "}
        <Typography color="text.secondary">{product.brand}</Typography>{" "}
        <Typography variant="body2">${product.price.toFixed(2)}</Typography>{" "}
      </CardContent>{" "}
      <CardActions>
        {" "}
        {cartItem ? (
          <CartCounter productId={product.id} quantity={cartItem.quantity} />
        ) : (
          <Button onClick={() => addToCart(product)} variant="contained">
            {" "}
            Add to Cart{" "}
          </Button>
        )}{" "}
      </CardActions>{" "}
    </Card>
  );
};
