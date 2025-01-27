import React from "react";

const Card = (props: {
  isBlack: unknown;
  handle: React.MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl m-2 ">
      <div
        className="card-body"
        style={{
          background: props.isBlack ? "white" : "black",
          color: props.isBlack ? "black" : "white",
        }}
      >
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes, whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button onClick={props.handle} className="btn btn-primary">
            Buy Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
