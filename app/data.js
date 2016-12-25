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
        "menuItems": [
          {
            "name": "Daisy",
            "items": [ "It has tasty things" ],
            "price": "12"
          },
          {
            "name": "Other",
            "items": [ "It has other stuff" ],
            "price": "12"
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
