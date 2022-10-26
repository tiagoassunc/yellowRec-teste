import React from "react";

import "../../styles/base/base.scss";
import "./App.styles.scss";

import { Header } from "../Header/Header";
import { Explore } from "../Explore/Explore";
import { Footer } from "../Footer/Footer";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
