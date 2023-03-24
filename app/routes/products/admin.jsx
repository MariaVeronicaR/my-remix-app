import { json } from "@remix-run/node";
import { Link,  Outlet, useLoaderData } from "@remix-run/react";

import { getProducts } from "~/models/product.server";

export const loader = async () => {
  return json({ products: await getProducts() });
};

export default function ProductAdmin() {
  const { products } = useLoaderData();

  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">
        Products Admin
      </h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-1">
          <ul>
            {products.map((product) => (
            
            <li key={product.slug}>
            <Link
              to={product.slug}
              className="text-blue-600 underline"
            >
              {product.name}
            </Link>
          </li>
            ))}
          </ul>
        </nav>
        <main className="col-span-4 md:col-span-3">
        <Outlet />
        </main>
      </div>
    </div>
  );
}
