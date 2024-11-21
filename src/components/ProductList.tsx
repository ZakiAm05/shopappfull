import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y16 justify-between flex flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-un-client-apprecie-des-livres-titres-a-l-exterieur-d-une-librairie-francaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20109560/pexels-photo-20109560/free-photo-of-assiette-repas-table-petit-dejeuner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">3000DA</span>
        </div>
        <div className="text-sm text-gray-500">Desc</div>
        <button className="rounded-2xl ring-1 ring-shop text-shop w-max py-2 px-4 text-xs hover:bg-shop hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-un-client-apprecie-des-livres-titres-a-l-exterieur-d-une-librairie-francaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20109560/pexels-photo-20109560/free-photo-of-assiette-repas-table-petit-dejeuner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">3000DA</span>
        </div>
        <div className="text-sm text-gray-500">Desc</div>
        <button className="rounded-2xl ring-1 ring-shop text-shop w-max py-2 px-4 text-xs hover:bg-shop hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-un-client-apprecie-des-livres-titres-a-l-exterieur-d-une-librairie-francaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20109560/pexels-photo-20109560/free-photo-of-assiette-repas-table-petit-dejeuner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">3000DA</span>
        </div>
        <div className="text-sm text-gray-500">Desc</div>
        <button className="rounded-2xl ring-1 ring-shop text-shop w-max py-2 px-4 text-xs hover:bg-shop hover:text-white">
          Add To Cart
        </button>
      </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/29469995/pexels-photo-29469995/free-photo-of-un-client-apprecie-des-livres-titres-a-l-exterieur-d-une-librairie-francaise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="https://images.pexels.com/photos/20109560/pexels-photo-20109560/free-photo-of-assiette-repas-table-petit-dejeuner.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md "
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Product Name</span>
          <span className="font-semibold">3000DA</span>
        </div>
        <div className="text-sm text-gray-500">Desc</div>
        <button className="rounded-2xl ring-1 ring-shop text-shop w-max py-2 px-4 text-xs hover:bg-shop hover:text-white">
          Add To Cart
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
