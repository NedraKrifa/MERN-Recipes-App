import React from "react";

function Stars({ varRate, sizeOfStars, setVarRate }) {
  const getStyleStar = (id) => {
    return {
      paddingRight: "10px",
      marginTop: "10px",
      fontSize: "30px",
      color: id <= varRate ? "yellow" : "gray",
    };
  };
  const getArray = (n) => {
    return Array(n)
      .fill(0)
      .map((e, i) => n - i)
      .reverse();
  };
  return (
    <div>
      {getArray(sizeOfStars).map((el) => {
        return (
          <i
            style={getStyleStar(el)}
            className="fas fa-star"
            onClick={(e) => setVarRate(e.target.id)}
            id={el}
            key={el}
          />
        );
      })}
    </div>
  );
}
export default Stars;
