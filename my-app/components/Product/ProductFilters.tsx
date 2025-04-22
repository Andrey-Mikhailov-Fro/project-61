import React from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Switch,
  FormControlLabel,
  Drawer,
} from "@mui/material";

interface ProductFiltersProps {
  sortBy: "name" | "price";
  setSortBy: (value: "name" | "price") => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (value: "asc" | "desc") => void;
  priceRange: [number, number];
  setPriceRange: (value: [number, number]) => void;
  showNewOnly: boolean;
  setShowNewOnly: (value: boolean) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  sortBy,
  setSortBy,
  sortOrder,
  setSortOrder,
  priceRange,
  setPriceRange,
  showNewOnly,
  setShowNewOnly,
}) => {
  return (
    <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0 }}>
      <Box sx={{ width: 240, padding: 2 }}>
        <FormControl fullWidth margin="normal">
          <InputLabel
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              padding: "0 8px",
              borderRadius: "4px",
            }}
          >
            Sort By
          </InputLabel>
          <Select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as "name" | "price")}
          >
            <MenuItem value="name">Name</MenuItem>{" "}
            <MenuItem value="price">Price</MenuItem>{" "}
          </Select>{" "}
        </FormControl>{" "}
        <FormControl fullWidth margin="normal">
          {" "}
          <InputLabel
            sx={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              padding: "0 8px",
              borderRadius: "4px",
            }}
          >
            Order
          </InputLabel>{" "}
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
          >
            {" "}
            <MenuItem value="asc">Ascending</MenuItem>{" "}
            <MenuItem value="desc">Descending</MenuItem>{" "}
          </Select>{" "}
        </FormControl>
        <TextField
          label="Min Price"
          type="number"
          value={priceRange[0] === 0 ? "" : priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value) || 0, priceRange[1]])
          }
          margin="normal"
          fullWidth
        />
        <TextField
          label="Max Price"
          type="number"
          value={priceRange[1] === Infinity ? "" : priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value) || Infinity])
          }
          margin="normal"
          fullWidth
        />
        <FormControlLabel
          control={
            <Switch
              checked={showNewOnly}
              onChange={(e) => setShowNewOnly(e.target.checked)}
            />
          }
          label="Show New Only"
        />
      </Box>
    </Drawer>
  );
};
