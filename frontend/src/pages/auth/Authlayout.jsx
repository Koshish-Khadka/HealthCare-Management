import React from "react";

const Authlayout = ({ children }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
        {children}
      </div>
      <div className="hidden md:flex w-1/2 h-full relative">
        <Image
          src="frontend\src\assets\login-image.jpg"
          alt="Doctors"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/40 z-10 gap-2 flex flex-col items-center justify-center">
          <h1 className="text-3xl 2xl:text-5xl font-bold text-white">
            HealthCare System
          </h1>
          <p className="text-blue-400 text-base">You re welcome</p>
        </div>
      </div>
    </div>
  );
};

export default Authlayout;
