const data = [
  {
    itemName: "Hotel",
    thumbnail: require("../assets/Images/hotelroom.jpg"),
    description: "Double Room",
    price: "$125.00",
  },
  {
    itemName: "Room",
    thumbnail: require("../assets/Images/hotel2.jpg"),
    description: "Single Room",
    price: "$500.00",
  },
  {
    itemName: "Home",
    thumbnail: require("../assets/Images/hotel3.jpg"),
    description: "Home Room",
    price: "$175.00",
  },
  {
    itemName: "apartment",
    thumbnail: require("../assets/Images/hotel4.jpg"),
    description: "Room",
    price: "$777.00",
  },
];

export function getData() {
  return data;
}
