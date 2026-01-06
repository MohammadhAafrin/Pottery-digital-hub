 // Products.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { Search, Filter } from "lucide-react";

const Products = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      image: "https://i.etsystatic.com/47070131/r/il/3cf339/5617703815/il_570xN.5617703815_iips.jpg",
      title: "Clay Flower Vase",
      description: "Elegant hand-thrown vase with a smooth matte finish — perfect for décor or fresh blooms.",
      price: "850",
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2024/11/465858387/DX/FE/WI/67521543/red-terracotta-tea-set-500x500.jpg",
      title: "Terracotta Tea Set",
      description: "Rustic-style tea set crafted from natural terracotta clay for a traditional touch.",
      price: "1250",
    },
    {
      image: "http://villagedecor.in/cdn/shop/files/Clay-Water-Jug-Traditional-Lifestyle_View_HDJ1011.jpg",
      title: "Earthen Water Jug",
      description: "Keep your drinks naturally cool with this eco-friendly earthen water jug.",
      price: "950",
    },
    {
      image: "https://lillieceramics.com/cdn/shop/products/DSC_0748.jpg?v=1590604181",
      title: "Decorative Ceramic Bowl",
      description: "Hand-crafted ceramic bowl made by skilled potters, perfect for fruits or décor.",
      price: "1250",
    },
    {
      image: "https://mittify.com/wp-content/uploads/2024/10/415Zkn4EBUL._SL1080_.jpg",
      title: "Handcrafted Clay Lamp",
      description: "Traditional diya‑style clay lamp with intricate carvings — perfect for festivities.",
      price: "1399",
    },
    {
      image: "https://m.media-amazon.com/images/I/81Tgbp-iDLL._AC_UF894,1000_QL80_.jpg",
      title: "Terracotta Coffee Mug Set",
      description: "Rustic clay mugs (set of 2) with natural earthy texture.",
      price: "499",
    },
    {
      image: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqF6CKjOyy5jnQUOODQEj5pCtLdi5k0kKzw&s",
      title: "Handmade Clay Plate",
      description: "Perfectly glazed clay plate for serving or decoration.",
      price: "799",
    },
    {
      image: " https://www.claymango.com/cdn/shop/products/479283102941050_f6c03eb5-9786-4e37-a68e-8e9c83b667c8.jpg?v=1623828737",
      title: "Terracotta Pitcher",
      description: "Ideal for water, juice, or decorative use.",
      price: "1299",
    },
    {
      image: " https://nestasia.in/cdn/shop/files/tumblercups_6.jpg?v=1709561106",
      title: "Clay Tea Cup Set",
      description: "Set of 4 handcrafted clay tea cups with a rustic look.",
      price: "699",
    },
    {
      image: " https://www.shutterstock.com/image-photo/traditional-indian-earthenware-handmade-pottery-260nw-2686804419.jpg",
      title: "Handmade crackers",
      description: " Festive handmade clay crackers, crafted with care to add a traditional touch to your celebrations.",
      price: "1550",
    },
    {
      image: " https://m.media-amazon.com/images/I/61u5ntiloxL.jpg",
      title: "Earthen Serving Bowl",
      description: "Eco-friendly bowl for salads, soups, or fruits.",
      price: "1100",
    },
    {
        image: "https://ezahk.com/cdn/shop/products/61Y31u59RtL._SL1500.jpg?v=1660821258",
  title:"Traditional Clay Pot",
  description:"Classic Indian cooking pot made of pure clay for natural flavor enhancement.",
  price:"699"
    },
    {
      image: " https://craftzone.in/backend/uploads/products/SKU0000003463/a508c6f7fa3b1bd54a7c334674d6db53.jpeg",
      title: "Clay Storage Jar",
      description: "Keep spices, grains, or small items in style.",
      price: "899",
    },
    { 
  image:" https://m.media-amazon.com/images/I/51i+p9KtIYL._AC_UF350,350_QL80_.jpg",
  title:"Pottery Kitchen Set",
  description:"Includes handcrafted bowls, spice jars, and serving dishes made with care.",
  price:"2499"

    },
    {
      image: " https://5.imimg.com/data5/SELLER/Default/2023/8/332572530/II/UC/PB/112205412/new-product-500x500.webp",
      title: "Mini Clay Sculpture",
      description: "Handcrafted miniature sculpture for home or office décor.",
      price: "999",
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-gray-800">
      <Navbar />

      {/* Header Section */}
      <section className="bg-amber-200 text-center py-16 shadow-inner">
        <h1 className="text-4xl font-bold text-amber-900 mb-3">Our Pottery Collection 🏺</h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Explore a variety of handmade pottery crafted by local artisans — blending tradition and creativity.
        </p>
      </section>

      {/* Search & Filter */}
      <div className="flex justify-center items-center gap-3 mt-8 px-6">
        <div className="flex items-center bg-amber-100 rounded-lg px-3 py-2 w-80">
          <Search size={18} className="text-amber-700" />
          <input
            type="text"
            placeholder="Search for pottery..."
            className="bg-transparent outline-none ml-2 flex-grow text-sm text-gray-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button
          onClick={() => setFilterVisible(!filterVisible)}
          className="bg-amber-700 text-white px-3 py-2 rounded-lg flex items-center gap-2 hover:bg-amber-800"
        >
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Filter Options */}
      {filterVisible && (
        <div className="bg-white shadow-md rounded-lg p-4 mt-4 mx-6 max-w-4xl mx-auto">
          <h3 className="font-semibold mb-2">Sort by</h3>
          <div className="flex gap-3">
            <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
              Price: Low to High
            </button>
            <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
              Price: High to Low
            </button>
            <button className="bg-amber-700 text-white px-4 py-2 rounded-md">
              Rating 4+ ⭐
            </button>
          </div>
        </div>
      )}

      {/* Product List */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-10">
            No products found for "<span className="font-semibold">{searchTerm}</span>"
          </p>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;
