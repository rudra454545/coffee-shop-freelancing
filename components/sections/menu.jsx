'use client'
import { useState, useRef, useEffect } from 'react'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const menuData = {
  burgers: [
    {
      id: 7,
      name: "Veg Burger",
      price: "₹89",
      description: "A classic all-time favorite. A savory vegetable patty grilled to perfection, topped with fresh lettuce, tomatoes, and onions, drizzled with creamy mayonnaise and served in a soft toasted bun.",
      image: "/img/Veg Burger.jpg",
      ingredients: ["Vegetable Patty", "Burger Bun", "Lettuce", "Tomato", "Onion", "Mayonnaise"],
      details: "A classic all-time favorite. A savory vegetable patty grilled to perfection, topped with fresh lettuce, tomatoes, and onions, drizzled with creamy mayonnaise and served in a soft toasted bun."
    },
    {
      id: 8,
      name: "Tandoori Veg Burger",
      price: "₹99",
      description: "A delicious Indian twist on the classic burger. Our vegetable patty is marinated in aromatic tandoori spices and yogurt, then grilled and served with mint chutney and crisp onions in a fresh bun.",
      image: "/img/Tandoori Veg Burger.jpg",
      ingredients: ["Vegetable Patty", "Tandoori Marinade", "Burger Bun", "Onion", "Mint Chutney"],
      details: "A delicious Indian twist on the classic burger. Our vegetable patty is marinated in aromatic tandoori spices and yogurt, then grilled and served with mint chutney and crisp onions in a fresh bun."
    },
    {
      id: 9,
      name: "Veg Double Cheese",
      price: "₹109",
      description: "For the cheese lovers! Our classic veg burger loaded with not one, but two slices of rich, melted cheese for an extra gooey and satisfying bite.",
  image: "/img/Veg Double Cheese.jpg",
      ingredients: ["Vegetable Patty", "Burger Bun", "Double Cheese Slices", "Lettuce", "Tomato", "Mayonnaise"],
      details: "For the cheese lovers! Our classic veg burger loaded with not one, but two slices of rich, melted cheese for an extra gooey and satisfying bite."
    },
    {
      id: 10,
      name: "Veg Double Patty",
      price: "₹119",
      description: "Double the delight! Two perfectly seasoned vegetable patties stacked high with fresh toppings and our special sauce, all packed into a soft bun.",
  image: "/img/Veg Double Patty.jpg",
      ingredients: ["Two Vegetable Patties", "Burger Bun", "Lettuce", "Tomato", "Onion", "Special Sauce"],
      details: "Double the delight! Two perfectly seasoned vegetable patties stacked high with fresh toppings and our special sauce, all packed into a soft bun."
    },
    {
      id: 11,
      name: "Paneer Burger",
      price: "₹119",
      description: "A soft, thick slice of paneer (Indian cottage cheese) is seasoned and pan-fried until golden, then placed on a bed of fresh veggies in a toasted bun. A vegetarian's dream!",
  image: "/img/Paneer Burger.jpg",
      ingredients: ["Paneer Patty", "Burger Bun", "Lettuce", "Tomato", "Spices", "Mayonnaise"],
      details: "A soft, thick slice of paneer (Indian cottage cheese) is seasoned and pan-fried until golden, then placed on a bed of fresh veggies in a toasted bun. A vegetarian's dream!"
    },
    {
      id: 12,
      name: "Tandoori Paneer Burger",
      price: "₹129",
      description: "Experience the smoky flavors of the tandoor. A succulent slab of paneer is marinated in a blend of tandoori spices, grilled, and served with tangy mint chutney and sliced onions.",
  image: "/img/Tandoori Paneer Burger.jpg",
      ingredients: ["Paneer Patty", "Tandoori Marinade", "Burger Bun", "Mint Chutney", "Onion"],
      details: "Experience the smoky flavors of the tandoor. A succulent slab of paneer is marinated in a blend of tandoori spices, grilled, and served with tangy mint chutney and sliced onions."
    },
    {
      id: 13,
      name: "Paneer Double Cheese",
      price: "₹139",
      description: "The ultimate indulgence for paneer fans. A golden-fried paneer patty topped with two layers of molten cheese, creating a rich and creamy delight.",
  image: "/img/Paneer Double Cheese Burger.png",
      ingredients: ["Paneer Patty", "Burger Bun", "Double Cheese Slices", "Lettuce", "Tomato"],
      details: "The ultimate indulgence for paneer fans. A golden-fried paneer patty topped with two layers of molten cheese, creating a rich and creamy delight."
    },
    {
      id: 14,
      name: "Paneer Double Patty",
      price: "₹159",
      description: "Go big with two layers of our signature paneer patties, stacked with fresh vegetables and a creamy sauce for a truly filling and flavorful experience.",
  image: "/img/Paneer Double Patty.jpg",
      ingredients: ["Two Paneer Patties", "Burger Bun", "Lettuce", "Tomato", "Special Sauce"],
      details: "Go big with two layers of our signature paneer patties, stacked with fresh vegetables and a creamy sauce for a truly filling and flavorful experience."
    },
    {
      id: 15,
      name: "Chicken Burger",
      price: "₹109",
      description: "A juicy, tender chicken patty, seasoned and grilled to perfection. Served with crisp lettuce and a creamy sauce in a toasted sesame bun.",
  image: "/img/Chicken Burger.jpg",
      ingredients: ["Chicken Patty", "Burger Bun", "Lettuce", "Mayonnaise", "Tomato"],
      details: "A juicy, tender chicken patty, seasoned and grilled to perfection. Served with crisp lettuce and a creamy sauce in a toasted sesame bun."
    },
    {
      id: 16,
      name: "Tandoori Chicken Burger",
      price: "₹119",
      description: "A flavorful fusion! A succulent chicken patty marinated in rich tandoori spices, grilled, and served with a zesty mint mayonnaise and crisp onions.",
      image: "/img/Tandoori Chicken Burger.jpg",
      ingredients: ["Chicken Patty", "Tandoori Marinade", "Burger Bun", "Onion", "Mint Mayonnaise"],
      details: "A flavorful fusion! A succulent chicken patty marinated in rich tandoori spices, grilled, and served with a zesty mint mayonnaise and crisp onions."
    },
    {
      id: 17,
      name: "Chicken Double Cheese",
      price: "₹129",
      description: "Satisfy your cravings with our juicy chicken patty smothered in two slices of perfectly melted cheese, served with fresh toppings in a soft bun.",
      image: "/img/Chicken Double Cheese.jpg",
      ingredients: ["Chicken Patty", "Burger Bun", "Double Cheese Slices", "Lettuce", "Tomato"],
      details: "Satisfy your cravings with our juicy chicken patty smothered in two slices of perfectly melted cheese, served with fresh toppings in a soft bun."
    },
    {
      id: 18,
      name: "Chicken Double Patty",
      price: "₹159",
      description: "A burger for the truly hungry. Two juicy chicken patties stacked high with all the classic fixings for a mouthful of flavor.",
      image: "/img/Chicken Double Patty.jpg",
      ingredients: ["Two Chicken Patties", "Burger Bun", "Lettuce", "Tomato", "Special Sauce"],
      details: "A burger for the truly hungry. Two juicy chicken patties stacked high with all the classic fixings for a mouthful of flavor."
    },
    {
      id: 19,
      name: "Chicken Grilled Burger",
      price: "₹109",
      description: "A healthier yet delicious option. A whole chicken breast fillet is marinated and grilled over an open flame for a smoky flavor, served with fresh salad in a bun.",
      image: "/img/Chicken Grilled Burger.jpg",
      ingredients: ["Grilled Chicken Breast", "Burger Bun", "Lettuce", "Tomato", "Onion", "Sauce"],
      details: "A healthier yet delicious option. A whole chicken breast fillet is marinated and grilled over an open flame for a smoky flavor, served with fresh salad in a bun."
    },
    {
      id: 20,
      name: "Tandoori Chicken Grilled Burger",
      price: "₹119",
      description: "A whole chicken breast marinated in smoky tandoori spices and yogurt, then grilled to juicy perfection and served with mint chutney and onions.",
      image: "/img/Tandoori Chicken Grilled Burger.jpg",
      ingredients: ["Grilled Chicken Breast", "Tandoori Marinade", "Burger Bun", "Mint Chutney", "Onion"],
      details: "A whole chicken breast marinated in smoky tandoori spices and yogurt, then grilled to juicy perfection and served with mint chutney and onions."
    },
    {
      id: 21,
      name: "Double Cheese Grilled Burger",
      price: "₹129",
      description: "Our flame-grilled chicken breast fillet gets a lavish upgrade with two slices of melted cheese, adding a creamy texture to its smoky taste.",
      image: "/img/Double Cheese Grilled Burger.jpg",
      ingredients: ["Grilled Chicken Breast", "Burger Bun", "Double Cheese Slices", "Lettuce", "Tomato"],
      details: "Our flame-grilled chicken breast fillet gets a lavish upgrade with two slices of melted cheese, adding a creamy texture to its smoky taste."
    },
    {
      id: 22,
      name: "Chicken Double Grilled Burger",
      price: "₹159",
      description: "The ultimate protein-packed meal. Two whole grilled chicken breast fillets stacked together for a hearty, smoky, and satisfying burger.",
      image: "/img/Chicken Double Grilled Burger.jpg",
      ingredients: ["Two Grilled Chicken Breasts", "Burger Bun", "Lettuce", "Tomato", "Special Sauce"],
      details: "The ultimate protein-packed meal. Two whole grilled chicken breast fillets stacked together for a hearty, smoky, and satisfying burger."
    }
  ],
  fries: [
    {
  id: 23,
  name: "French Fries",
  price: "₹59",
  description: "Classic, golden, and crispy. Our potatoes are perfectly cut, fried to a beautiful golden-brown, and lightly salted. The perfect side for any meal.",
  image: "https://drive.google.com/uc?export=view&id=1V_2LYTC2u7E6MG4DEwGmNrwujs7CqQwL",
  ingredients: ["Potatoes", "Vegetable Oil", "Salt"],
  details: "Classic, golden, and crispy. Our potatoes are perfectly cut, fried to a beautiful golden-brown, and lightly salted. The perfect side for any meal."
}
    {
      id: 24,
      name: "Tandoori Fries",
      price: "₹69",
      description: "A flavorful Indian spin on a global favorite. Crispy french fries tossed in a special blend of smoky tandoori spices for a zesty kick.",
      image: "/img/Tandoori Fries.jpg",
      ingredients: ["Potatoes", "Vegetable Oil", "Tandoori Masala", "Salt"],
      details: "A flavorful Indian spin on a global favorite. Crispy french fries tossed in a special blend of smoky tandoori spices for a zesty kick."
    },
    {
      id: 25,
      name: "Peri Peri Fries",
      price: "₹69",
      description: "Turn up the heat! Our golden french fries are generously seasoned with a fiery and tangy peri-peri spice mix.",
      image: "/img/Peri Peri Fries.jpg",
      ingredients: ["Potatoes", "Vegetable Oil", "Peri-Peri Seasoning", "Salt"],
      details: "Turn up the heat! Our golden french fries are generously seasoned with a fiery and tangy peri-peri spice mix."
    },
    {
      id: 26,
      name: "Smiley Bites",
      price: "₹79",
      description: "A fun and happy treat for all ages. Soft, mashed potatoes shaped into cheerful smiles and fried until golden and crisp on the outside.",
  image: "/img/Smiley Bites.png",
      ingredients: ["Mashed Potatoes", "Corn Starch", "Spices", "Vegetable Oil"],
      details: "A fun and happy treat for all ages. Soft, mashed potatoes shaped into cheerful smiles and fried until golden and crisp on the outside."
    },
    {
      id: 27,
      name: "Peri Peri Smiley Bite",
      price: "₹89",
      description: "Your favorite happy potato bites with a spicy twist. Golden-fried smileys dusted with our signature tangy peri-peri seasoning.",
  image: "/img/Peri Peri Smiley Bite.png",
      ingredients: ["Mashed Potatoes", "Corn Starch", "Vegetable Oil", "Peri-Peri Seasoning"],
      details: "Your favorite happy potato bites with a spicy twist. Golden-fried smileys dusted with our signature tangy peri-peri seasoning."
    },
    {
      id: 28,
      name: "Tandoori Smiley Bite",
      price: "₹89",
      description: "A delightful fusion of fun and flavor. Crispy potato smileys are tossed in a mix of smoky tandoori spices for an irresistible taste.",
  image: "/img/Tandoori Smiley Bite.jpg",
      ingredients: ["Mashed Potatoes", "Corn Starch", "Vegetable Oil", "Tandoori Masala"],
      details: "A delightful fusion of fun and flavor. Crispy potato smileys are tossed in a mix of smoky tandoori spices for an irresistible taste."
    },
    {
      id: 29,
      name: "Veggie Bites",
      price: "₹99",
      description: "Crispy, bite-sized nuggets filled with a delicious mix of seasoned vegetables. A perfect snack to munch on.",
  image: "/img/Veggie Bites.jpg",
      ingredients: ["Mixed Vegetables (Carrots, Peas, Corn, Beans)", "Potato", "Breadcrumbs", "Spices"],
      details: "Crispy, bite-sized nuggets filled with a delicious mix of seasoned vegetables. A perfect snack to munch on."
    },
    {
      id: 30,
      name: "Cheesy Pop",
      price: "₹109",
      description: "Irresistible bites of happiness. Golden-fried balls filled with molten, gooey cheese and a hint of herbs.",
  image: "/img/Cheesy Pop.png",
      ingredients: ["Cheese", "Potato", "Breadcrumbs", "Herbs", "Vegetable Oil"],
      details: "Irresistible bites of happiness. Golden-fried balls filled with molten, gooey cheese and a hint of herbs."
    }
  ],
  cutlets: [
    {
      id: 31,
      name: "Veg Cutlet",
      price: "₹89",
      description: "A classic Indian snack. A hearty patty made from mashed potatoes and mixed vegetables, seasoned with spices, coated in breadcrumbs, and fried until perfectly crisp.",
  image: "/img/Veg Cutlet.png",
      ingredients: ["Potato", "Mixed Vegetables", "Spices", "Breadcrumbs", "Oil"],
      details: "A classic Indian snack. A hearty patty made from mashed potatoes and mixed vegetables, seasoned with spices, coated in breadcrumbs, and fried until perfectly crisp."
    },
    {
      id: 32,
      name: "Peri Peri Veg Cutlet",
      price: "₹99",
      description: "Our classic vegetable cutlet gets a fiery makeover! The crispy patty is dusted with a zesty and spicy peri-peri seasoning for an extra kick.",
  image: "/img/Peri Peri Veg Cutlet.jpg",
      ingredients: ["Potato", "Mixed Vegetables", "Spices", "Breadcrumbs", "Peri-Peri Seasoning"],
      details: "Our classic vegetable cutlet gets a fiery makeover! The crispy patty is dusted with a zesty and spicy peri-peri seasoning for an extra kick."
    },
    {
      id: 33,
      name: "Cheesy Veg Cutlet",
      price: "₹109",
      description: "A delightful surprise inside. Our flavorful vegetable cutlet is stuffed with a core of molten cheese that oozes out with every bite.",
  image: "/img/Cheesy Veg Cutlet.png",
      ingredients: ["Potato", "Mixed Vegetables", "Cheese", "Spices", "Breadcrumbs"],
      details: "A delightful surprise inside. Our flavorful vegetable cutlet is stuffed with a core of molten cheese that oozes out with every bite."
    },
    {
      id: 34,
      name: "Paneer Cutlet",
      price: "₹119",
      description: "A rich and satisfying snack made with crumbled paneer (Indian cottage cheese), potatoes, and aromatic spices, fried to a golden-brown crisp.",
  image: "/img/Paneer Cutlet.jpg",
      ingredients: ["Paneer", "Potato", "Spices", "Herbs", "Breadcrumbs"],
      details: "A rich and satisfying snack made with crumbled paneer (Indian cottage cheese), potatoes, and aromatic spices, fried to a golden-brown crisp."
    },
    {
      id: 35,
      name: "Peri Peri Paneer Cutlet",
      price: "₹129",
      description: "Experience a burst of flavor with our soft paneer cutlet, coated in a crispy layer and generously seasoned with tangy peri-peri spices.",
  image: "/img/Peri Peri Paneer Cutlet.png",
      ingredients: ["Paneer", "Potato", "Spices", "Breadcrumbs", "Peri-Peri Seasoning"],
      details: "Experience a burst of flavor with our soft paneer cutlet, coated in a crispy layer and generously seasoned with tangy peri-peri spices."
    },
    {
      id: 36,
      name: "Cheesy Paneer Cutlet",
      price: "₹139",
      description: "A truly decadent treat. Our savory paneer cutlet is filled with gooey, melted cheese for an unforgettable, creamy experience.",
  image: "/img/Cheesy Paneer Cutlet.jpg",
      ingredients: ["Paneer", "Potato", "Cheese", "Spices", "Breadcrumbs"],
      details: "A truly decadent treat. Our savory paneer cutlet is filled with gooey, melted cheese for an unforgettable, creamy experience."
    },
    {
      id: 37,
      name: "Chicken Cutlet",
      price: "₹109",
      description: "A tender, flavorful patty made from minced chicken and a blend of savory spices, coated in breadcrumbs and fried to a perfect golden crisp.",
  image: "/img/Chicken Cutlet.jpg",
      ingredients: ["Minced Chicken", "Spices", "Ginger", "Garlic", "Breadcrumbs"],
      details: "A tender, flavorful patty made from minced chicken and a blend of savory spices, coated in breadcrumbs and fried to a perfect golden crisp."
    },
    {
      id: 38,
      name: "Peri Peri Chicken Cutlet",
      price: "₹119",
      description: "Our crispy chicken cutlet is taken to the next level with a generous dusting of hot and tangy peri-peri seasoning.",
      image: "/img/Peri Peri Chicken Cutlet.jpg",
      ingredients: ["Minced Chicken", "Spices", "Breadcrumbs", "Peri-Peri Seasoning"],
      details: "Our crispy chicken cutlet is taken to the next level with a generous dusting of hot and tangy peri-peri seasoning."
    },
    {
      id: 39,
      name: "Cheesy Chicken Cutlet",
      price: "₹129",
      description: "A meat and cheese lover's dream. A juicy minced chicken patty with a warm, molten cheese center, fried to crispy perfection.",
  image: "/img/Cheesy Chicken Cutlet.jpg",
      ingredients: ["Minced Chicken", "Cheese", "Spices", "Breadcrumbs"],
      details: "A meat and cheese lover's dream. A juicy minced chicken patty with a warm, molten cheese center, fried to crispy perfection."
    }
  ],
  pizzas: [
    {
      id: 40,
      name: "Margherita Pizza",
      price: "₹109",
      description: "The timeless Italian classic. A simple yet delicious pizza with a tangy tomato sauce base, topped with generous amounts of mozzarella cheese and a sprinkle of herbs.",
  image: "/img/Margherita Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Herbs"],
      details: "The timeless Italian classic. A simple yet delicious pizza with a tangy tomato sauce base, topped with generous amounts of mozzarella cheese and a sprinkle of herbs."
    },
    {
      id: 41,
      name: "Veg Pizza",
      price: "₹119",
      description: "A garden-fresh delight. Our classic pizza base is topped with a vibrant mix of onions, capsicum, and tomatoes over a layer of rich tomato sauce and mozzarella.",
  image: "/img/Veg Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Onion", "Capsicum", "Tomato"],
      details: "A garden-fresh delight. Our classic pizza base is topped with a vibrant mix of onions, capsicum, and tomatoes over a layer of rich tomato sauce and mozzarella."
    },
    {
      id: 42,
      name: "Corn Pizza",
      price: "₹119",
      description: "A sweet and savory favorite. A delicious combination of golden sweet corn kernels scattered over a cheesy mozzarella base.",
  image: "/img/Corn Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Sweet Corn"],
      details: "A sweet and savory favorite. A delicious combination of golden sweet corn kernels scattered over a cheesy mozzarella base."
    },
    {
      id: 43,
      name: "Deluxe Veggy Pizza",
      price: "₹179",
      description: "The ultimate pizza for veggie lovers. A wholesome pizza loaded with a bounty of fresh vegetables like onions, capsicum, corn, mushrooms, and olives.",
  image: "/img/Deluxe Veggy Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Onion", "Capsicum", "Corn", "Mushroom", "Olives"],
      details: "The ultimate pizza for veggie lovers. A wholesome pizza loaded with a bounty of fresh vegetables like onions, capsicum, corn, mushrooms, and olives."
    },
    {
      id: 44,
      name: "Paneer Pizza",
      price: "₹139",
      description: "A vegetarian delight with an Indian touch. Topped with soft cubes of seasoned paneer, crisp capsicum, and onions on a cheesy base.",
  image: "/img/Paneer Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Paneer", "Capsicum", "Onion"],
      details: "A vegetarian delight with an Indian touch. Topped with soft cubes of seasoned paneer, crisp capsicum, and onions on a cheesy base."
    },
    {
      id: 45,
      name: "BBQ Paneer Pizza",
      price: "₹159",
      description: "A smoky and sweet sensation. Soft paneer cubes and sliced onions are tossed in a tangy barbecue sauce and generously spread over our classic pizza base.",
      image: "/img/BBQ Paneer Pizza.jpg",
      ingredients: ["Pizza Dough", "BBQ Sauce", "Mozzarella Cheese", "Paneer", "Onion"],
      details: "A smoky and sweet sensation. Soft paneer cubes and sliced onions are tossed in a tangy barbecue sauce and generously spread over our classic pizza base."
    },
    {
      id: 46,
      name: "Chicken Pizza",
      price: "₹139",
      description: "A simple and savory choice for meat lovers. Topped with seasoned pieces of chicken and a generous layer of mozzarella cheese.",
  image: "/img/Chicken Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Chicken"],
      details: "A simple and savory choice for meat lovers. Topped with seasoned pieces of chicken and a generous layer of mozzarella cheese."
    },
    {
      id: 47,
      name: "BBQ Chicken Pizza",
      price: "₹159",
      description: "A crowd-pleaser for a reason. Tender chunks of chicken are coated in a smoky barbecue sauce, topped with onions, and baked with mozzarella cheese.",
  image: "/img/BBQ Chicken Pizza.png",
      ingredients: ["Pizza Dough", "BBQ Sauce", "Mozzarella Cheese", "Chicken", "Onion"],
      details: "A crowd-pleaser for a reason. Tender chunks of chicken are coated in a smoky barbecue sauce, topped with onions, and baked with mozzarella cheese."
    },
    {
      id: 48,
      name: "Chicken Pepperoni Pizza",
      price: "₹189",
      description: "A true classic. Our pizza is generously topped with savory slices of chicken pepperoni over a rich tomato sauce and melted mozzarella cheese.",
  image: "/img/Chicken Pepperoni Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Chicken Pepperoni"],
      details: "A true classic. Our pizza is generously topped with savory slices of chicken pepperoni over a rich tomato sauce and melted mozzarella cheese."
    },
    {
      id: 49,
      name: "Tandoori Paneer Pizza",
      price: "₹159",
      description: "The best of both worlds! Cubes of paneer marinated in tandoori spices are baked on a pizza with onions, capsicum, and mozzarella for a unique fusion flavor.",
  image: "/img/Tandoori Paneer Pizza.jpg",
      ingredients: ["Pizza Dough", "Tandoori Sauce", "Mozzarella Cheese", "Tandoori Paneer", "Onion", "Capsicum"],
      details: "The best of both worlds! Cubes of paneer marinated in tandoori spices are baked on a pizza with onions, capsicum, and mozzarella for a unique fusion flavor."
    },
    {
      id: 50,
      name: "Tandoori Chicken Pizza",
      price: "₹159",
      description: "An Indian barbecue on a pizza. Tender chicken chunks marinated in smoky tandoori spices, arranged over a pizza with onions and capsicum.",
  image: "/img/Tandoori Chicken Pizza.jpg",
      ingredients: ["Pizza Dough", "Tandoori Sauce", "Mozzarella Cheese", "Tandoori Chicken", "Onion", "Capsicum"],
      details: "An Indian barbecue on a pizza. Tender chicken chunks marinated in smoky tandoori spices, arranged over a pizza with onions and capsicum."
    },
    {
      id: 51,
      name: "Mushroom Pizza",
      price: "₹139",
      description: "An earthy and savory delight for mushroom lovers. Generously topped with sliced mushrooms over a classic tomato and mozzarella base.",
  image: "/img/Mushroom Pizza.jpg",
      ingredients: ["Pizza Dough", "Tomato Sauce", "Mozzarella Cheese", "Mushrooms"],
      details: "An earthy and savory delight for mushroom lovers. Generously topped with sliced mushrooms over a classic tomato and mozzarella base."
    },
    {
      id: 52,
      name: "Tandoori Mushroom Pizza",
      price: "₹159",
      description: "A unique and flavorful combination. Sliced mushrooms marinated in tandoori spices, baked on a pizza with onions and cheese for a smoky, earthy taste.",
  image: "/img/Tandoori Mushroom Pizza.jpg",
      ingredients: ["Pizza Dough", "Tandoori Sauce", "Mozzarella Cheese", "Tandoori Mushrooms", "Onion"],
      details: "A unique and flavorful combination. Sliced mushrooms marinated in tandoori spices, baked on a pizza with onions and cheese for a smoky, earthy taste."
    },
    {
      id: 53,
      name: "*Extra Cheese Burst",
      price: "₹30",
      description: "Elevate any pizza with an explosion of cheese. A layer of creamy, liquid cheese is infused into the crust for an extra indulgent experience.",
  image: "/img/Extra Cheese Burst.png",
      ingredients: ["Liquid Cheese", "Pizza Dough"],
      details: "Elevate any pizza with an explosion of cheese. A layer of creamy, liquid cheese is infused into the crust for an extra indulgent experience."
    }
  ],
  crispyChicken: [
    {
      id: 54,
      name: "Chicken Pop",
      price: "₹109",
      description: "Bite-sized pieces of tender chicken, seasoned, coated in a crispy batter, and fried to golden perfection. Incredibly addictive and perfect for snacking.",
  image: "/img/Chicken Pop.jpg",
      ingredients: ["Boneless Chicken", "Flour", "Spices", "Oil"],
      details: "Bite-sized pieces of tender chicken, seasoned, coated in a crispy batter, and fried to golden perfection. Incredibly addictive and perfect for snacking."
    },
    {
      id: 55,
      name: "Peri Peri Chicken Pop",
      price: "₹119",
      description: "Our classic crispy chicken pops get a fiery upgrade, tossed in a zesty and spicy peri-peri seasoning that packs a punch.",
  image: "/img/Peri Peri Chicken Pop.jpg",
      ingredients: ["Boneless Chicken", "Flour", "Spices", "Peri-Peri Seasoning"],
      details: "Our classic crispy chicken pops get a fiery upgrade, tossed in a zesty and spicy peri-peri seasoning that packs a punch."
    },
    {
      id: 56,
      name: "Chicken Nuggets",
      price: "₹129",
      description: "A classic comfort food. Tender minced chicken is shaped into nuggets, coated in a light, crispy batter, and fried until golden brown.",
  image: "/img/Chicken Nuggets.jpg",
      ingredients: ["Minced Chicken", "Breadcrumbs", "Flour", "Spices"],
      details: "A classic comfort food. Tender minced chicken is shaped into nuggets, coated in a light, crispy batter, and fried until golden brown."
    },
    {
      id: 57,
      name: "Peri Peri Chicken Nuggets",
      price: "₹139",
      description: "Your favorite golden chicken nuggets with a spicy, tangy twist. Each nugget is dusted with our signature peri-peri seasoning for an extra kick.",
  image: "/img/Peri Peri Chicken Nuggets.jpg",
      ingredients: ["Minced Chicken", "Breadcrumbs", "Peri-Peri Seasoning", "Spices"],
      details: "Your favorite golden chicken nuggets with a spicy, tangy twist. Each nugget is dusted with our signature peri-peri seasoning for an extra kick."
    },
    {
      id: 58,
      name: "Chicken Wings",
      price: "₹139",
      description: "Juicy on the inside, crispy on the outside. Our chicken wings are fried to perfection, making for a satisfying and flavorful treat.",
  image: "/img/Chicken Wings.jpg",
      ingredients: ["Chicken Wings", "Flour", "Spices", "Oil"],
      details: "Juicy on the inside, crispy on the outside. Our chicken wings are fried to perfection, making for a satisfying and flavorful treat."
    },
    {
      id: 59,
      name: "Peri Peri Chicken Wings",
      price: "₹149",
      description: "Get ready for a flavor explosion. Crispy fried chicken wings are tossed in a hot and tangy peri-peri sauce that will leave you wanting more.",
      image: "/img/Peri Peri Chicken Wings.jpg",
      ingredients: ["Chicken Wings", "Flour", "Spices", "Peri-Peri Sauce"],
      details: "Get ready for a flavor explosion. Crispy fried chicken wings are tossed in a hot and tangy peri-peri sauce that will leave you wanting more."
    }
  ],
  dailyDesserts: [
    {
      id: 60,
      name: "Glee Icecream",
      price: "₹59",
      description: "A simple scoop of happiness. Creamy and delicious ice cream, perfect for cooling down or as a sweet end to your meal.",
  image: "/img/Glee Ice Cream.jpg",
      ingredients: ["Milk", "Cream", "Sugar", "Flavorings"],
      details: "A simple scoop of happiness. Creamy and delicious ice cream, perfect for cooling down or as a sweet end to your meal."
    },
    {
      id: 61,
      name: "Chocolate Brownie",
      price: "₹99",
      description: "A rich, fudgy, and intensely chocolatey brownie with a dense, moist texture. A perfect indulgence for any chocolate lover.",
  image: "/img/Chocolate Browin.jpg",
      ingredients: ["Flour", "Sugar", "Butter", "Cocoa Powder", "Chocolate", "Eggs"],
      details: "A rich, fudgy, and intensely chocolatey brownie with a dense, moist texture. A perfect indulgence for any chocolate lover."
    },
    {
      id: 62,
      name: "Red Velvet",
      price: "₹99",
      description: "A slice of classic Red Velvet cake. A striking crimson-colored cake with a hint of cocoa, known for its soft, velvety texture and typically paired with cream cheese frosting.",
  image: "/img/Red Velvet.jpg",
      ingredients: ["Flour", "Sugar", "Butter", "Cocoa Powder", "Buttermilk", "Red Food Coloring"],
      details: "A slice of classic Red Velvet cake. A striking crimson-colored cake with a hint of cocoa, known for its soft, velvety texture and typically paired with cream cheese frosting."
    },
    {
      id: 63,
      name: "Choco Waffle",
      price: "₹109",
      description: "A freshly baked, warm, and crispy waffle drizzled generously with rich, melted chocolate sauce. A simple yet decadent dessert.",
  image: "/img/Choco Waffle.jpg",
      ingredients: ["Waffle Batter (Flour, Sugar, Eggs, Milk)", "Chocolate Sauce"],
      details: "A freshly baked, warm, and crispy waffle drizzled generously with rich, melted chocolate sauce. A simple yet decadent dessert."
    },
    {
      id: 64,
      name: "Nutella Waffle",
      price: "₹139",
      description: "The ultimate treat for Nutella fans. A golden, crispy waffle slathered with a thick, luscious layer of creamy Nutella.",
      image: "/img/Nutella Waffle.jpg",
      ingredients: ["Waffle Batter (Flour, Sugar, Eggs, Milk)", "Nutella"],
      details: "The ultimate treat for Nutella fans. A golden, crispy waffle slathered with a thick, luscious layer of creamy Nutella."
    },
    {
      id: 65,
      name: "Brownie Waffle",
      price: "₹139",
      description: "The best of both worlds! A warm, crispy waffle topped with chunks of our fudgy chocolate brownie and a drizzle of chocolate sauce.",
  image: "/img/Brownie Waffle.jpg",
      ingredients: ["Waffle Batter", "Chocolate Brownie Pieces", "Chocolate Sauce"],
      details: "The best of both worlds! A warm, crispy waffle topped with chunks of our fudgy chocolate brownie and a drizzle of chocolate sauce."
    },
    {
      id: 66,
      name: "Red Velvet Waffle",
      price: "₹139",
      description: "A unique and delicious creation. A freshly made waffle infused with red velvet flavor, often served with cream cheese drizzle for an authentic taste.",
  image: "/img/Red Velvet Waffle.jpg",
      ingredients: ["Red Velvet Waffle Batter", "Cream Cheese Drizzle"],
      details: "A unique and delicious creation. A freshly made waffle infused with red velvet flavor, often served with cream cheese drizzle for an authentic taste."
    }
  ],
  chickenKebab: [
    {
      id: 67,
      name: "Chicken Kebab",
      price: "₹99",
      description: "Succulent and flavorful kebabs made from minced chicken, seasoned with aromatic spices, skewered, and grilled to tender perfection.",
  image: "/img/Chicken Kebab.jpg",
      ingredients: ["Minced Chicken", "Onion", "Ginger-Garlic Paste", "Spices", "Herbs"],
      details: "Succulent and flavorful kebabs made from minced chicken, seasoned with aromatic spices, skewered, and grilled to tender perfection."
    },
    {
      id: 68,
      name: "Peri Peri Chicken Kebab",
      price: "₹109",
      description: "A fiery twist on a classic. Our tender chicken seekh kebabs are seasoned with a bold and tangy peri-peri spice mix for a zesty kick.",
      image: "/img/Peri Peri Chicken Kebab.jpg",
      ingredients: ["Minced Chicken", "Spices", "Herbs", "Peri-Peri Seasoning"],
      details: "A fiery twist on a classic. Our tender chicken seekh kebabs are seasoned with a bold and tangy peri-peri spice mix for a zesty kick."
    },
    {
      id: 69,
      name: "Tandoori Chicken Kebab",
      price: "₹119",
      description: "Experience the authentic smoky flavor of the tandoor. Minced chicken is marinated in a traditional tandoori spice blend and yogurt, then grilled to perfection.",
      image: "/img/Tandoori Chicken Kebab.jpg",
      ingredients: ["Minced Chicken", "Yogurt", "Tandoori Masala", "Ginger-Garlic Paste"],
      details: "Experience the authentic smoky flavor of the tandoor. Minced chicken is marinated in a traditional tandoori spice blend and yogurt, then grilled to perfection."
    },
    {
      id: 70,
      name: "Cheesy Chicken Kebab",
      price: "₹119",
      description: "A delightful surprise awaits inside. Our juicy chicken seekh kebabs are stuffed with a core of molten cheese that melts in your mouth.",
  image: "/img/Cheesy Chicken Kebab.jpg",
      ingredients: ["Minced Chicken", "Cheese", "Spices", "Herbs"],
      details: "A delightful surprise awaits inside. Our juicy chicken seekh kebabs are stuffed with a core of molten cheese that melts in your mouth."
    },
    {
      id: 71,
      name: "Mexican Chicken Kebab",
      price: "₹119",
      description: "A fusion of flavors. Tender chicken kebabs seasoned with a unique blend of Mexican spices like cumin, chili, and paprika for a zesty and smoky taste.",
  image: "/img/Mexican Chicken Kebab.jpg",
      ingredients: ["Minced Chicken", "Mexican Spices (Cumin, Chili Powder)", "Bell Peppers", "Onion"],
      details: "A fusion of flavors. Tender chicken kebabs seasoned with a unique blend of Mexican spices like cumin, chili, and paprika for a zesty and smoky taste."
    }
  ],
  beverages: [
    {
      id: 72,
      name: "Cold Coffee",
      price: "₹99",
      description: "A refreshing cold coffee made with chilled milk and instant coffee, perfect for a cool treat.",
  image: "/img/Cold Coffee.png",
      ingredients: ["Milk", "Coffee", "Sugar", "Ice"],
      details: "A refreshing cold coffee made with chilled milk and instant coffee, perfect for a cool treat."
    },
    {
      id: 73,
      name: "Hot Coffee",
      price: "₹89",
      description: "A classic hot coffee brewed to perfection, served with optional milk and sugar.",
  image: "/img/Hot Coffee.png",
      ingredients: ["Coffee", "Water", "Milk", "Sugar"],
      details: "A classic hot coffee brewed to perfection, served with optional milk and sugar."
    },
    {
      id: 74,
      name: "Chocolate Shake",
      price: "₹119",
      description: "A creamy and indulgent chocolate shake made with rich chocolate syrup and vanilla ice cream.",
  image: "/img/Chocolate Shake.png",
      ingredients: ["Milk", "Chocolate Syrup", "Vanilla Ice Cream", "Whipped Cream"],
      details: "A creamy and indulgent chocolate shake made with rich chocolate syrup and vanilla ice cream."
    },
    {
      id: 75,
      name: "Strawberry Shake",
      price: "₹119",
      description: "A fruity and refreshing strawberry shake blended with fresh strawberries and ice cream.",
  image: "/img/Strawberry Shake.png",
      ingredients: ["Milk", "Strawberries", "Vanilla Ice Cream", "Sugar"],
      details: "A fruity and refreshing strawberry shake blended with fresh strawberries and ice cream."
    },
    {
      id: 76,
      name: "Vanilla Shake",
      price: "₹109",
      description: "A smooth and classic vanilla shake made with vanilla ice cream and milk.",
  image: "/img/Vanilla Shake.png",
      ingredients: ["Milk", "Vanilla Ice Cream", "Sugar"],
      details: "A smooth and classic vanilla shake made with vanilla ice cream and milk."
    },
    {
      id: 77,
      name: "Lemonade",
      price: "₹79",
      description: "A tangy and refreshing lemonade made with fresh lemons and a hint of mint.",
      image: "/img/Lemonade.png",
      ingredients: ["Lemons", "Water", "Sugar", "Mint"],
      details: "A tangy and refreshing lemonade made with fresh lemons and a hint of mint."
    },
    {
      id: 78,
      name: "Iced Tea",
      price: "₹89",
      description: "Chilled tea served over ice, perfect for a refreshing drink on a hot day.",
      image: "/img/Iced Tea.png",
      ingredients: ["Tea", "Water", "Sugar", "Ice", "Lemon"],
      details: "Chilled tea served over ice, perfect for a refreshing drink on a hot day."
    },
    {
      id: 79,
      name: "Mango Lassi",
      price: "₹109",
      description: "A traditional Indian yogurt-based drink blended with ripe mangoes for a sweet and creamy flavor.",
      image: "/img/Mango Lassi.png",
      ingredients: ["Yogurt", "Mango", "Milk", "Sugar"],
      details: "A traditional Indian yogurt-based drink blended with ripe mangoes for a sweet and creamy flavor."
    }
  ]
}

const menuTabs = [
  { key: 'burgers', label: 'Bulky Burgers' },
  { key: 'fries', label: 'Hot Fries' },
  { key: 'cutlets', label: 'Crispy Cutlets' },
  { key: 'pizzas', label: 'Pizza Buzz' },
  { key: 'crispyChicken', label: 'Crispy Chicken' },
  { key: 'dailyDesserts', label: 'Daily Desserts' },
  { key: 'chickenKebab', label: 'Chicken Kebab' },
  { key: 'beverages', label: 'Beverages' },
]

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('burgers')
  const [selectedItem, setSelectedItem] = useState(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') el.scrollBy({ left: Math.round(el.clientWidth * 0.4), behavior: 'smooth' })
      if (e.key === 'ArrowLeft') el.scrollBy({ left: -Math.round(el.clientWidth * 0.4), behavior: 'smooth' })
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // reset scroll when switching categories
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: 0, behavior: 'smooth' })
  }, [activeCategory])

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#005f73] mb-4">Chart Your Course</h2>
          <p className="text-xl text-gray-600">From juicy burgers to crispy fries, your flavor voyage starts here.</p>
        </div>

        {/* Menu Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {menuTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-3 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 relative text-sm sm:text-base ${
                activeCategory === tab.key
                  ? 'text-[#ff6b6b] bg-white shadow-lg'
                  : 'text-[#005f73] bg-gray-100'
              }`}
            >
              {tab.label}
              {activeCategory === tab.key && (
                <GlowingEffect
                  spread={20}
                  glow={true}
                  proximity={40}
                  borderWidth={2}
                />
              )}
            </button>
          ))}
        </div>

        {/* Horizontal scrollable menu */}
        <div className="relative mb-12">
          <button
            aria-label="Scroll left"
            onClick={() => {
              const el = scrollRef.current
              if (el) el.scrollBy({ left: -Math.round(el.clientWidth * 0.7), behavior: 'smooth' })
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white"
          >
            ‹
          </button>

          <div
            ref={scrollRef}
            onWheel={(e) => {
              // when hovering over the scroller, convert vertical wheel to horizontal scroll
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault()
                scrollRef.current.scrollLeft += e.deltaY
              }
            }}
            className="flex gap-1 overflow-x-auto overflow-y-hidden py-4 px-6 snap-x snap-mandatory scroll-smooth menu-scrollbar"
          >
            {menuData[activeCategory].map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 snap-start"
                style={{
                  width: '280px',
                }}
              >
                <div className="w-full">
                  <MenuItem item={item} onSelect={() => setSelectedItem(item)} />
                </div>
              </div>
            ))}
          </div>

          <button
            aria-label="Scroll right"
            onClick={() => {
              const el = scrollRef.current
              if (el) el.scrollBy({ left: Math.round(el.clientWidth * 0.7), behavior: 'smooth' })
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 shadow flex items-center justify-center hover:bg-white"
          >
            ›
          </button>
        </div>

        <style jsx>{`
          /* Minimal blue themed horizontal scrollbar (WebKit) */
          .menu-scrollbar::-webkit-scrollbar {
            height: 6px;
          }
          .menu-scrollbar::-webkit-scrollbar-track {
            background: rgba(230,238,249,0.9); /* light track */
            border-radius: 9999px;
          }
          .menu-scrollbar::-webkit-scrollbar-thumb {
            background: #005f73; /* match order button color */
            border-radius: 9999px;
            box-shadow: 0 0 0 6px rgba(0,95,115,0.10);
          }

          /* Firefox */
          .menu-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #005f73 rgba(230,238,249,0.9);
          }
        `}</style>

        {/* Order Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <OrderButton
            platform="Swiggy"
            icon="🍽️"
            href="https://www.swiggy.com"
          />
          <OrderButton
            platform="Zomato"
            icon="🏍️"
            href="https://www.zomato.com"
          />
        </div>

        {/* Modal */}
        {selectedItem && (
          <MenuModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </div>
    </section>
  )
}

function MenuItem({ item, onSelect }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
      onClick={onSelect}
    >
      {/* Square image area */}
      <div className="relative bg-gray-200 overflow-hidden">
        <div className="w-full" style={{ paddingTop: '100%', position: 'relative' }}>
          <img
            src={item.image}
            alt={item.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* overlay name/price */}
          <div className="absolute left-0 right-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3">
            <div className="flex justify-between items-center text-white">
              <h3 className="font-semibold text-sm truncate">{item.name}</h3>
              <span className="text-sm font-bold">{item.price}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-gray-600 text-sm line-clamp-2 mb-3">{item.description}</p>
        <button className="w-full bg-[#005f73] text-white py-2 rounded-lg hover:bg-[#004a5c] transition-colors">
          Order Now
        </button>
      </div>
    </div>
  )
}

function OrderButton({ platform, icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 bg-[#005f73] text-white px-8 py-4 rounded-lg hover:bg-[#004a5c] transition-colors"
    >
      <span className="text-xl">{icon}</span>
      <span>Order on {platform}</span>
    </a>
  )
}



function MenuModal({ item, onClose }) {
  const [orderPlatform, setOrderPlatform] = useState(null)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold text-[#005f73]">{item.name}</h3>
              <p className="text-xl text-[#ff6b6b] font-bold">{item.price}</p>
            </div>
            <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-700">
              ×
            </button>
          </div>

          <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-lg mb-6" />

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-[#005f73] mb-2">Description</h4>
              <p className="text-gray-600">{item.details}</p>
            </div>

            <div>
              <h4 className="font-semibold text-[#005f73] mb-2">Ingredients</h4>
              <p className="text-gray-600">{item.ingredients.join(', ')}</p>
            </div>

            {/* Order Options */}
            <div>
              <h4 className="font-semibold text-[#005f73] mb-4">Order Now</h4>
              <div className="grid grid-cols-3 gap-4">
                <OrderOption
                  platform="Swiggy"
                  icon="🍽️"
                  available={true}
                  onClick={() => setOrderPlatform('swiggy')}
                />
                <OrderOption
                  platform="Zomato"
                  icon="🏍️"
                  available={true}
                  onClick={() => setOrderPlatform('zomato')}
                />
                <OrderOption
                  platform="ServeNow"
                  icon="📍"
                  available={false}
                />
              </div>
            </div>

            {orderPlatform && (
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-green-800">
                  Redirecting to {orderPlatform} to order {item.name}...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function OrderOption({ platform, icon, available, onClick }) {
  return (
    <button
      onClick={available ? onClick : undefined}
      className={`aspect-square p-4 rounded-lg border-2 text-center transition-all flex flex-col items-center justify-center ${
        available
          ? 'border-[#005f73] text-[#005f73] hover:bg-[#005f73] hover:text-white'
          : 'border-gray-300 text-gray-400 cursor-not-allowed'
      }`}
    >
      <div className="text-3xl mb-1">{icon}</div>
      <div className="font-semibold text-sm">{platform}</div>
      {!available && (
        <div className="text-xs mt-1 text-gray-500">N/A</div>
      )}
    </button>
  )
}
