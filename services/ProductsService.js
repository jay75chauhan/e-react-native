export async function getProduct(id) {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await data.json();
}
