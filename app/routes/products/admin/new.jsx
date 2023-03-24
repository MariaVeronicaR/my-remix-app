
import { Form, useActionData } from "@remix-run/react";
import { json, redirect, ActionFunction } from "@remix-run/node";
import { createProduct } from "~/models/product.server";
import * as React from "react";

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;


export const action = async ({ request }) => {
  console.log(request)
  const formData = await request.formData();
  console.log(formData)
  const name = formData.get("name");
  const price = formData.get("price");
  const slug = formData.get("slug");
  const description = formData.get("description");
  if (typeof description !== "string" || description.length === 0) {
    return json(
      { errors: { description: description, body: "description required" } },
      { status: 400 }
    );
  }

  if (typeof slug !== "string" || slug.length === 0) {
    return json(
      { errors: { slug: null, body: "slug required" } },
      { status: 400 }
    );
  }

  if (typeof name !== "string" || name.length === 0) {
    return json(
      { errors: { name: null, body: "name required" } },
      { status: 400 }
    );
  }

  if (typeof price !== "string" || price.length === 0) {
    return json(
      { errors: { price: null, body: "price required" } },
      { status: 400 }
    );
  }
  await createProduct({slug,name,price,description});
 
  return redirect("/products/admin");
};

export default function NewProduct() {
  const actionData = useActionData();
  const slugRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const priceRef = React.useRef(null);
  const descriptionRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.slug) {
      slugRef.current?.focus();
    } 
    if (actionData?.errors?.name) {
      nameRef.current?.focus();
    }
    if (actionData?.errors?.price) {
      priceRef.current?.focus();
    }
    if (actionData?.errors?.description) {
      descriptionRef.current?.focus();
    }
  }, [actionData]);

  return (
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Name: </span>
          <input
            ref={nameRef}
            name="name"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.name ? true : undefined}
            aria-errormessage={
              actionData?.errors?.name ? "name-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.name && (
          <div className="pt-1 text-red-700" id="title-error">
            {actionData.errors.name}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Price: </span>
          <textarea
            ref={priceRef}
            name="price"
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
            aria-invalid={actionData?.errors?.price ? true : undefined}
            aria-errormessage={
              actionData?.errors?.price ? "body-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.price && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.price}
          </div>
        )}
      </div>

      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Slug: </span>
          <textarea
            ref={slugRef}
            name="slug"
            rows={2}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
            aria-invalid={actionData?.errors?.slug ? true : undefined}
            aria-errormessage={
              actionData?.errors?.slug ? "body-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.slug && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.slug}
          </div>
        )}
      </div>
      <div>
        <label className="flex w-full flex-col gap-1">
          <span>Description: </span>
          <textarea
            ref={descriptionRef}
            name="description"
            rows={4}
            className="w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6"
            aria-invalid={actionData?.errors?.description ? true : undefined}
            aria-errormessage={
              actionData?.errors?.description ? "body-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.description && (
          <div className="pt-1 text-red-700" id="body-error">
            {actionData.errors.description}
          </div>
        )}
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}




