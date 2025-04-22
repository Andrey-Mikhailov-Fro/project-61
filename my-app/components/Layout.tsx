import React from "react";
import { ReactNode } from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { CartSummary } from "./Cart/CartSummary";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            E-Shop
          </Typography>
          <CartSummary />
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </>
  );
};
