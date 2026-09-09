import React from "react";

const Card = ({ item }) => {
  const Icon = item.icon;
  return (
    <div className="border border-stone-300 shadow-md px-3 py-4 rounded-md">
      <div className="flex justify-between items-center">
        <p className="text-lg text-stone-700 font-medium">{item.title}</p>
        <div className="border border-stone-300 shadow-2xl p-1.5 rounded-lg">
          <Icon size={20} strokeWidth={1.8} />
        </div>
      </div>

      <div className="text-center">
        <p className="text-xl font-bold">{item.number}</p>
        <p className="text-center text-[12px] font-light text-stone-600 pt-3">
          {item.subTitle}
        </p>
      </div>
    </div>
  );
};

export default Card;
