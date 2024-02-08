import { useEffect, useState } from "react";
// import {
//   AiOutlineMinus,
//   AiOutlinePlus,
//   AiFillStar,
//   AiOutlineStar,
// } from "react-icons/ai";

import { client, urlFor } from "../../lib/client";
import { useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
// import { Product } from '../../components';
// import { useStateContext } from '../../context/StateContext';

const ProductDetails = () => {
  const [index, setIndex] = useState(0);
  const [productDetails, setProductDetails] = useState(null);
  const { productId } = useParams();

  //   const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  //   const handleBuyNow = () => {
  //     onAdd(product, qty);

  //     setShowCart(true);
  //   }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "product" && slug.current == '${productId}'][0]`;

        const product = await client.fetch(query);
        setProductDetails(product);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };
    fetchData();
  }, [productId]);

  if (!productDetails) {
    return <LoadingSpinner />;
  }
  const {
    image,
    name,
    description,
    actualPrice,
    sellingPrice,
    specifications,
  } = productDetails;
  console.log(productDetails);

  return (
    <>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h1>{name}</h1>
          <div className="price">
            <span>&#8377;{sellingPrice}</span>
            <span className="actual-price">{actualPrice}</span>
            <span className="discount">
              {Math.floor(100 - (sellingPrice / actualPrice) * 100)}% off
            </span>
          </div>
          {/* <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>
              (20)
            </p>
          </div> */}
          <div className="description">
            <h4>Description: </h4>
            <p>{description}</p>
          </div>
          <div className="specifications">
            <h4>Specifications: </h4>
            <ul>
              {specifications.map((feature, index) => (
                <li key={index}>{feature.bulletPoint}</li>
              ))}
            </ul>
          </div>

          {/* <p className="price">&#8377;{sellingPrice}</p> */}
          {/* <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div> */}
          <div className="buttons">
            {/* <button type="button" className="add-to-cart" >Add to Cart</button> */}
            <button type="button" className="book-order">
              Book Order
            </button>
          </div>
        </div>
      </div>

      {/* <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div> */}
    </>
  );
};

export default ProductDetails;
