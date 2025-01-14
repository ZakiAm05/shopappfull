import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductImages from "@/components/ProductImages";
import { wixClientServer } from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
const SinglePage = async ({ params }: { params: { slug: string } }) => {
  /* console.log(params.slug); */
  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();
  if (!products.items[0]) {
    return notFound();
  }
  const product = products.items[0];
  /* console.log(product.productOptions); */
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE CONTAINER */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT CONTAINER */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <div className="h-[2px] bg-gray-200"></div>
        {product.price?.price === product.price?.discountedPrice ? (
          <h3 className="font-medium text-2xl">{product.price?.price}DA</h3>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              {product.price?.price}DA
            </h3>
            <h3 className="font-medium text-2xl">
              {product.price?.discountedPrice}DA
            </h3>
          </div>
        )}
        <div className="h-[2px] bg-gray-200"></div>
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add productId={product._id} variantId="00000000-0000-0000-0000-000000000000" stockNumber={product.stock?.quantity || 0}/>
        )}
        <div className="h-[2px] bg-gray-200"></div>
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(section.description),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
