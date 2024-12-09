"use client";

import { useWixClient } from "@/hooks/useWixClient";
import Image from "next/image";
import { useEffect } from "react";

const CartModal = () => {
  const cartItems = true;
  const wixClient = useWixClient()
  useEffect(()=>{
    const getCart = async()=>{
      const response = await wixClient.currentCart.getCurrentCart();
      console.log(response)
    }
    getCart()
  },[wixClient])
  
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart Is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* ITEMS */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-un-client-apprecie-des-livres-titres-a-l-exterieur-d-une-librairie-francaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className=" object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">2000DA</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className=" text-gray-500">Gty 2</span>
                  <span className=" text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-un-client-apprecie-des-livres-titres-a-l-exterieur-d-une-librairie-francaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                width={72}
                height={96}
                className=" object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className=" font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">2000DA</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className=" text-gray-500">Gty 2</span>
                  <span className=" text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">SubTotal</span>
              <span className="">2500DA</span>
            </div>
            <p className=" text-gray-500 text-sm mt-2 mb-4">
            Lorem Ipsum is simply dummy text.
            </p>
            <div className="flex justify-between text-sm">
                <button className=" rounded-md py-3 px-4 ring-1 ring-gray-300">View cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
