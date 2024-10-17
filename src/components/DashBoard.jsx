import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const DashBoard = () => {
  return (
    <React.Fragment>
      <Header />
      <Home/>
      <Footer />
    </React.Fragment>
  );
};

export default DashBoard;
