/*jshint esversion: 6 */
// export function menuItems() {
//   return [
//     { title: 'Hello' },
//     { title: 'Pep' },
//     { title: 'Sausage' },
//     { title: 'Cheese' }
//   ];
// }

export function menuItems() {
  return  {
    "sections": [
      {
        "title": "Pizza",
        "sectionDescription": "substitute chick pea crust cooked in cast iron $3",
        "menuItems": [
          {
            "name": "Daisy",
            "items": [ "tomato sauce, mozzarella, basil" ],
            "price": "12"
          },
          {
            "name": "Mariner",
            "items": [ "Crushed tomato, garlic, oregano (sardines +6)" ],
            "price": "9"
          },
          {
            "name": "White",
            "items": [ "Mozzarella, smoked Ricotta, basil, garlic" ],
            "price": "13"
          },
          {
            "name": "CART-DRIVER",
            "items": [ "sausage, kale, mozzarella, chili flake" ],
            "price": "15"
          },
          {
            "name": "Mushrooms",
            "items": [ "Chanterelles, Red onion, Chives, Creme Fraiche, Frisee" ],
            "price": "17"
          },
          {
            "name": "Clam",
            "items": [ "Littleneck Clam, Pancetta, Toasted Garlic, Panna" ],
            "price": "18"
          },
          {
            "name": "Peppers",
            "items": [ "Tomato, Biellese Pepperoni, Garlic, Mozzarella, Chili" ],
            "price": "13"
          }
        ]
      },
      {
        "title": "Drinks",
        "menuItems": [
          {
            "name": "Beer",
            "items": [
              "drink one",
              "drink two"
            ],
            "price": "10"
          },
          {
            "name": "Wine",
            "items": [
              "wine one",
              "wine two"
           ],
            "price": "12"
          }
        ]
      }
    ]
  };
}
