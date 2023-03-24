import { json } from "@remix-run/node";
import { Link,useLoaderData } from "@remix-run/react";

import { getProducts } from "~/models/product.server";

export const loader = async () => {
  return json({ products: await getProducts() });
};

export default function Products() {
  const { products } = useLoaderData();
  console.log(products);
  return (
    <main>
      <h1>Products</h1>
      <div className="mx-auto mt-16 max-w-7xl text-center">
                    <Link to="admin" className="text-red-600 underline">
                    Admin
                  </Link>
                  </div>
      <ul>
      {products.map((products) => (
          <li key={products.slug}>
            <Link
              to={products.slug}
              className="text-blue-600 underline"
            >
              {products.name}
            </Link>
          </li>
        ))}
        
      </ul>
    </main>
  );
}
