import React, { useState } from "react";

function ReactButton() {
  const [thumbs, setThumbs] = useState(false);
  const [kiss, setKiss] = useState(false);
  const [grin, setGrin] = useState(false);
  const [heart, setHeart] = useState(false);

  return (
    <div style={{ fontSize: "20px" }}>
      <i
        style={{
          paddingLeft: "10px",
          marginTop: "20px",
          color: thumbs ? "DeepSkyBlue" : "",
        }}
        className={thumbs ? "fas fa-thumbs-up" : "far fa-thumbs-up"}
        onClick={() => setThumbs(!thumbs)}
      ></i>
      <i
        style={{
          paddingLeft: "10px",
          marginTop: "20px",
          color: heart ? "red" : "",
        }}
        className={heart ? "fas fa-heart" : "far fa-heart"}
        onClick={() => setHeart(!heart)}
      ></i>
      <i
        style={{
          paddingLeft: "10px",
          marginTop: "20px",
          color: kiss ? "hotPink" : "",
        }}
        className={kiss ? "fas fa-kiss-wink-heart" : "far fa-kiss-wink-heart"}
        onClick={() => setKiss(!kiss)}
      ></i>
      <i
        style={{
          paddingLeft: "10px",
          marginTop: "20px",
          color: grin ? "Gold" : "",
        }}
        className={grin ? "fas fa-grin-hearts" : "far fa-grin-hearts"}
        onClick={() => setGrin(!grin)}
      ></i>
    </div>
  );
}
export default ReactButton;
