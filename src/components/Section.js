import React from "react";
import Card from "./Card";

import data from "../data.json";
const Section = ({ addCartItems, removeCartItems, products }) => {
  return (
    <>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {/* cards here */}
            {data.map((product, index) => {
              return (
                <Card
                  key={index}
                  id={index}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  sale={product.sale}
                  addCartItems={addCartItems}
                  removeCartItems={removeCartItems}
                  products={products}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;