import React, { useState, useEffect } from "react";
import "../css/custom.css";
import Rating from "./Rating";

const Card = ({
  name,
  image,
  price,
  originalPrice,
  sale,
  addCartItems,
  removeCartItems,
  id,
  products,
}) => {

  const [array] = useState([0, 1, 2, 3, 4]);
  const [rating, setRating] = useState([false, false, false, false, false]);
  const [starsubmit, setStarSubmit] = useState(0);

  const [state, setState] = useState(true);

  function saveRating(val) {
    setStarSubmit(val);
  }

  function updateState() {
    setState((s) => !s);
  }

  useEffect(() => {
    if (products.includes(id)) {
      setState(false);
    } else {
      setState(true);
    }
  }, [id, products, state]);

  return (
    <div>
      <div className="col mb-5" id={id}>
        <div className="card h-100">
          {/* <!-- Sale badge--> */}
          {sale ? (
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
          ) : null}

          {/* <!-- Product image--> */}
          <img className="card-img-top" src={image} alt={name} />
          {/* <!-- Product details--> */}
          <div className="card-body p-4">
            <div className="text-center">
              {/* <!-- Product name--> */}
              <h5 className="fw-bolder">{name}</h5>
              {/* <!-- Product reviews--> */}
              <div className="d-flex justify-content-center small  mb-2">
                <span>
                  {array.map((star, index) => (
                    <Rating
                      key={index}
                      value={star}
                      rated={rating}
                      reviewArray={array}
                      setRating={setRating}
                      saveRating={saveRating}
                    />
                  ))}
                </span>
                {"       "}
                <div
                  className="badge bg-transparent text-dark position-absolute"
                  style={{ top: "0.5rem", left: "0.5rem" }}
                >
                  {starsubmit > 0 ? starsubmit : ""}⭐
                </div>
              </div>
              {originalPrice ? (
                <span className="text-muted text-decoration-line-through">
                  {originalPrice}
                </span>
              ) : null}{" "}
              {price}
            </div>
          </div>
          {/* <!-- Product actions--> */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a
                className="btn btn-outline-dark mt-auto"
                href="#!"
                onClick={() => {
                  state ? addCartItems(id) : removeCartItems(id);
                  updateState();
                }}
              >
                {state ? "Add to cart" : "Remove item"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;