import React, { useRef } from "react";
import CardWrapper from "../common/Card";

const UseRefSolution = () => {
  const inputRef = useRef();
  const refElementStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    width: "50px",
    height: "50px",
    backgroundColor: "#000000",
    color: "#ffffff"
  };

  const handleClick = () => {
    inputRef.current.style.width = "150px";
    inputRef.current.style.height = "80px";
    inputRef.current.textContent = "text";
  };
  return (
      <CardWrapper>
        <div ref={inputRef} className="my-2" style={refElementStyles}/>
        <button className="btn btn-primary" onClick={handleClick}>
          Изменить
        </button>
      </CardWrapper>
  );
};

export default UseRefSolution;
