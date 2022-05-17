import React, { useEffect, useState } from "react";

const Rating = ({ rated, reviewArray, setRating, saveRating, value }) => {
  const [isHoverOff, setHoverOff] = useState(false);

  useEffect(() => {
    if (isHoverOff) {
      setRating([false, false, false, false, false]);
    }
  }, [isHoverOff, setRating]);

  function updatehover() {
    setHoverOff(true);
    console.log("HoverstateUpdated", rated);
  }
  function star(id) {
    console.log(id);
    let arr = new Array(5);
    reviewArray.forEach((element) => {
      if (element <= id) {
        arr[element] = true;
      } else {
        arr[element] = false;
      }
    });
    setRating(arr);
    console.log(rated, "rated");
    // document.getElementById("star-rate").classList.add("text-warning");
  }

  return (
    <span
      id="star-rate"
      className={rated[value] === true ? "text-warning" : ""}
    >
      <i
        className="bi bi-star-fill rating"
        onMouseOver={() => star(value)}
        onMouseOut={updatehover}
        onClick={() => saveRating(value + 1)}
      ></i>
    </span>
  );
};

export default Rating;