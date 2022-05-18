import React, { useEffect, useState } from "react";
function Instruction() {
  const [imgUrl, setImgUrl] = useState("");
  const [instruction, setInstruction] = useState("");

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setImgUrl(queryParams.get("imgurl"));
    setInstruction(queryParams.get("instruction"));
    console.log(queryParams.get("instruction"));
  } ,[]);

  return (
    <div className="main">
      <div>
        <div className="pargraph">
          <p>{instruction}</p>
        </div>
        <div className="image">
          <img src={imgUrl} alt = '' />
        </div>
      </div>
    </div>
  );
}

export default Instruction;
