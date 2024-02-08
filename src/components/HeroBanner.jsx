import { useEffect } from "react";
import { client, urlFor } from "../../lib/client";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [bannerData, setBannerData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bannerQuery = '*[_type == "banner"]';
        const bannerData = await client.fetch(bannerQuery);
        setBannerData(bannerData);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {bannerData && (
        <div className="hero-banner-container">
          <div className="hero-content">
            <p className="beats-solo">UPLIFT YOUR STYLE</p>
            <h4>Exclusive High Fashion!</h4>
            <h1>Unique Products For Unique You</h1>
            <Link to="/inventory">
              <button type="button">Explore</button>
            </Link>
          </div>
          <div className="hero-image">
            <img
              src={urlFor(bannerData[0].image)}
              alt="handbag"
              className="hero-banner-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroBanner;
