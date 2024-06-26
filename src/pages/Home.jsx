import { useState, useEffect } from "react";
import ProductsList from "../components/ProductsList";

function Home() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((products) => setProducts(products))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1 className="w-full text-center text-6xl font-bold mb-7 text-info-content">
        Pruducts List
      </h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {products && <ProductsList products={products} />}
      </div>
    </div>
  );
}

export default Home;
