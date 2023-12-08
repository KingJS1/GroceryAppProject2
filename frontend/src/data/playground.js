const dummy = [
  {
    id: "3017620422003",
    productName: "Nutella",
    brand: "Ferrero",
    quantity: "400 g",
    image:
      "https://images.openfoodfacts.org/images/products/301/762/042/2003/front_en.550.400.jpg",
    price: "$3.65",
  },
  {
    id: "5449000214911",
    productName: "Coca cola",
    brand: "Coca cola",
    quantity: "330 mL",
    image:
      "https://images.openfoodfacts.org/images/products/544/900/021/4911/front_en.119.400.jpg",
    price: "$1.75",
  },
];

function sum(nums) {
  return nums.reduce((prev, cur) => prev + cur, 0);
}

console.log(parseFloat(dummy[0].price.replace("$", "")) + 1.0);

console.log(
  dummy
    .map((item) => parseFloat(item.price.replace("$", "")))
    .reduce((prev, next) => prev + next)
);

console.log(Math.random() * 20);
