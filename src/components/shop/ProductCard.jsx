import React, { useState } from 'react';

const ProductCard = ({ name, price, mainImg, detailImg }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="aspect-[3/4] w-full overflow-hidden bg-zinc-900">
        <img 
          src={isHovered ? detailImg : mainImg} 
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex justify-between px-1">
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-white">{name}</h3>
          <p className="mt-1 text-[10px] text-zinc-500 uppercase">Limited Release</p>
        </div>
        <span className="text-[10px] font-medium text-white">${price}</span>
      </div>
    </div>
  );
};

export default ProductCard;