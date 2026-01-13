const enMenu = [
    {
        id: "main-courses",
        title: "Main Courses",
        items: [
            {
                name: "Beef Tenderloin",
                price: "1,000.00",
                image: "/images/beef_tenderloin.jpg",
                description: "Grilled beef filet medallion cooked to your liking on red wine sauce accompanied by gratinated potato and roasted vegetable."
            },
            {
                name: "Chicken Quesadilla",
                price: "850.00",
                image: "/images/chicken_quesadilla.jpg",
                description: "Homemade tortilla wrap lined with a blend of melted cheese, filled with tender chicken stripes, bell-pepper, tomatoes, onion, garlic, sweet corn and flavored by cilantro."
            },
            {
                name: "Mixed Grilled",
                price: "1,300.00",
                image: "/images/mixed_grilled.jpg",
                description: "Beef tenderloin, shish taouk and sausage with creamy mushroom sauce served with French fries and gratinated tomato."
            },
            {
                name: "Chicken Curry",
                price: "780.00",
                image: "/images/lucid-origin_Chicken_Curry_Spicy_chicken_curry_served_with_of_side_of_yoghurt_rice_and_chapat-0.jpg",
                description: "Spicy chicken curry served with of side of yoghurt, rice and chapatti."
            },
            {
                name: "Fish and Chips",
                price: "960.00",
                image: "/images/lucid-origin_Fish_and_Chips_Fried_filet_of_Nile_Perch_in_beer_batter_served_French_fries_lemo-0.jpg",
                description: "Fried filet of Nile Perch in beer batter served French fries, lemon and tartar dip."
            }
        ]
    },
    {
        id: "salad",
        title: "Salad",
        items: [
            {
                name: "Swiss Inn Salad",
                price: "800.00",
                image: "/images/lucid-origin_Lettuce_with_tomatoes_cubes_sweet_corn_shredded_carrots_onion_and_croutons_tosse-0.jpg",
                description: "Lettuce with tomatoes cubes, sweet corn, shredded carrots, onion and croutons tossed in your choice of dressing: French, Italian or lemon-olive-oil dressing."
            },
            {
                name: "Greek Salad",
                price: "570.00",
                image: "/images/lucid-origin_Bell_pepper_onion_tomato_feta_cheese_cucumber_lettuce_black_olives_tossed_in_lem-0.jpg",
                description: "Bell pepper, onion, tomato, feta cheese, cucumber, lettuce, black olives, tossed in lemon-olive-oil vinaigrette."
            }
        ]
    },
    {
        id: "pasta",
        title: "Pastaraia",
        description: "Choose from these pastas: Spaghetti, Penne, Tagliatelle or Fusilli.",
        items: [
            {
                name: "Bolognaise",
                price: "780.00",
                image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Prima vera",
                price: "520.00",
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Napoli",
                price: "680.00",
                image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Arrabiata",
                price: "570.00",
                image: "/images/lucid-origin_Spicy_tomato_sauce_flavored_with_garlic_and_dried_red_chili_peppers.-0.jpg"
            },
            {
                name: "Carbonara",
                price: "720.00",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Salmo-cream",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Napoletaana",
                price: "750.00",
                image: "/images/napoletaana_pasta.png"
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
                image: "/images/beef_of_lamb_tibs.jpg",
                description: "Cubes of lamb or beef tenderloins sautéed with onion, garlic, tomatoes, chili, local butter and traditional spice."
            },
            {
                name: "Quanta/Tibs FirFir",
                price: "680.00",
                image: "/images/tibs_firfir.jpg",
                description: "Sautéed strips of beef mixed with enjara in traditional spiced tomato sauce."
            },
            {
                name: "Shero/Tegabino",
                price: "540.00",
                image: "/images/shero_tegabino.png",
                description: "Chickpeas and shiro powder stewed with olive oil and traditional spices, served with enjera."
            },
            {
                name: "Fasting FirFir",
                price: "450.00",
                image: "/images/fasting_firfir.jpg",
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
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "Traditional round pizza topped with our signature sauce, Chicken, beef tuna egg, onion, garlic and cheese and roasted vegetable."
            },
            {
                name: "Margarita Pizza",
                price: "760.00",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=600&auto=format&fit=crop",
                description: "Traditional round pizza topped with tomato sauce, mozzarella cheese, garlic oil, oregano."
            },
            {
                name: "Tuna Pizza",
                price: "1,200.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "Traditional round pizza topped with our signature sauce, Tuna, onion tomato sauce, sweet corn, garlic oil and cheese."
            },
            {
                name: "Fasting Pizza",
                price: "600.00",
                image: "/images/Lucid_Origin_Traditional_round_pizza_with_a_crispy_golden_crus_0.jpg",
                description: "Traditional round pizza topped with tomato sauce, stirred seasonal vegetables."
            }
        ]
    },
    {
        id: "burgers",
        title: "Burgers & Sandwiches",
        items: [
            {
                name: "Swiss inn Nexus Special Beef burger",
                price: "820.00",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
                description: "Special Beef Burger, Light spice beef burger, onion Tomato, little bread bum cheese and gired egg"
            },
            {
                name: "Club Sandwich",
                price: "750.00",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
                description: "Layers or grilled beef, chicken breast, cheese and fried egg assembled with tomato, lettuce and onion rings served with a side of French-fries."
            },
            {
                name: "Steak and Cheese Sandwich",
                price: "1,000.00",
                image: "/images/Lucid_Origin_A_succulent_steak_and_cheese_sandwich_featuring_t_3.jpg",
                description: "Beef tenderloin strips, sautéed with onion, garlic and tomatoes, topped with melted cheese served in a toasted olive baguette, accompanied French fries."
            }
        ]
    },
    {
        id: "pastry",
        title: "Pastry",
        items: [
            {
                name: "Fruit Platter",
                price: "480.00",
                image: "/images/fruit_platter.png"
            },
            {
                name: "Chocolate Brownies",
                price: "220.00",
                image: "/images/chocolate_brownies.png"
            },
            {
                name: "Black & White Forest pcs",
                price: "240.00",
                image: "/images/black_white_forest_cake.png"
            }
        ]
    },
    {
        id: "breakfast",
        title: "Breakfast",
        items: [
            {
                name: "Continental Breakfast",
                price: "770.00",
                image: "/images/Continental Breakfast.jpg",
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
                image: "/images/Barly Soup.jpg",
                description: "Famous and rich Swiss soup made of barley, vegetables, beef bacon and topped with chives."
            },
            {
                name: "Chicken & Corn Chowder",
                price: "490.00",
                image: "/images/Chicken & Corn Chowder.jpg",
                description: "Hearty chicken cream soup with, sweet-corn, Potatoes and vegetables."
            },
            {
                name: "Mediterranean vegetable soup",
                price: "420.00",
                image: "/images/Mediterranean vegetable soup.jpg",
                description: "Vegetable-tomato broth with rich of vegetable, kidney beans, topped with parmesan Shaving and basil."
            }
        ]
    }
];

const frMenu = [
    {
        id: "main-courses",
        title: "Plats Principaux",
        items: [
            {
                name: "Filet de Bœuf",
                price: "1,000.00",
                image: "/images/beef_tenderloin.jpg",
                description: "Médaillon de filet de bœuf grillé cuit à votre convenance sur sauce au vin rouge accompagné de gratin de pommes de terre et légumes rôtis."
            },
            {
                name: "Quesadilla au Poulet",
                price: "850.00",
                image: "/images/chicken_quesadilla.jpg",
                description: "Wrap de tortilla maison garni d'un mélange de fromage fondu, lanières de poulet tendre, poivrons, tomates, oignon, ail, maïs doux et parfumé à la coriandre."
            },
            {
                name: "Grillade Mixte",
                price: "1,300.00",
                image: "/images/mixed_grilled.jpg",
                description: "Filet de bœuf, shish taouk et saucisse avec sauce crémeuse aux champignons servi avec frites et tomate gratinée."
            },
            {
                name: "Poulet au Curry",
                price: "780.00",
                image: "/images/lucid-origin_Chicken_Curry_Spicy_chicken_curry_served_with_of_side_of_yoghurt_rice_and_chapat-0.jpg",
                description: "Curry de poulet épicé servi avec un accompagnement de yaourt, riz et chapatti."
            },
            {
                name: "Fish and Chips",
                price: "960.00",
                image: "/images/lucid-origin_Fish_and_Chips_Fried_filet_of_Nile_Perch_in_beer_batter_served_French_fries_lemo-0.jpg",
                description: "Filet de Perche du Nil frit dans une pâte à la bière servi avec frites, citron et sauce tartare."
            }
        ]
    },
    {
        id: "salad",
        title: "Salade",
        items: [
            {
                name: "Salade Swiss Inn",
                price: "800.00",
                image: "/images/lucid-origin_Lettuce_with_tomatoes_cubes_sweet_corn_shredded_carrots_onion_and_croutons_tosse-0.jpg",
                description: "Laitue avec dés de tomates, maïs doux, carottes râpées, oignon et croûtons mélangés dans votre choix de vinaigrette : Française, Italienne ou citron-huile d'olive."
            },
            {
                name: "Salade Grecque",
                price: "570.00",
                image: "/images/lucid-origin_Bell_pepper_onion_tomato_feta_cheese_cucumber_lettuce_black_olives_tossed_in_lem-0.jpg",
                description: "Poivron, oignon, tomate, fromage feta, concombre, laitue, olives noires, mélangés dans une vinaigrette citron-huile d'olive."
            }
        ]
    },
    {
        id: "pasta",
        title: "Pâtes",
        description: "Choisissez parmi ces pâtes : Spaghetti, Penne, Tagliatelle ou Fusilli.",
        items: [
            {
                name: "Bolognaise",
                price: "780.00",
                image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Primavera",
                price: "520.00",
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Napoli",
                price: "680.00",
                image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Arrabiata",
                price: "570.00",
                image: "/images/lucid-origin_Spicy_tomato_sauce_flavored_with_garlic_and_dried_red_chili_peppers.-0.jpg"
            },
            {
                name: "Carbonara",
                price: "720.00",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Crème de Saumon",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "Napoletaana",
                price: "750.00",
                image: "/images/napoletaana_pasta.png"
            }
        ]
    },
    {
        id: "ethiopian",
        title: "Spécialités Éthiopiennes",
        items: [
            {
                name: "Tibs de Bœuf ou d'Agneau",
                price: "970.00",
                image: "/images/beef_of_lamb_tibs.jpg",
                description: "Cubes de filet d'agneau ou de bœuf sautés avec oignon, ail, tomates, piment, beurre local et épices traditionnelles."
            },
            {
                name: "Quanta/Tibs FirFir",
                price: "680.00",
                image: "/images/tibs_firfir.jpg",
                description: "Lanières de bœuf sautées mélangées avec enjera dans une sauce tomate épicée traditionnelle."
            },
            {
                name: "Shero/Tegabino",
                price: "540.00",
                image: "/images/shero_tegabino.png",
                description: "Pois chiches et poudre de shiro mijotés avec huile d'olive et épices traditionnelles, servis avec enjera."
            },
            {
                name: "FirFir Jeûne",
                price: "450.00",
                image: "/images/fasting_firfir.jpg",
                description: "La façon traditionnelle d'enjera avec sauce tomate épicée chaude."
            }
        ]
    },
    {
        id: "pizza",
        title: "Pizza",
        items: [
            {
                name: "Pizza Spéciale Swiss Inn Nexus",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "Pizza ronde traditionnelle garnie de notre sauce signature, poulet, bœuf, thon, œuf, oignon, ail, fromage et légumes rôtis."
            },
            {
                name: "Pizza Margarita",
                price: "760.00",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=600&auto=format&fit=crop",
                description: "Pizza ronde traditionnelle garnie de sauce tomate, mozzarella, huile d'ail, origan."
            },
            {
                name: "Pizza au Thon",
                price: "1,200.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "Pizza ronde traditionnelle garnie de notre sauce signature, thon, sauce tomate oignon, maïs doux, huile d'ail et fromage."
            },
            {
                name: "Pizza Jeûne",
                price: "600.00",
                image: "/images/Lucid_Origin_Traditional_round_pizza_with_a_crispy_golden_crus_0.jpg",
                description: "Pizza ronde traditionnelle garnie de sauce tomate, légumes de saison sautés."
            }
        ]
    },
    {
        id: "burgers",
        title: "Burgers et Sandwichs",
        items: [
            {
                name: "Burger de Bœuf Spécial Swiss Inn Nexus",
                price: "820.00",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
                description: "Burger de bœuf spécial, burger de bœuf légèrement épicé, oignon, tomate, fromage et œuf."
            },
            {
                name: "Club Sandwich",
                price: "750.00",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
                description: "Couches de bœuf grillé, poitrine de poulet, fromage et œuf frit assemblés avec tomate, laitue et rondelles d'oignon servis avec frites."
            },
            {
                name: "Sandwich Steak et Fromage",
                price: "1,000.00",
                image: "/images/Lucid_Origin_A_succulent_steak_and_cheese_sandwich_featuring_t_3.jpg",
                description: "Lanières de filet de bœuf, sautées avec oignon, ail et tomates, garnies de fromage fondu servies dans une baguette aux olives grillée, accompagnées de frites."
            }
        ]
    },
    {
        id: "breakfast",
        title: "Petit-déjeuner",
        items: [
            {
                name: "Petit-déjeuner Continental",
                price: "770.00",
                image: "/images/Continental Breakfast.jpg",
                description: "Choix d'un jus de saison frais ou fruits frais de saison tranchés, sélection de boulangerie (croissant, viennoiseries danoises), pain grillé servi avec beurre, confitures et miel, café fraîchement infusé, chocolat chaud ou thé."
            }
        ]
    },
    {
        id: "soup",
        title: "Soupe",
        items: [
            {
                name: "Soupe d'Orge",
                price: "460.00",
                image: "/images/Barly Soup.jpg",
                description: "Soupe suisse célèbre et riche faite d'orge, de légumes, de bacon de bœuf et garnie de ciboulette."
            },
            {
                name: "Chaudrée de Poulet et Maïs",
                price: "490.00",
                image: "/images/Chicken & Corn Chowder.jpg",
                description: "Soupe crémeuse au poulet copieuse avec maïs doux, pommes de terre et légumes."
            }
        ]
    }
];

const arMenu = [
    {
        id: "main-courses",
        title: "الأطباق الرئيسية",
        items: [
            {
                name: "فيليه اللحم البقري",
                price: "1,000.00",
                image: "/images/beef_tenderloin.jpg",
                description: "ميدالية فيليه لحم بقري مشوي مطبوخ حسب رغبتك بصلصة النبيذ الأحمر مصحوبة ببطاطس مهروسة وخضروات مشوية."
            },
            {
                name: "كاساديا الدجاج",
                price: "850.00",
                image: "/images/chicken_quesadilla.jpg",
                description: "لفائف تورتيلا منزلية مبطنة بمزيج من الجبن المذاب، محشوة بشرائح دجاج طرية، فلفل حلو، طماطم، بصل، ثوم، ذرة حلوة ومنكهة بالكزبرة."
            },
            {
                name: "مشويات مشكلة",
                price: "1,300.00",
                image: "/images/mixed_grilled.jpg",
                description: "فيليه لحم بقري، شيش طاووق ونقانق مع صلصة فطر كريمية تقدم مع بطاطس مقلية وطماطم مهروسة."
            },
            {
                name: "كاري الدجاج",
                price: "780.00",
                image: "/images/lucid-origin_Chicken_Curry_Spicy_chicken_curry_served_with_of_side_of_yoghurt_rice_and_chapat-0.jpg",
                description: "كاري دجاج حار يقدم مع جانب من الزبادي والأرز والشباتي."
            },
            {
                name: "سمك وبطاطس",
                price: "960.00",
                image: "/images/lucid-origin_Fish_and_Chips_Fried_filet_of_Nile_Perch_in_beer_batter_served_French_fries_lemo-0.jpg",
                description: "فيليه مقلي من سمك الفرخ النيلي في عجين يقدم مع بطاطس مقلية، ليمون وصوص التارتار."
            }
        ]
    },
    {
        id: "salad",
        title: "سلطة",
        items: [
            {
                name: "سلطة سويس إن",
                price: "800.00",
                image: "/images/lucid-origin_Lettuce_with_tomatoes_cubes_sweet_corn_shredded_carrots_onion_and_croutons_tosse-0.jpg",
                description: "خس مع مكعبات طماطم، ذرة حلوة، جزر مبشور، بصل ومكعبات خبز محمصة بصلصة من اختيارك: فرنسية، إيطالية أو صلصة ليمون وزيت زيتون."
            },
            {
                name: "سلطة يونانية",
                price: "570.00",
                image: "/images/lucid-origin_Bell_pepper_onion_tomato_feta_cheese_cucumber_lettuce_black_olives_tossed_in_lem-0.jpg",
                description: "فلفل حلو، بصل، طماطم، جبن فيتا، خيار، خس، زيتون أسود، بصلصة خل الليمون وزيت الزيتون."
            }
        ]
    },
    {
        id: "pasta",
        title: "باستاريا",
        description: "اختر من بين هذه المعكرونة: سباغيتي، بيني، تالياتيلي أو فوسيلي.",
        items: [
            {
                name: "بولونيز",
                price: "780.00",
                image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "بريمافيرا",
                price: "520.00",
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "نابولي",
                price: "680.00",
                image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "أرابياتا",
                price: "570.00",
                image: "/images/lucid-origin_Spicy_tomato_sauce_flavored_with_garlic_and_dried_red_chili_peppers.-0.jpg"
            },
            {
                name: "كاربونارا",
                price: "720.00",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "سلمون كريم",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "نابوليتانا",
                price: "750.00",
                image: "/images/napoletaana_pasta.png"
            }
        ]
    },
    {
        id: "ethiopian",
        title: "تخصصات إثيوبية",
        items: [
            {
                name: "تيبس لحم بقري أو ضأن",
                price: "970.00",
                image: "/images/beef_of_lamb_tibs.jpg",
                description: "مكعبات من فيليه لحم الضأن أو البقر مقلية مع البصل، الثوم، الطماطم، الفلفل الحار، الزبدة المحلية والتوابل التقليدية."
            },
            {
                name: "كوانتا/تيبس فيرفير",
                price: "680.00",
                image: "/images/tibs_firfir.jpg",
                description: "شرائح لحم بقري مقلية مع إنجيرا في صلصة طماطم متبلة تقليدية."
            },
            {
                name: "شيرو/تيجابينو",
                price: "540.00",
                image: "/images/shero_tegabino.png",
                description: "حمص ومسحوق شيرو مطبوخ مع زيت الزيتون وتوابل تقليدية، يقدم مع إنجيرا."
            },
            {
                name: "فيرفير صيام",
                price: "450.00",
                image: "/images/fasting_firfir.jpg",
                description: "الطريقة التقليدية للإنجيرا مع صلصة طماطم حارة متبلة."
            }
        ]
    },
    {
        id: "pizza",
        title: "بيتزا",
        items: [
            {
                name: "بيتزا سويس إن نيكسس الخاصة",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "بيتزا دائرية تقليدية مغطاة بصلصتنا المميزة، دجاج، لحم بقري، تونة، بيض، بصل، ثوم وجبن وخضروات مشوية."
            },
            {
                name: "بيتزا مارغريتا",
                price: "760.00",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=600&auto=format&fit=crop",
                description: "بيتزا دائرية تقليدية مغطاة بصلصة الطماطم، جبن موزاريلا، زيت ثوم، أوريغانو."
            },
            {
                name: "بيتزا تونة",
                price: "1,200.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "بيتزا دائرية تقليدية مغطاة بصلصتنا المميزة، تونة، صلصة طماطم بصل، ذرة حلوة، زيت ثوم وجبن."
            },
            {
                name: "بيتزا صيام",
                price: "600.00",
                image: "/images/Lucid_Origin_Traditional_round_pizza_with_a_crispy_golden_crus_0.jpg",
                description: "بيتزا دائرية تقليدية مغطاة بصلصة الطماطم وخضروات موسمية مقلية."
            }
        ]
    },
    {
        id: "burgers",
        title: "برجر وسندويشات",
        items: [
            {
                name: "برجر لحم بقري سويس إن نيكسس خاص",
                price: "820.00",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
                description: "برجر لحم بقري خاص، برجر لحم بقري قليل التوابل، بصل، طماطم، خبز صغير، جبن وبيض مقلي."
            },
            {
                name: "كلوب سندويش",
                price: "750.00",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
                description: "طبقات من اللحم البقري المشوي، صدر دجاج، جبن وبيض مقلي مجمعة مع طماطم، خس وحلقات بصل تقدم مع جانب من البطاطس المقلية."
            },
            {
                name: "سندويش ستيك وجبن",
                price: "1,000.00",
                image: "/images/Lucid_Origin_A_succulent_steak_and_cheese_sandwich_featuring_t_3.jpg",
                description: "شرائح فيليه لحم بقري، مقلية مع بصل، ثوم وطماطم، مغطاة بجبن مذاب تقدم في خبز باجيت بالزيتون محمص، مصحوبة ببطاطس مقلية."
            }
        ]
    },
    {
        id: "breakfast",
        title: "إفطار",
        items: [
            {
                name: "إفطار كونتيننتال",
                price: "770.00",
                image: "/images/Continental Breakfast.jpg",
                description: "اختيار من عصير موسمي طازج أو فواكه موسمية طازجة مقطعة، سلة المخابز المختارة من الكرواسون، المعجنات الدንماركية، خبز محمص يقدم مع الزبدة والمربى والعسل، قهوة طازجة، شوكولاتة ساخنة أو شاي."
            }
        ]
    },
    {
        id: "soup",
        title: "شوربة",
        items: [
            {
                name: "شوربة شعير",
                price: "460.00",
                image: "/images/Barly Soup.jpg",
                description: "شوربة سويسرية شهيرة وغنية مصنوعة من الشعير، الخضروات، لحم بقري مقدد ومغطاة بالثوم المعمر."
            },
            {
                name: "شوربة دجاج وذرة",
                price: "490.00",
                image: "/images/Chicken & Corn Chowder.jpg",
                description: "شوربة كريمة الدجاج الدسمة مع ذرة حلوة، بطاطس وخضروات."
            }
        ]
    }
];

const zhMenu = [
    {
        id: "main-courses",
        title: "主菜",
        items: [
            {
                name: "牛里脊肉",
                price: "1,000.00",
                image: "/images/beef_tenderloin.jpg",
                description: "按您喜欢的熟度烤制的牛里脊肉，配红酒酱，佐以焗土豆和烤蔬菜。"
            },
            {
                name: "鸡肉墨西哥玉米粉圆饼",
                price: "850.00",
                image: "/images/chicken_quesadilla.jpg",
                description: "自制玉米饼包裹着混合融化奶酪，馅料为嫩鸡肉条、甜椒、西红柿、洋葱、大蒜、甜玉米，并以香菜调味。"
            },
            {
                name: "混合烧烤",
                price: "1,300.00",
                image: "/images/mixed_grilled.jpg",
                description: "牛里脊肉、什锦烤肉串和香肠配奶油蘑菇酱，佐以炸薯条和焗西红柿。"
            },
            {
                name: "咖喱鸡",
                price: "780.00",
                image: "/images/lucid-origin_Chicken_Curry_Spicy_chicken_curry_served_with_of_side_of_yoghurt_rice_and_chapat-0.jpg",
                description: "辛辣咖喱鸡，配酸奶、米饭和印度薄饼。"
            },
            {
                name: "炸鱼薯条",
                price: "960.00",
                image: "/images/lucid-origin_Fish_and_Chips_Fried_filet_of_Nile_Perch_in_beer_batter_served_French_fries_lemo-0.jpg",
                description: "啤酒面糊炸尼罗河鲈鱼片，配炸薯条、柠檬和塔塔酱。"
            }
        ]
    },
    {
        id: "salad",
        title: "沙拉",
        items: [
            {
                name: "瑞士旅馆沙拉",
                price: "800.00",
                image: "/images/lucid-origin_Lettuce_with_tomatoes_cubes_sweet_corn_shredded_carrots_onion_and_croutons_tosse-0.jpg",
                description: "生菜配西红柿丁、甜玉米、胡萝卜丝、洋葱和面包丁，拌以您选择的酱料：法式、意式或柠檬橄榄油酱。"
            },
            {
                name: "希腊沙拉",
                price: "570.00",
                image: "/images/lucid-origin_Bell_pepper_onion_tomato_feta_cheese_cucumber_lettuce_black_olives_tossed_in_lem-0.jpg",
                description: "甜椒、洋葱、西红柿、羊乳酪、黄瓜、生菜、黑橄榄，拌以柠檬橄榄油醋汁。"
            }
        ]
    },
    {
        id: "pasta",
        title: "意大利面",
        description: "从以下意面中选择：意大利面、通心粉、宽面条或螺旋面。",
        items: [
            {
                name: "肉酱面",
                price: "780.00",
                image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "春季蔬菜面",
                price: "520.00",
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "那不勒斯面",
                price: "680.00",
                image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "香辣茄酱面",
                price: "570.00",
                image: "/images/lucid-origin_Spicy_tomato_sauce_flavored_with_garlic_and_dried_red_chili_peppers.-0.jpg"
            },
            {
                name: "奶油培根面",
                price: "720.00",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "三文鱼奶油面",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "拿波里塔纳",
                price: "750.00",
                image: "/images/napoletaana_pasta.png"
            }
        ]
    },
    {
        id: "ethiopian",
        title: "埃塞俄比亚特色菜",
        items: [
            {
                name: "牛肉或羊肉 Tibs",
                price: "970.00",
                image: "/images/beef_of_lamb_tibs.jpg",
                description: "羊肉或牛里脊肉丁，配洋葱、大蒜、西红柿、辣椒、当地黄油和传统香料炒制。"
            },
            {
                name: "Quanta/Tibs FirFir",
                price: "680.00",
                image: "/images/tibs_firfir.jpg",
                description: "炒牛肉条混合英杰拉（enjara）在传统香料番茄酱中。"
            },
            {
                name: "Shero/Tegabino",
                price: "540.00",
                image: "/images/shero_tegabino.png",
                description: "鹰嘴豆和什罗粉（shiro powder）用橄榄油和传统香料炖煮，配英杰拉。"
            },
            {
                name: "斋戒 FirFir",
                price: "450.00",
                image: "/images/fasting_firfir.jpg",
                description: "传统的英杰拉配热辣香料番茄酱。"
            }
        ]
    },
    {
        id: "pizza",
        title: "披萨",
        items: [
            {
                name: "瑞士旅馆 Nexus 特色披萨",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "传统圆形披萨，配我们的招牌酱料、鸡肉、牛肉、金枪鱼、鸡蛋、洋葱、大蒜、奶酪和烤蔬菜。"
            },
            {
                name: "玛格丽特披萨",
                price: "760.00",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=600&auto=format&fit=crop",
                description: "传统圆形披萨，配番茄酱、马苏里拉奶酪、蒜油、牛至。"
            },
            {
                name: "金枪鱼披萨",
                price: "1,200.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "传统圆形披萨，配我们的招牌酱料、金枪鱼、洋葱番茄酱、甜玉米、蒜油和奶酪。"
            },
            {
                name: "斋戒披萨",
                price: "600.00",
                image: "/images/Lucid_Origin_Traditional_round_pizza_with_a_crispy_golden_crus_0.jpg",
                description: "传统圆形披萨，配番茄酱、炒时令蔬菜。"
            }
        ]
    },
    {
        id: "burgers",
        title: "汉堡和三明治",
        items: [
            {
                name: "瑞士旅馆 Nexus 特色牛肉汉堡",
                price: "820.00",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
                description: "特色牛肉汉堡，微辣牛肉汉堡，洋葱西红柿，小面包，奶酪和煎蛋。"
            },
            {
                name: "总汇三明治",
                price: "750.00",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
                description: "烤牛肉、鸡胸肉、奶酪和煎蛋层层叠加，配西红柿、生菜和洋葱圈，佐以炸薯条。"
            },
            {
                name: "牛排和奶酪三明治",
                price: "1,000.00",
                image: "/images/Lucid_Origin_A_succulent_steak_and_cheese_sandwich_featuring_t_3.jpg",
                description: "牛里脊肉条，配洋葱、大蒜和西红柿炒制，顶部融化奶酪，夹在烤橄榄法棍中，配炸薯条。"
            }
        ]
    },
    {
        id: "breakfast",
        title: "早餐",
        items: [
            {
                name: "欧式早餐",
                price: "770.00",
                image: "/images/Continental Breakfast.jpg",
                description: "精选新鲜时令果汁或时令鲜切水果，面包师精选羊角面包、丹麦糕点，加烤面包，配黄油、果酱和蜂蜜，现煮咖啡、热巧克力或茶。"
            }
        ]
    },
    {
        id: "soup",
        title: "汤",
        items: [
            {
                name: "大麦汤",
                price: "460.00",
                image: "/images/Barly Soup.jpg",
                description: "著名的丰富瑞士汤，由大麦、蔬菜、牛肉培根制成，并在上面撒上细香葱。"
            },
            {
                name: "鸡肉玉米浓汤",
                price: "490.00",
                image: "/images/Chicken & Corn Chowder.jpg",
                description: "丰盛的鸡肉奶油汤，配甜玉米、土豆和蔬菜。"
            }
        ]
    }
];

const amMenu = [
    {
        id: "main-courses",
        title: "ዋና ኮርሶች",
        items: [
            {
                name: "የበሬ ቴንደርሎይን",
                price: "1,000.00",
                image: "/images/beef_tenderloin.jpg",
                description: "በቀይ ወይን ሶስ የተጠበሰ የበሬ ሥጋ እንደምርጫዎ የተዘጋጀ፣ በግራቲን ድንች እና በተጠበሰ አትክልት የታጀበ።"
            },
            {
                name: "የዶሮ ኬሳዲያ",
                price: "850.00",
                image: "/images/chicken_quesadilla.jpg",
                description: "በቤት ውስጥ የተዘጋጀ ቶርቲላ በጥምር የቀለጠ አይብ፣ በለስላሳ የዶሮ ቁርጥራጮች፣ ቃሪያ፣ ቲማቲም፣ ሽንኩርት፣ ነጭ ሽንኩርት፣ ጣፋጭ የበቆሎ እና በሲላንትሮ የተቀመመ።"
            },
            {
                name: "የተደባለቀ ግሪል",
                price: "1,300.00",
                image: "/images/mixed_grilled.jpg",
                description: "የበሬ ቴንደርሎይን፣ ሺሽ ታውክ እና ቋሊማ በክሬሚ የእንጉዳይ ሶስ፣ ከፈረንሳይ ፍራይስ እና ቲማቲም ጋር የሚቀርብ።"
            },
            {
                name: "ዶሮ ካሪ",
                price: "780.00",
                image: "/images/lucid-origin_Chicken_Curry_Spicy_chicken_curry_served_with_of_side_of_yoghurt_rice_and_chapat-0.jpg",
                description: "ቅመማ ቅመም ያለው የዶሮ ካሪ ከእርጎ፣ ሩዝ እና ቻፓቲ ጎን ጋር የሚቀርብ።"
            },
            {
                name: "አሳ እና ቺፕስ",
                price: "960.00",
                image: "/images/lucid-origin_Fish_and_Chips_Fried_filet_of_Nile_Perch_in_beer_batter_served_French_fries_lemo-0.jpg",
                description: "በቢራ ሊጥ የተጠበሰ የአባይ  አሳ ከፈረንሳይ ፍራይስ፣ ሎሚ እና ታርታር ዲፕ ጋር።"
            }
        ]
    },
    {
        id: "salad",
        title: "ሰላጣ",
        items: [
            {
                name: "ስዊስ ኢን ሰላጣ",
                price: "800.00",
                image: "/images/lucid-origin_Lettuce_with_tomatoes_cubes_sweet_corn_shredded_carrots_onion_and_croutons_tosse-0.jpg",
                description: "ሰላጣ ከቲማቲም ኩብ፣ ጣፋጭ የበቆሎ፣ የተከተፈ ካሮት፣ ሽንኩርት እና ክሩቶኖች ጋር በመረጡት አለባበስ፡ ፈረንሳይኛ፣ ጣሊያን ወይም ሎሚ-ወይራ ዘይት።"
            },
            {
                name: "የግሪክ ሰላጣ",
                price: "570.00",
                image: "/images/lucid-origin_Bell_pepper_onion_tomato_feta_cheese_cucumber_lettuce_black_olives_tossed_in_lem-0.jpg",
                description: "ቃሪያ፣ ሽንኩርት፣ ቲማቲም፣ ፌታ አይብ፣ ዱባ፣ ሰላጣ፣ ጥቁር የወይራ ፍሬዎች፣ በሎሚ-ወይራ ዘይት ቪናግሬት።"
            }
        ]
    },
    {
        id: "pasta",
        title: "ፓስታራያ",
        description: "ከእነዚህ ፓስታዎች ይምረጡ፡ ስፓጌቲ፣ ፔኔ፣ ታግሊያቴሌ ወይም ፉሲሊ።",
        items: [
            {
                name: "ቦሎኛ",
                price: "780.00",
                image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "ፕሪማ ቬራ",
                price: "520.00",
                image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "ናፖሊ",
                price: "680.00",
                image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "አራቢያታ",
                price: "570.00",
                image: "/images/lucid-origin_Spicy_tomato_sauce_flavored_with_garlic_and_dried_red_chili_peppers.-0.jpg"
            },
            {
                name: "ካርቦናራ",
                price: "720.00",
                image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "ሳልሞ-ክሬም",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=600&auto=format&fit=crop"
            },
            {
                name: "ናፖሌታና",
                price: "750.00",
                image: "/images/napoletaana_pasta.png"
            }
        ]
    },
    {
        id: "ethiopian",
        title: "የኢትዮጵያ ምግቦች",
        items: [
            {
                name: "የበሬ ወይም የበግ ጥብስ",
                price: "970.00",
                image: "/images/beef_of_lamb_tibs.jpg",
                description: "የበግ ወይም የበሬ ቁርጥራጮች ከሽንኩርት፣ ነጭ ሽንኩርት፣ ቲማቲም፣ ቃሪያ፣ የአገር ውስጥ ቅቤ እና ባህላዊ ቅመማ ቅመም ጋር የተጠበሰ።"
            },
            {
                name: "ቋንጣ/ጥብስ ፍርፍር",
                price: "680.00",
                image: "/images/tibs_firfir.jpg",
                description: "የተጠበሰ የበሬ ሥጋ ቁርጥራጮች ከእንጀራ ጋር በባህላዊ ቅመማ ቅመም የቲማቲም ሶስ።"
            },
            {
                name: "ሽሮ/ተጋቢኖ",
                price: "540.00",
                image: "/images/shero_tegabino.png",
                description: "ሽንብራ እና የሽሮ ዱቄት በወይራ ዘይት እና በባህላዊ ቅመማ ቅመሞች የተቀቀለ፣ ከእንጀራ ጋር የሚቀርብ።"
            },
            {
                name: "የጾም ፍርፍር",
                price: "450.00",
                image: "/images/fasting_firfir.jpg",
                description: "ባህላዊው የእንጀራ አሰራር በሞቅ ያለ ቅመማ ቅመም የቲማቲም ሶስ።"
            }
        ]
    },
    {
        id: "pizza",
        title: "ፒዛ",
        items: [
            {
                name: "ስዊስ ኢን ኔክሰስ ልዩ ፒዛ",
                price: "1,400.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "ባህላዊ ክብ ፒዛ በምርጥ ሶሳችን፣ ዶሮ፣ የበሬ ቱና እንቁላል፣ ሽንኩርት፣ ነጭ ሽንኩርት እና አይብ እና የተጠበሰ አትክልት።"
            },
            {
                name: "ማርጋሪታ ፒዛ",
                price: "760.00",
                image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?q=80&w=600&auto=format&fit=crop",
                description: "ባህላዊ ክብ ፒዛ በቲማቲም ሶስ፣ ሞዛሬላ አይብ፣ ነጭ ሽንኩርት ዘይት፣ ኦሬጋኖ።"
            },
            {
                name: "ቱና ፒዛ",
                price: "1,200.00",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop",
                description: "ባህላዊ ክብ ፒዛ በምርጥ ሶሳችን፣ ቱና፣ ሽንኩርት ቲማቲም ሶስ፣ ጣፋጭ የበቆሎ፣ ነጭ ሽንኩርት ዘይት እና አይብ።"
            },
            {
                name: "የጾም ፒዛ",
                price: "600.00",
                image: "/images/Lucid_Origin_Traditional_round_pizza_with_a_crispy_golden_crus_0.jpg",
                description: "ባህላዊ ክብ ፒዛ በቲማቲም ሶስ፣ የተጠበሰ ወቅታዊ አትክልቶች።"
            }
        ]
    },
    {
        id: "burgers",
        title: "በርገሮች እና ሳንድዊቾች",
        items: [
            {
                name: "ስዊስ ኢን ኔክሰስ ልዩ የበሬ በርገር",
                price: "820.00",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop",
                description: "ልዩ የበሬ በርገር፣ ቀላል ቅመም የበሬ በርገር፣ ሽንኩርት ቲማቲም፣ ትንሽ ዳቦ አይብ እና የተጠበሰ እንቁላል።"
            },
            {
                name: "ክለብ ሳንድዊች",
                price: "750.00",
                image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
                description: "የተጠበሰ የበሬ ሥጋ፣ የዶሮ ደረት፣ አይብ እና የተጠበሰ እንቁላል ከቲማቲም፣ ሰላጣ እና የሽንኩርት ቀለበቶች ጋር ተሰብስበው ከፈረንሳይ ፍራይስ ጎን ጋር።"
            },
            {
                name: "ስቴክ እና አይብ ሳንድዊች",
                price: "1,000.00",
                image: "/images/Lucid_Origin_A_succulent_steak_and_cheese_sandwich_featuring_t_3.jpg",
                description: "የበሬ ቁርጥራጮች፣ ከሽንኩርት፣ ነጭ ሽንኩርት እና ቲማቲም ጋር የተጠበሰ፣ የቀለጠ አይብ ተሸፍኖ በተጠበሰ የወይራ ባጌት ውስጥ የሚቀርብ፣ ከፈረንሳይ ፍራይስ ጋር."
            }
        ]
    },
    {
        id: "breakfast",
        title: "ቁርስ",
        items: [
            {
                name: "ኮንቲኔንታል ቁርስ",
                price: "770.00",
                image: "/images/Continental Breakfast.jpg",
                description: "ምርጫ ከትኩስ ወቅታዊ ጭማቂ ወይም ወቅታዊ ትኩስ የተቆረጡ ፍራፍሬዎች፣ የዳቦ መጋገሪያ ምርጫ ክሮይሰንት፣ የዴንማርክ ኬክ፣ የተጠበሰ ዳቦ ከቅቤ፣ ማር እና የፍራፍሬ ጭማቂ ጋር የሚቀርብ፣ ትኩስ ቡና፣ ትኩስ ቸኮሌት ወይም ሻይ።"
            }
        ]
    },
    {
        id: "soup",
        title: "ሾርባ",
        items: [
            {
                name: "የገብስ ሾርባ",
                price: "460.00",
                image: "/images/Barly Soup.jpg",
                description: "ታዋቂ እና ሀብታም የስዊስ ሾርባ ከገብስ፣ አትክልቶች፣ የበሬ ቤከን እና በላዩ ላይ ቺቭስ።"
            },
            {
                name: "የዶሮ እና የበቆሎ ቻውደር",
                price: "490.00",
                image: "/images/Chicken & Corn Chowder.jpg",
                description: "የልብ የዶሮ ክሬም ሾርባ ከጣፋጭ የበቆሎ፣ ድንች እና አትክልቶች ጋር።"
            }
        ]
    }
];

export const menuData = {
    en: enMenu,
    fr: frMenu,
    ar: arMenu,
    zh: zhMenu,
    am: amMenu
};
