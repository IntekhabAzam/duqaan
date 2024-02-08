import { Link } from "react-router-dom";
import { urlFor } from "../../lib/client";

const Product = ({
  product: { image, name, slug, category, actualPrice, sellingPrice },
}) => {
  return (
    <div className="product-card">
      <Link to={`/product/${slug.current}`}>
        <div>
          <img
            src={urlFor(image && image[0])}
            // width={250}
            // height={250}
            className="product-image"
          />
        </div>
        <div className="product-summary">
          <p>{category}</p>
          <h4>{name}</h4>
          <div className="product-price">
            <span>&#8377;{sellingPrice}</span>
            <span className="actual-price">{actualPrice}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
