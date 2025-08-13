import React from "react";

const FoodCards = () => {
  const products = [
    {
      id: 1,
      name: "Grilled Chicken Salad",
      price: "$12",
      img: "https://images.unsplash.com/photo-1659275797600-9f52f4e03b06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2QlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: "$10",
      img: "https://images.unsplash.com/photo-1662743086910-38419bbf7f34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2QlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      name: "Fruit Salad",
      price: "$8",
      img: "https://images.unsplash.com/photo-1555105269-2a294dddf6b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2QlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      name: "Greek Salad",
      price: "$15",
      img: "https://images.unsplash.com/photo-1651978595428-b79169f223a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      name: "Avocado Salad",
      price: "$11",
      img: "https://images.unsplash.com/photo-1662743086910-38419bbf7f34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZvb2QlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 6,
      name: "Quinoa Salad",
      price: "$9",
      img: "https://images.unsplash.com/photo-1659275797600-9f52f4e03b06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGZvb2QlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Dishes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-lg text-[#82b440] font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCards;
