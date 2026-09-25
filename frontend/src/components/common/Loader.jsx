import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <ClipLoader color="black" />
      <p className="font-semibold mt-2 text-lg">Content Loading...</p>
    </div>
  );
};

export default Loader;
