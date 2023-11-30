// import { BrowserRouter, Route, Router } from "react-router-dom";
import React from "react";

import { Link } from "react-router-dom";

// Link,BrowserRouter,Router,Route

function Output() {
  return (
    <>
      <div>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </div>
    </>
  );
}
export { Output };
