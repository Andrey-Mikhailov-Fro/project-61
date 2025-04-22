import React from "react";
import { AppProps } from "next/app";
import { CartProvider } from "../context/CartContext";
import "../styles/globals.scss";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
