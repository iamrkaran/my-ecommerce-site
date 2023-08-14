import { Product } from '../store/productTypes';

const products: Product[] = [
  {
    "id": 1,
    "title": "Nike Air Max 270",
    "description": "Men's Nike Air Max 270 sneakers, with breathable mesh upper and Max Air unit in the heel for responsive cushioning.",
    "price": 149.99,
    "image": "https://picsum.photos/200",
    "category": "Sneakers",
    "brand": "Nike",
    "color": "Black/White",
    "size": "US 9",
    "quantity": 10
  },
  {
    "id": 2,
    "title": "Apple iPhone 13",
    "description": "Apple iPhone 13 with 5G capability, A15 Bionic chip, Super Retina XDR display, Ceramic Shield front cover, and dual-camera system.",
    "price": 799.99,
    "image": "https://picsum.photos/200",
    "category": "Mobile Phones",
    "brand": "Apple",
    "color": "Blue",
    "storage": "256 GB",
    "quantity": 5
  },
  {
    "id": 3,
    "title": "Samsung 4K Smart TV",
    "description": "Samsung 55-inch 4K Ultra HD Smart TV with Crystal Display and Alexa built-in, allowing for hands-free voice control.",
    "price": 599.99,
    "image": "https://picsum.photos/200",
    "category": "TVs",
    "brand": "Samsung",
    "color": "Black",
    "display": "55-inch",
    "smart_features": "Alexa built-in",
    "quantity": 3
  },
  {
    "id": 4,
    "title": "Fossil Gen 6 Smartwatch",
    "description": "Fossil Gen 6 smartwatch with Wear OS by Google, stainless steel case, heart rate monitor, and GPS.",
    "price": 299.99,
    "image": "https://picsum.photos/200",
    "category": "Watches",
    "brand": "Fossil",
    "color": "Silver",
    "band_material": "Stainless Steel Mesh",
    "water_resistance": "3 ATM",
    "quantity": 7
  },
  {
    "id": 5,
    "title": "Canon EOS R5",
    "description": "Canon EOS R5 mirrorless camera with 45 megapixel full-frame CMOS sensor, DIGIC X image processor, and 8K video capability.",
    "price": 3899.99,
    "image": "https://picsum.photos/200",
    "category": "Cameras",
    "brand": "Canon",
    "color": "Black",
    "sensor": "Full-frame CMOS",
    "video_resolution": "8K",
    "quantity": 2
  },
];

export default products;
