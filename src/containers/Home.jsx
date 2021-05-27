import React from "react";
import { Helmet } from "react-helmet";

import Products from "../components/Products";
import initialState from "../initialState";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Merch Products</title>
        <meta name="description" content="Productos del Merch 2021" />
      </Helmet>
      <Products products={initialState.products} />
    </>
  );
};

export default Home;
