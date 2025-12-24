import fs from 'fs/promises';


export async function readProducts() {
  const data = await fs.readFile('data_product/products.json', 'utf-8');
  return JSON.parse(data);
}

export async function writeProducts(products) {
  await fs.writeFile('data_product/products.json', JSON.stringify(products, null, 2));

}
