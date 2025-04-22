import React from "react";
import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { Grid, Box } from "@mui/material";
import styles from "../../styles/ProductList.module.scss";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortBy, setSortBy] = useState<"name" | "price">("name");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);
  const [showNewOnly, setShowNewOnly] = useState(false);

  useEffect(() => {
    let result = [...products];

    // Apply filters
    if (showNewOnly) {
      result = result.filter((p) => p.isNew);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Apply sorting
    result.sort((a, b) => {
      const multiplier = sortOrder === "asc" ? 1 : -1;
      if (sortBy === "name") {
        return multiplier * a.name.localeCompare(b.name);
      }
      return multiplier * (a.price - b.price);
    });

    setFilteredProducts(result);
  }, [products, sortBy, sortOrder, priceRange, showNewOnly]);

  return (
    <Box sx={{paddingTop: "2%"}} className={styles.productList}>
      <ProductFilters
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        showNewOnly={showNewOnly}
        setShowNewOnly={setShowNewOnly}
      />
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
