import React from "react";
import errorImage from '../../images/others/error.gif'
import Footer from "../Footer/Footer";

const NotFound = () => {
  return (
    <div>
      <div className = "card bg-dark text-white">
        <img  src={errorImage} className = "card-img img-fluid" alt="..." />
        <div className = "card-img-overlay">
          <h5 className = "card-title title-cart display-1">404</h5>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default NotFound;
