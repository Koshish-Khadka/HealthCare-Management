import React from "react";

const Card = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="border border-stone-300 shadow-md px-3 py-4 rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium">{item.title}</p>
        <span className="border border-stone-300 shadow-2xl px-2  rounded-3xl text-[10px]">
          See Detail
        </span>
      </div>
      <div className="flex justify-center gap-4 pt-3 items-center">
        <Icon size={35} strokeWidth={1.8} />
        <p className="text-xl font-bold">{item.number}</p>
      </div>
      <p className="text-center text-[12px] font-light text-stone-600 pt-3">{item.subTitle}</p>
    </div>
  );
};

export default Card;
