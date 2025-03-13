const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')

const app = express();
const port = process.env.PORT || 3000;
const URI = process.env.URI
mongoose.connect(URI)
.then(()=>{
    console.log('Database connected');
    
})
.catch((err)=>{
    console.log(err);
    
})
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/about', (req, res) => {
    res.send('This is an API that provides infp for foods.');
});
const forexData = [
    {
        name: "EUR/USD",
        forexPairs: ["EUR", "USD"],
        exchange: "Forex",
        pictures: ["eur_usd_chart.jpg"]
    },
    {
        name: "GBP/USD",
        forexPairs: ["GBP", "USD"],
        exchange: "Forex",
        pictures: ["gbp_usd_chart.jpg"]
    },
    {
        name: "USD/JPY",
        forexPairs: ["USD", "JPY"],
        exchange: "Forex",
        pictures: ["usd_jpy_chart.jpg"]
    },
    {
        name: "AUD/USD",
        forexPairs: ["AUD", "USD"],
        exchange: "Forex",
        pictures: ["aud_usd_chart.jpg"]
    },
    {
        name: "USD/CAD",
        forexPairs: ["USD", "CAD"],
        exchange: "Forex",
        pictures: ["usd_cad_chart.jpg"]
    },
    {
        name: "USD/CHF",
        forexPairs: ["USD", "CHF"],
        exchange: "Forex",
        pictures: ["usd_chf_chart.jpg"]
    },
    {
        name: "NZD/USD",
        forexPairs: ["NZD", "USD"],
        exchange: "Forex",
        pictures: ["nzd_usd_chart.jpg"]
    },
    {
        name: "EUR/GBP",
        forexPairs: ["EUR", "GBP"],
        exchange: "Forex",
        pictures: ["eur_gbp_chart.jpg"]
    },
    {
        name: "EUR/JPY",
        forexPairs: ["EUR", "JPY"],
        exchange: "Forex",
        pictures: ["eur_jpy_chart.jpg"]
    },
    {
        name: "GBP/JPY",
        forexPairs: ["GBP", "JPY"],
        exchange: "Forex",
        pictures: ["gbp_jpy_chart.jpg"]
    }
];
const countrys = [
    {
        name: "United States",
        currency: "USD",
        pictures: ["us_flag.jpg"]
    },
    {
        name: "United Kingdom",
        currency: "GBP",
        pictures: ["uk_flag.jpg"]
    },
    {
        name: "Japan",
        currency: "JPY",
        pictures: ["japan_flag.jpg"]
    },
    {
        name: "New Zealand",
        currency: "NZD",
        pictures: ["nz_flag.jpg"]
    },
    {
        name: "Australia",
        currency: "AUD",
        pictures: ["australia_flag.jpg"]
    },
    {
        name: "Canada",
        currency: "CAD",
        pictures: ["canada_flag.jpg"]
    },
    {
        name: "Switzerland",
        currency: "CHF",
        pictures: ["switzerland_flag.jpg"]
    },
    {
        name: "Eurozone",
        currency: "EUR",
        pictures: ["euro_flag.jpg"]
    }
];


const state = [
    {
        name: "EUR/USD",
        forexPairs: ["EUR", "USD"],
        exchange: "Forex",
        pictures: ["eur_usd_chart.jpg"]
    },
    {
        name: "EUR/JPY",
        forexPairs: ["EUR", "JPY"],
        exchange: "Forex",
    },
    {
        name: "GBP/USD",
        forexPairs: ["GBP", "USD"],
        exchange: "Forex",
    },
    {
        name: "USD/JPY",
        forexPairs: ["USD", "JPY"],
        exchange: "Forex",
    }
]




    const foods = [
        { 
            name: "Sushi", 
            country: "Japan", 
            category: "Seafood", 
            description: "A traditional Japanese dish made with vinegared rice and raw fish.", 
            ingredients: ["Rice", "Fish", "Seaweed", "Soy Sauce"], 
            popularIn: ["Tokyo", "Osaka", "Kyoto"] 
        },
        { 
            name: "Tacos", 
            country: "Mexico", 
            category: "Street Food", 
            description: "A Mexican dish consisting of a tortilla filled with various ingredients like meat, cheese, and vegetables.", 
            ingredients: ["Tortilla", "Beef", "Cheese", "Tomato", "Onion"], 
            popularIn: ["Mexico City", "Guadalajara", "Monterrey"] 
        },
        { 
            name: "Pasta", 
            country: "Italy", 
            category: "Main Course", 
            description: "A popular Italian dish made with wheat-based noodles and various sauces.", 
            ingredients: ["Pasta", "Tomato Sauce", "Cheese", "Garlic"], 
            popularIn: ["Rome", "Milan", "Florence"] 
        },
        { 
            name: "Jollof Rice", 
            country: "Nigeria", 
            category: "Rice Dish", 
            description: "A West African dish made with rice, tomatoes, and spices, often served with chicken or beef.", 
            ingredients: ["Rice", "Tomato", "Pepper", "Onions", "Chicken"], 
            popularIn: ["Lagos", "Abuja", "Accra"] 
        },
        { 
            name: "Croissant", 
            country: "France", 
            category: "Pastry", 
            description: "A flaky, buttery pastry that originated in France, usually enjoyed for breakfast.", 
            ingredients: ["Flour", "Butter", "Sugar", "Yeast"], 
            popularIn: ["Paris", "Lyon", "Marseille"] 
        },
        { 
            name: "Pad Thai", 
            country: "Thailand", 
            category: "Noodles", 
            description: "A stir-fried noodle dish with eggs, tofu, shrimp, peanuts, and lime.", 
            ingredients: ["Rice Noodles", "Eggs", "Tofu", "Shrimp", "Peanuts"], 
            popularIn: ["Bangkok", "Chiang Mai", "Phuket"] 
        },
        { 
            name: "Biryani", 
            country: "India", 
            category: "Rice Dish", 
            description: "A flavorful Indian rice dish cooked with spices, meat, and saffron.", 
            ingredients: ["Rice", "Chicken", "Saffron", "Spices"], 
            popularIn: ["Hyderabad", "Mumbai", "Delhi"] 
        },
        { 
            name: "Kimchi", 
            country: "South Korea", 
            category: "Side Dish", 
            description: "A spicy fermented vegetable dish, usually made with cabbage and radish.", 
            ingredients: ["Cabbage", "Radish", "Chili Powder", "Garlic"], 
            popularIn: ["Seoul", "Busan", "Incheon"] 
        },
        { 
            name: "Falafel", 
            country: "Middle East", 
            category: "Street Food", 
            description: "Deep-fried balls made from chickpeas or fava beans, often served in pita bread.", 
            ingredients: ["Chickpeas", "Garlic", "Parsley", "Cumin"], 
            popularIn: ["Cairo", "Beirut", "Jerusalem"] 
        },
        { 
            name: "Poutine", 
            country: "Canada", 
            category: "Fast Food", 
            description: "A Canadian dish made of French fries topped with cheese curds and gravy.", 
            ingredients: ["Potatoes", "Cheese Curds", "Gravy"], 
            popularIn: ["Montreal", "Quebec City", "Toronto"] 
        }
    ];
app.get('/foods',(req,res)=>{
    res.send(foods)
})
app.get('/forexData', (req, res) => {
    res.send(forexData)
})
app.get('/countrys', (req, res) => {
    res.send(countrys)
})
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
