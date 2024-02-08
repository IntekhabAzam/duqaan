import { useEffect, useState } from "react";
import { client } from "../../lib/client";
import HeroBanner from "./HeroBanner";
import Product from "./Product";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const [products, setProduct] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = '*[_type == "product"]';
        const products = await client.fetch(query);
        setProduct(products);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };
    fetchData();
  }, []);
  if (!products) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <HeroBanner />
      <div className="products-container">
        <div className="products-heading">
          <h2>Best Selling Products</h2>
          <p>Handbags of many variations</p>
        </div>
        <div className="product-items">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
