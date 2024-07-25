import React, { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

function ProductList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/api/productList') //nó bị sai gì không chạy được
      .then(res => setList(res.data))
  }, []);
  

  return (
    <div>
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Hello everyone, welcome to Maxion Coffee.
        </h1>
        <h1 className="text-3xl">Have a good day!</h1>
      </div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {list.map((product) => (
          <div
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Product item={product} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default ProductList;