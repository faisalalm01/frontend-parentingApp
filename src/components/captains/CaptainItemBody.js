import React from "react";

function CaptainItemBody({ name, title, describe }) {
  return (
    <div className="h-full text-center">
      <h2 className="text-gray-900 font-medium title-font tracking-wider text-lg">
        {" "}
        {name}{" "}
      </h2>
      <p className="text-gray-500"> {title} </p>
      <p className="leading-relaxed text-base"> {describe} </p>
    </div>
  );
}

export default CaptainItemBody;
