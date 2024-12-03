import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description:
            "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description:
            "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description:
            "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image:
            "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description:
            "Adds humidity to the air and removes toxins.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description:
            "Easy to care for and effective at removing toxins.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description:
            "Purifies the air and has healing properties for skin.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
        {
          name: "Rosemary",
          image:
            "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15",
        },
        {
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: "$12",
        },
        {
          name: "Lemon Balm",
          image:
            "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description:
            "Citrusy scent, relieves stress and promotes sleep.",
          cost: "$14",
        },
        {
          name: "Hyacinth",
          image:
            "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Known for its fragrant flowers.",
          cost: "$22",
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Oregano",
          image:
            "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description:
            "Contains compounds that deter certain insects.",
          cost: "$10",
        },
        {
          name: "Marigold",
          image:
            "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          description:
            "Natural insect repellent, also adds color to the garden.",
          cost: "$8",
        },
        {
          name: "Geraniums",
          image:
            "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
          description:
            "Known for their insect-repelling properties.",
          cost: "$20",
        },
        {
          name: "Basil",
          image:
            "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
          description:
            "Repels flies and mosquitoes, also used in cooking.",
          cost: "$9",
        },
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Catnip",
          image:
            "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
          description: "Repels mosquitoes and attracts cats.",
          cost: "$13",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Soothing gel used for skin ailments.",
          cost: "$14",
        },
        {
          name: "Echinacea",
          image:
            "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          description:
            "Boosts immune system, helps fight colds.",
          cost: "$16",
        },
        {
          name: "Peppermint",
          image:
            "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description:
            "Relieves digestive issues and headaches.",
          cost: "$13",
        },
        {
          name: "Lemon Balm",
          image:
            "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description:
            "Calms nerves and promotes relaxation.",
          cost: "$14",
        },
        {
          name: "Chamomile",
          image:
            "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description:
            "Soothes anxiety and promotes sleep.",
          cost: "$15",
        },
        {
          name: "Calendula",
          image:
            "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
          description:
            "Heals wounds and soothes skin irritations.",
          cost: "$12",
        },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image:
            "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop",
          description:
            "Thrives in low light and requires minimal watering.",
          cost: "$25",
        },
        {
          name: "Pothos",
          image:
            "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description:
            "Tolerates neglect and can grow in various conditions.",
          cost: "$10",
        },
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description:
            "Needs infrequent watering and is pest-resistant.",
          cost: "$15",
        },
        {
          name: "Cast Iron Plant",
          image:
            "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          description:
            "Hardy plant that tolerates low light and neglect.",
          cost: "$20",
        },
        {
          name: "Succulents",
          image:
            "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          description:
            "Drought-tolerant plants with unique shapes and colors.",
          cost: "$18",
        },
        {
          name: "Aglaonema",
          image:
            "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          description:
            "Requires minimal care and adds color to indoor spaces.",
          cost: "$22",
        },
      ],
    },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true,
    }));
  };

  const handleRemoveFromCart = (plantName) => {
    dispatch(removeItem(plantName));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plantName]: false,
    }));
  };

  return (
    <div className="product-page">
      <div className="navbar">
        <h1>Paradise Nursery</h1>
        <h2>Where Green Meets Serenity</h2>
      </div>
      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <div key={index} className="product-category">
            <h2>{category.category}</h2>
            <div className="product-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="product-card" key={plantIndex}>
                  <img
                    className="product-image"
                    src={plant.image}
                    alt={plant.name}
                  />
                  <div className="product-details">
                    <div className="product-title">{plant.name}</div>
                    <p>{plant.description}</p>
                    <p>{plant.cost}</p>
                  </div>
                  {addedToCart[plant.name] ? (
                    <button
                      className="product-button remove"
                      onClick={() => handleRemoveFromCart(plant.name)}
                    >
                      Remove from Cart
                    </button>
                  ) : (
                    <button
                      className="product-button add"
                      onClick={() => handleAddToCart(plant)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
