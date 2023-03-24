import { prisma } from "~/db.server";


export function createProduct({ slug, name, price, description }) {
  return prisma.product.create({data: {slug:slug , name: name, price: price, description: description}});
}


export function deleteProduct({ slug }) {
  return prisma.product.deleteMany({
    where: { slug },
  });
}

export function updateProduct({ name, price, description, slug}) {
    return prisma.product.update({
      data: {
        name,
        price,
        description
        },
        where: {slug}
    });
}

const Product = {
    slug: "",
    name: "",
    price: "",
    description: ""
  };
  
  async function getProducts() {
    return prisma.product.findMany({});
  }

export async function getProduct(slug) {
  return prisma.product.findUnique({ where: { slug } });
}
export { Product, getProducts };
  


