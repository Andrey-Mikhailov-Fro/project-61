import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { Product } from "../../types/product";
import { Layout } from "../../components/Layout";
import { Card, CardContent, Typography } from "@mui/material";

interface ProductPageProps {
  product: Product;
}

export default function ProductPage({ product }: ProductPageProps) {
  return (
    <Layout>
      <Card>
        <CardContent>
          <Typography variant="h4">{product.name}</Typography>
          <Typography color="text.secondary">{product.brand}</Typography>
          <Typography variant="h6">${product.price.toFixed(2)}</Typography>
          <Typography paragraph>{product.description}</Typography>
        </CardContent>
      </Card>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const products: Product[] = await res.json();

  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch("http://localhost:3000/data.json");
  const products: Product[] = await res.json();
  const product = products.find((p) => p.id.toString() === params?.id);

  return {
    props: {
      product,
    },
  };
};
