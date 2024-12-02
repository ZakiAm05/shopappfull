"use client";
import Image from "next/image";
import { useState } from "react";
/* const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/28898213/pexels-photo-28898213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/29216714/pexels-photo-29216714/free-photo-of-charmante-ruelle-d-essaouira-aux-volets-bleus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/29366969/pexels-photo-29366969/free-photo-of-surfeur.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/29402506/pexels-photo-29402506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
]; */
const ProductImages = ({items}:{items:any}) => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      {/* MAIN IMAGES */}
      <div className="h-[500px] relative">
        <Image
          src={items[index].image?.url}
          alt=""
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      {/* SMALL IMAGES */}
      <div className="flex justify-between gap-4 mt-8">
        {items.map((item:any, i:number) => (
          <div
            className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
            key={item._id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={item.image?.url}
              alt=""
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
