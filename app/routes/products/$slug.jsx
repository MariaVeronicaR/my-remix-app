import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getProduct } from "~/models/product.server";
export const loader = async ({ params }) => {
    const product = await getProduct(params.slug);
    return json({ product });
};

export default function PostProduct() {
  const { product } = useLoaderData();
  console.log(product)
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {product.name}
    
      </h1>
      <h1>{product.price}</h1>
      <h1>{product.description}</h1>
    </main>
  );
}


