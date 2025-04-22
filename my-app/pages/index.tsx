import React from "react";
import { GetStaticProps } from "next";
import { Product } from "../types/product";
import { ProductList } from "../components/Product/ProductList";
import { Layout } from "../components/Layout";

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
};
