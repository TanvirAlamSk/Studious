import React from "react";

const TitleSubtitle = ({title,subtitle}) => {
  return (
    <div>
      <h2 className="max-w-140 mx-auto text-3xl text-center font-semibold text-gray-800">
        {title}
      </h2>
      <p className="max-w-130 mx-auto text-gray-600 text-center my-2">
        {subtitle}
      </p>
    </div>
  );
};

export default TitleSubtitle;
