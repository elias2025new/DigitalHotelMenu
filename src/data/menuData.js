import beefTenderloinImg from '../assets/beef_tenderloin.jpg';
import chickenQuesadillaImg from '../assets/chicken_quesadilla.jpg';
import mixedGrilledImg from '../assets/mixed_grilled.jpg';

export const menuData = [
    {
        id: "salad",
        title: "Salad",
        items: [
            {
                name: "Swiss Inn Salad",
                price: "800.00",
                description: "Lettuce with tomatoes cubes, sweet corn, shredded carrots, onion and croutons tossed in your choice of dressing: French, Italian or lemon-olive-oil dressing."
            },
            {
                name: "Greek Salad",
                price: "570.00",
                description: "Bell pepper, onion, tomato, feta cheese, cucumber, lettuce, black olives, tossed in lemon-olive-oil vinaigrette."
            }
        ]
    },
    {
        id: "pasta",
        title: "Pastaraia",
        description: "Choose from these pastas: Spaghetti, Penne, Tagliatelle or Fusilli.",
        items: [
            { name: "Bolognaise", price: "780.00", description: "" },
            { name: "Prima vera", price: "520.00", description: "" },
            { name: "Napoli", price: "680.00", description: "" },
            { name: "Arrabiata", price: "570.00", description: "" },
            { name: "Carbonara", price: "720.00", description: "" },
            { name: "Salmo-cream", price: "1,400.00", description: "" }
        ]
    },
    {
        id: "main-courses",
        title: "Main Courses",
        items: [
            {
                name: "Beef Tenderloin",
                price: "1,000.00",
                image: beefTenderloinImg,
                description: "Grilled beef filet medallion cooked to your liking on red wine sauce accompanied by gratinated potato and roasted vegetable."
            },
            {
                name: "Chicken Quesadilla",
                price: "850.00",
                image: chickenQuesadillaImg,
                description: "Homemade tortilla wrap lined with a blend of melted cheese, filled with tender chicken stripes, bell-pepper, tomatoes, onion, garlic, sweet corn and flavored by cilantro."
            },
            {
                name: "Mixed Grilled",
                price: "1,300.00",
                image: mixedGrilledImg,
                description: "Beef tenderloin, shish taouk and sausage with creamy mushroom sauce served with French fries and gratinated tomato."
            },
            {
                name: "Chicken Curry",
                price: "780.00",
                description: "Spicy chicken curry served with of side of yoghurt, rice and chapatti."
            },
            {
                name: "Fish and Chips",
                price: "960.00",
                description: "Fried filet of Nile Perch in beer batter served French fries, lemon and tartar dip."
            }
        ]
    },
    {
        id: "ethiopian",
        title: "Ethiopian Specialties",
        items: [
            {
                name: "Beef or Lamb Tibs",
                price: "970.00",
                description: "Cubes of lamb or beef tenderloins sautéed with onion, garlic, tomatoes, chili, local butter and traditional spice."
            },
            {
                name: "Tibs FirFir",
                price: "680.00",
                description: "Sautéed strips of beef mixed with enjara in traditional spiced tomato sauce."
            },
            {
                name: "Shero/Tegabino",
                price: "540.00",
                description: "Chickpeas and shiro powder stewed with olive oil and traditional spices, served with enjera."
            },
            {
                name: "Fasting FirFir",
                price: "450.00",
                description: "The traditional way of enjera with hot spiced tomato sauce."
            }
        ]
    },
    {
        id: "pizza",
        title: "Pizza",
        items: [
            {
                name: "Swiss Inn Nexus Special Pizza",
                price: "1,400.00",
                description: "Traditional round pizza topped with our signature sauce, Chicken, beef tuna egg, onion, garlic and cheese and roasted vegetable."
            },
            {
                name: "Margarita Pizza",
                price: "760.00",
                description: "Traditional round pizza topped with tomato sauce, mozzarella cheese, garlic oil, oregano."
            },
            {
                name: "Tuna Pizza",
                price: "1,200.00",
                description: "Traditional round pizza topped with our signature sauce, Tuna, onion tomato sauce, sweet corn, garlic oil and cheese."
            },
            {
                name: "Fasting Pizza",
                price: "600.00",
                description: "Traditional round pizza topped with tomato sauce, stirred seasonal vegetables."
            }
        ]
    },
    {
        id: "burgers",
        title: "Burgers & Sandwiches",
        items: [
            {
                name: "Beef Burger",
                price: "820.00",
                price_detailed: "820.00",
                description: "Pure beef burger patty on avocado, lettuce, tomato, mayonnaise, topped with sautéed mushroom, onion, cheese bacon; all served in our sesame-burger-bun and with aside of French-fries."
            },
            {
                name: "Club Sandwich",
                price: "750.00",
                description: "Layers or grilled beef, chicken breast, cheese and fried egg assembled with tomato, lettuce and onion rings served with a side of French-fries."
            },
            {
                name: "Steak and Cheese Sandwich",
                price: "1,000.00",
                description: "Beef tenderloin strips, sautéed with onion, garlic and tomatoes, topped with melted cheese served in a toasted olive baguette, accompanied French fries."
            }
        ]
    },
    {
        id: "pastry",
        title: "Pastry",
        items: [
            { name: "Fruit Platter", price: "480.00", description: "" },
            { name: "Chocolate Brownies", price: "220.00", description: "" },
            { name: "Black & White Forest pcs", price: "240.00", description: "" }
        ]
    },
    {
        id: "breakfast",
        title: "Breakfast",
        items: [
            {
                name: "Continental Breakfast",
                price: "770.00",
                description: "Choice of fresh one seasonal juice or seasonal Fresh sliced fruits Baker's Basket selection of Croissant, Danish Pastries add toast bread served With butter, preserves And honey, freshly brewed Coffee, hot chocolate or tea."
            }
        ]
    },
    {
        id: "soup",
        title: "Soup",
        items: [
            {
                name: "Barly Soup",
                price: "460.00",
                description: "Famous and rich Swiss soup made of barley, vegetables, beef bacon and topped with chives."
            },
            {
                name: "Chicken & Corn Chowder",
                price: "490.00",
                description: "Hearty chicken cream soup with, sweet-corn, Potatoes and vegetables."
            },
            {
                name: "Mediterranean vegetable soup",
                price: "420.00",
                description: "Vegetable-tomato broth with rich of vegetable, kidney beans, topped with parmesan Shaving and basil."
            }
        ]
    }
];
