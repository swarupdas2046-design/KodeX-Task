import Card from "./Components/Card";

const App = () => {
  const fashion = [
    {
      id: 1,
      productName: "Wireless Headphones",
      price: 4999,
      category: "Electronics",
      image:
        "https://avstore.in/cdn/shop/files/1.AVStore-Sonos-Ace-Front-Angled-View-Hero-Black.jpg?v=1725620870",
    },
    {
      id: 2,
      productName: "Smart Watch",
      price: 2499,
      category: "Gadgets",
      image:
        "https://ddfndelma2gpn.cloudfront.net/color/1591/oraimo_watch_5_black_1.webp",
    },
    {
      id: 3,
      productName: "Running Shoes",
      price: 1999,
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];
  return (
    <div className="h-full w-full bg-white text-white p-5 flex items-center justify-start gap-5 flex-col">
      <h1 className="text-4xl font-bold text-black mb-3">Our Products</h1>
      <div className="flex items-center gap-5">
        {fashion.map((elem) => {
          return (
            <Card
              key={elem.id}
              productName={elem.productName}
              image={elem.image}
              price={elem.price}
              category={elem.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
