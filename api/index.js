//https://api.escuelajs.co/api/v1/categories/{CATEGORY-ID}/products
/*
  1 clothes
  2 electronics
  3 furniture
  4 shoes
  5 others
*/

const getProducts = async (url, sectionId) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    printData(data, sectionId)
  } catch (error) {
    console.error(error);
  }
}

const printData = (data, sectionId) => {

  let section = document.getElementById(sectionId);

  data.forEach(item => {
    section.innerHTML += `
      <article class="products__card">
        <figure>
          <img src="${item.images[0]}" alt="${item.title}">
        </figure>
        <p>${item.title}</p>
        <p>$ ${item.price}</p>
      </article>
    `
  });
}

const getClothesProducts = (clothesUrl) => {
  let productsClothes = 'products__clothes'
  getProducts(clothesUrl, productsClothes)
}

function getElectronicsProducts(electronicsUrl) {
  let productsElectronics = 'products__electronics';
  getProducts(electronicsUrl, productsElectronics)
}

const getfurnitureProducts = (furnitureUrl) => {
  let productsFurniture = 'products__furniture';
  getProducts(furnitureUrl, productsFurniture)
}

const getShoesProducts = (shoesUrl) => {
  let productsShoes = 'products__shoes';
  getProducts(shoesUrl, productsShoes)
}

const getEachCategories = () => {
  getClothesProducts('https://api.escuelajs.co/api/v1/categories/1/products')
  getElectronicsProducts('https://api.escuelajs.co/api/v1/categories/2/products')
  getfurnitureProducts('https://api.escuelajs.co/api/v1/categories/3/products')
  getShoesProducts('https://api.escuelajs.co/api/v1/categories/4/products')
}

getEachCategories()
