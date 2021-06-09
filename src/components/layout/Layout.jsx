import React from "react";
import NavBar from "../navbar/NavBar";

let props = {
  brand: "Appedido !",
  categories: ["Articulos para el hogar", "Smartphones", "Linea blanca"],
};

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar {...props}/>
      <main>
          {children}
      </main>
    </div>
  );
};

export default Layout;