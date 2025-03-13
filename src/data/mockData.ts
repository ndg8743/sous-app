import {
  Recipe,
  Ingredient,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RecipeIngredient,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  RecipeStep,
  MeasurementConversion
} from './models';

// Mock Recipes
export const recipes: Recipe[] = [
  {
    id: '1',
    name: 'Crusty Artisan Bread',
    description: 'A rustic artisan bread with a crispy crust and soft interior. Perfect for sandwiches or as a side with soup.',
    imageUrl: 'https://images.unsplash.com/photo-1585478259715-4aa543fe0085',
    prepTime: 30,
    cookTime: 45,
    servings: 8,
    difficulty: 'medium',
    tags: ['bread', 'artisan', 'baking'],
    ingredients: [
      { id: '1-1', name: 'Active sourdough starter', quantity: 50, unit: 'g' },
      { id: '1-2', name: 'Bread flour', quantity: 500, unit: 'g' },
      { id: '1-3', name: 'Water', quantity: 350, unit: 'ml' },
      { id: '1-4', name: 'Salt', quantity: 10, unit: 'g' }
    ],
    steps: [
      { id: '1-s1', order: 1, instruction: 'Mix the sourdough starter, flour, and water. Cover and let rest for 30 minutes.' },
      { id: '1-s2', order: 2, instruction: 'Add salt and knead the dough until smooth and elastic.' },
      { id: '1-s3', order: 3, instruction: 'Place in a lightly oiled bowl, cover, and let rise for 4-6 hours, or until doubled in size.', timer: 14400 },
      { id: '1-s4', order: 4, instruction: 'Shape the dough and place in a floured proofing basket. Cover and let proof for 2-3 hours.', timer: 7200 },
      { id: '1-s5', order: 5, instruction: 'Preheat the oven to 450°F (230°C) with a Dutch oven inside for 30 minutes.', timer: 1800 },
      { id: '1-s6', order: 6, instruction: 'Transfer the dough to the Dutch oven, score the top, cover and bake for 30 minutes.', timer: 1800 },
      { id: '1-s7', order: 7, instruction: 'Remove the lid and bake for an additional 15 minutes until golden brown.', timer: 900 },
      { id: '1-s8', order: 8, instruction: 'Let cool completely on a wire rack before slicing.' }
    ],
    notes: 'For best results, use a digital scale for precise measurements.'
  },
  {
    id: '2',
    name: 'Oatmeal Chocolate Chip Cookies',
    description: 'Chewy oatmeal cookies loaded with chocolate chips. Vegan-friendly and delicious.',
    imageUrl: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
    prepTime: 15,
    cookTime: 12,
    servings: 24,
    difficulty: 'easy',
    tags: ['dessert', 'cookies', 'chocolate', 'baking', 'vegan'],
    ingredients: [
      { id: '2-1', name: 'All-purpose flour', quantity: 280, unit: 'g' },
      { id: '2-2', name: 'Baking soda', quantity: 1, unit: 'tsp' },
      { id: '2-3', name: 'Salt', quantity: 1, unit: 'tsp' },
      { id: '2-4', name: 'Rolled oats', quantity: 225, unit: 'g' },
      { id: '2-5', name: 'Granulated sugar', quantity: 150, unit: 'g' },
      { id: '2-6', name: 'Brown sugar', quantity: 150, unit: 'g' },
      { id: '2-7', name: 'Vanilla extract', quantity: 1, unit: 'tbsp' },
      { id: '2-8', name: 'Applesauce', quantity: 120, unit: 'g' },
      { id: '2-9', name: 'Chocolate chips', quantity: 340, unit: 'g' }
    ],
    steps: [
      { id: '2-s1', order: 1, instruction: 'Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.' },
      { id: '2-s2', order: 2, instruction: 'In a bowl, combine flour, baking soda, salt, and oats.' },
      { id: '2-s3', order: 3, instruction: 'In a large bowl, mix sugars, applesauce, and vanilla until well combined.' },
      { id: '2-s4', order: 4, instruction: 'Gradually add the flour mixture to the wet ingredients and mix until combined.' },
      { id: '2-s5', order: 5, instruction: 'Stir in chocolate chips.' },
      { id: '2-s6', order: 6, instruction: 'Drop tablespoon-sized balls onto prepared baking sheets.' },
      { id: '2-s7', order: 7, instruction: 'Bake for 10-12 minutes or until edges are golden.', timer: 600 },
      { id: '2-s8', order: 8, instruction: 'Allow cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack.', timer: 300 }
    ]
  },
  {
    id: '3',
    name: 'Neapolitan Pizza with Vegan Toppings',
    description: 'Authentic Neapolitan-style pizza with a thin, crispy crust and flavorful vegan toppings.',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    prepTime: 25,
    cookTime: 15,
    servings: 4,
    difficulty: 'medium',
    tags: ['pizza', 'italian', 'vegan', 'dinner'],
    ingredients: [
      { id: '3-1', name: 'Bread flour', quantity: 500, unit: 'g' },
      { id: '3-2', name: 'Water', quantity: 325, unit: 'ml' },
      { id: '3-3', name: 'Salt', quantity: 10, unit: 'g' },
      { id: '3-4', name: 'Instant yeast', quantity: 5, unit: 'g' },
      { id: '3-5', name: 'Tomato sauce', quantity: 200, unit: 'g' },
      { id: '3-6', name: 'Vegan cheese', quantity: 200, unit: 'g' },
      { id: '3-7', name: 'Fresh basil', quantity: 10, unit: 'leaves' },
      { id: '3-8', name: 'Olive oil', quantity: 15, unit: 'ml' }
    ],
    steps: [
      { id: '3-s1', order: 1, instruction: 'Mix flour, water, salt, and yeast in a large bowl. Form a rough dough.' },
      { id: '3-s2', order: 2, instruction: 'Knead the dough for 5-7 minutes until smooth and elastic.' },
      { id: '3-s3', order: 3, instruction: 'Place in a lightly oiled bowl, cover, and let rise for 2 hours.', timer: 7200 },
      { id: '3-s4', order: 4, instruction: 'Divide the dough into 4 equal pieces and shape into balls.' },
      { id: '3-s5', order: 5, instruction: 'On a floured surface, stretch each ball into a thin circle.' },
      { id: '3-s6', order: 6, instruction: 'Preheat oven to highest setting (ideally 500°F/260°C) with a pizza stone if available.' },
      { id: '3-s7', order: 7, instruction: 'Spread tomato sauce on each pizza base, leaving a small border for the crust.' },
      { id: '3-s8', order: 8, instruction: 'Add vegan cheese and other toppings as desired.' },
      { id: '3-s9', order: 9, instruction: 'Bake for 8-10 minutes until crust is golden and cheese is melted.', timer: 480 },
      { id: '3-s10', order: 10, instruction: 'Garnish with fresh basil leaves and a drizzle of olive oil before serving.' }
    ],
    notes: 'For best results, use a pizza stone and preheat it thoroughly.'
  },
  {
    id: '4',
    name: 'Vegan Chocolate Cake',
    description: 'Rich, moist chocolate cake that happens to be vegan. Perfect for celebrations.',
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    prepTime: 20,
    cookTime: 35,
    servings: 12,
    difficulty: 'medium',
    tags: ['dessert', 'cake', 'chocolate', 'baking', 'vegan'],
    ingredients: [
      { id: '4-1', name: 'All-purpose flour', quantity: 300, unit: 'g' },
      { id: '4-2', name: 'Granulated sugar', quantity: 200, unit: 'g' },
      { id: '4-3', name: 'Cocoa powder', quantity: 60, unit: 'g' },
      { id: '4-4', name: 'Baking soda', quantity: 2, unit: 'tsp' },
      { id: '4-5', name: 'Salt', quantity: 1, unit: 'tsp' },
      { id: '4-6', name: 'Vegetable oil', quantity: 80, unit: 'ml' },
      { id: '4-7', name: 'Vanilla extract', quantity: 2, unit: 'tsp' },
      { id: '4-8', name: 'Vinegar', quantity: 2, unit: 'tbsp' },
      { id: '4-9', name: 'Water', quantity: 375, unit: 'ml' },
      { id: '4-10', name: 'Vegan chocolate frosting', quantity: 400, unit: 'g', notes: 'For frosting' }
    ],
    steps: [
      { id: '4-s1', order: 1, instruction: 'Preheat oven to 350°F (175°C). Grease and line two 8-inch round cake pans.' },
      { id: '4-s2', order: 2, instruction: 'In a large bowl, whisk together flour, sugar, cocoa powder, baking soda, and salt.' },
      { id: '4-s3', order: 3, instruction: 'Add oil, vanilla, vinegar, and water. Mix until well combined and smooth.' },
      { id: '4-s4', order: 4, instruction: 'Divide batter evenly between the prepared pans.' },
      { id: '4-s5', order: 5, instruction: 'Bake for 30-35 minutes, or until a toothpick inserted in the center comes out clean.', timer: 1800 },
      { id: '4-s6', order: 6, instruction: 'Allow cakes to cool in pans for 10 minutes, then transfer to wire racks to cool completely.', timer: 600 },
      { id: '4-s7', order: 7, instruction: 'Once cooled, frost the top of one cake layer.' },
      { id: '4-s8', order: 8, instruction: 'Place the second layer on top and frost the entire cake with remaining frosting.' }
    ]
  },
  {
    id: '5',
    name: 'Apple Pie with Oat Crumble',
    description: 'Classic apple pie with a delicious oat crumble topping instead of a traditional top crust.',
    imageUrl: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9',
    prepTime: 30,
    cookTime: 50,
    servings: 8,
    difficulty: 'medium',
    tags: ['dessert', 'pie', 'apple', 'baking'],
    ingredients: [
      { id: '5-1', name: 'All-purpose flour', quantity: 250, unit: 'g', notes: 'For crust' },
      { id: '5-2', name: 'Salt', quantity: 1, unit: 'tsp', notes: 'For crust' },
      { id: '5-3', name: 'Vegetable shortening', quantity: 115, unit: 'g', notes: 'For crust' },
      { id: '5-4', name: 'Ice water', quantity: 80, unit: 'ml', notes: 'For crust' },
      { id: '5-5', name: 'Apples', quantity: 1, unit: 'kg', notes: 'Peeled, cored, and sliced' },
      { id: '5-6', name: 'Granulated sugar', quantity: 150, unit: 'g', notes: 'For filling' },
      { id: '5-7', name: 'Cinnamon', quantity: 2, unit: 'tsp', notes: 'For filling' },
      { id: '5-8', name: 'Nutmeg', quantity: 0.5, unit: 'tsp', notes: 'For filling' },
      { id: '5-9', name: 'Lemon juice', quantity: 15, unit: 'ml', notes: 'For filling' },
      { id: '5-10', name: 'Rolled oats', quantity: 100, unit: 'g', notes: 'For crumble' },
      { id: '5-11', name: 'Brown sugar', quantity: 100, unit: 'g', notes: 'For crumble' },
      { id: '5-12', name: 'All-purpose flour', quantity: 50, unit: 'g', notes: 'For crumble' },
      { id: '5-13', name: 'Cinnamon', quantity: 1, unit: 'tsp', notes: 'For crumble' },
      { id: '5-14', name: 'Vegetable shortening', quantity: 80, unit: 'g', notes: 'For crumble' }
    ],
    steps: [
      { id: '5-s1', order: 1, instruction: 'For the crust: Mix flour and salt. Cut in shortening until mixture resembles coarse crumbs.' },
      { id: '5-s2', order: 2, instruction: 'Gradually add ice water, tossing with a fork until dough holds together.' },
      { id: '5-s3', order: 3, instruction: 'Shape into a disk, wrap, and refrigerate for 30 minutes.', timer: 1800 },
      { id: '5-s4', order: 4, instruction: 'Preheat oven to 375°F (190°C).' },
      { id: '5-s5', order: 5, instruction: 'Roll out dough and place in a 9-inch pie plate. Trim and flute edges.' },
      { id: '5-s6', order: 6, instruction: 'For the filling: Toss apples with sugar, cinnamon, nutmeg, and lemon juice.' },
      { id: '5-s7', order: 7, instruction: 'Pour filling into crust.' },
      { id: '5-s8', order: 8, instruction: 'For the crumble: Mix oats, brown sugar, flour, and cinnamon. Cut in shortening until crumbly.' },
      { id: '5-s9', order: 9, instruction: 'Sprinkle crumble topping over the apple filling.' },
      { id: '5-s10', order: 10, instruction: 'Bake for 45-50 minutes until filling is bubbly and topping is golden brown.', timer: 2700 },
      { id: '5-s11', order: 11, instruction: 'Cool on a wire rack for at least 2 hours before serving.', timer: 7200 }
    ],
    notes: 'Serve warm with a scoop of vegan ice cream for an extra special treat.'
  },
  {
    id: '6',
    name: 'Pasta Primavera',
    description: 'Light and flavorful pasta dish loaded with fresh spring vegetables.',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: 'easy',
    tags: ['pasta', 'italian', 'dinner', 'vegan'],
    ingredients: [
      { id: '6-1', name: 'Pasta', quantity: 340, unit: 'g' },
      { id: '6-2', name: 'Olive oil', quantity: 30, unit: 'ml' },
      { id: '6-3', name: 'Garlic', quantity: 3, unit: 'cloves', notes: 'Minced' },
      { id: '6-4', name: 'Bell peppers', quantity: 2, unit: 'medium', notes: 'Sliced' },
      { id: '6-5', name: 'Zucchini', quantity: 1, unit: 'medium', notes: 'Sliced' },
      { id: '6-6', name: 'Cherry tomatoes', quantity: 200, unit: 'g', notes: 'Halved' },
      { id: '6-7', name: 'Broccoli florets', quantity: 200, unit: 'g' },
      { id: '6-8', name: 'Fresh basil', quantity: 10, unit: 'leaves', notes: 'Chopped' },
      { id: '6-9', name: 'Salt', quantity: 1, unit: 'tsp' },
      { id: '6-10', name: 'Black pepper', quantity: 0.5, unit: 'tsp' },
      { id: '6-11', name: 'Red pepper flakes', quantity: 0.25, unit: 'tsp', notes: 'Optional' }
    ],
    steps: [
      { id: '6-s1', order: 1, instruction: 'Bring a large pot of salted water to a boil. Cook pasta according to package directions.' },
      { id: '6-s2', order: 2, instruction: 'Meanwhile, heat olive oil in a large skillet over medium heat.' },
      { id: '6-s3', order: 3, instruction: 'Add garlic and cook for 30 seconds until fragrant.' },
      { id: '6-s4', order: 4, instruction: 'Add bell peppers, zucchini, and broccoli. Cook for 5-7 minutes until vegetables begin to soften.', timer: 300 },
      { id: '6-s5', order: 5, instruction: 'Add cherry tomatoes and cook for another 2-3 minutes.', timer: 120 },
      { id: '6-s6', order: 6, instruction: 'Season with salt, pepper, and red pepper flakes if using.' },
      { id: '6-s7', order: 7, instruction: 'Drain pasta, reserving 1/2 cup of pasta water.' },
      { id: '6-s8', order: 8, instruction: 'Add pasta to the skillet with vegetables. Toss to combine, adding pasta water as needed to create a light sauce.' },
      { id: '6-s9', order: 9, instruction: 'Stir in fresh basil and serve immediately.' }
    ],
    notes: 'Feel free to use any seasonal vegetables you have on hand.'
  }
];

// Mock Ingredients
export const ingredients: Ingredient[] = [
  {
    id: '1',
    name: 'All-purpose flour',
    description: 'A versatile wheat flour with a moderate protein content (10-12%), suitable for most baking needs.',
    imageUrl: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b',
    category: 'Flour',
    substitutes: ['Bread flour', 'Cake flour + cornstarch'],
    nutritionFacts: {
      servingSize: '30g',
      calories: 110,
      fat: 0,
      carbs: 23,
      protein: 3,
      sodium: 0,
      fiber: 1
    },
    density: 0.53,
    tips: [
      'Store in an airtight container in a cool, dry place',
      'Sift before measuring for more accurate results',
      'Can be used for cookies, cakes, quick breads, and more'
    ]
  },
  {
    id: '2',
    name: 'Bread flour',
    description: 'A high-protein flour (12-14%) that creates more gluten, ideal for bread, pizza dough, and other yeast-risen baked goods.',
    imageUrl: 'https://images.unsplash.com/photo-1627485937226-b12db75172f7',
    category: 'Flour',
    substitutes: ['All-purpose flour'],
    nutritionFacts: {
      servingSize: '30g',
      calories: 110,
      fat: 0.5,
      carbs: 22,
      protein: 4,
      sodium: 0,
      fiber: 1
    },
    density: 0.55,
    tips: [
      'Best for chewy, crusty breads',
      'Creates stronger gluten strands than all-purpose flour',
      'Can be made by adding vital wheat gluten to all-purpose flour'
    ]
  },
  {
    id: '3',
    name: 'Whole wheat flour',
    description: 'Made from the entire wheat kernel, this flour provides more fiber and nutrients than refined white flours.',
    imageUrl: 'https://images.unsplash.com/photo-1622711893950-b9775e67ed04',
    category: 'Flour',
    substitutes: ['White whole wheat flour', 'All-purpose flour + wheat bran'],
    nutritionFacts: {
      servingSize: '30g',
      calories: 100,
      fat: 0.5,
      carbs: 21,
      protein: 4,
      sodium: 0,
      fiber: 3
    },
    density: 0.54,
    tips: [
      'Absorbs more liquid than all-purpose flour',
      'Creates denser baked goods',
      'Store in refrigerator or freezer to prevent rancidity',
      'For lighter baked goods, substitute up to half of the whole wheat flour with all-purpose flour'
    ]
  },
  {
    id: '4',
    name: 'Granulated sugar',
    description: 'Refined white sugar made from sugarcane or sugar beets, used for sweetening and helping to create structure in baked goods.',
    imageUrl: 'https://images.unsplash.com/photo-1610137313767-28096788cbaa',
    category: 'Sweeteners',
    substitutes: ['Brown sugar', 'Coconut sugar', 'Honey'],
    nutritionFacts: {
      servingSize: '4g (1 tsp)',
      calories: 16,
      fat: 0,
      carbs: 4,
      protein: 0,
      sodium: 0,
      sugar: 4
    },
    density: 0.85,
    tips: [
      'Helps with browning and moisture retention',
      'Creaming with butter creates air pockets for leavening',
      'Store in an airtight container to prevent clumping'
    ]
  },
  {
    id: '5',
    name: 'Brown sugar',
    description: 'Granulated sugar containing molasses, which provides moisture and a caramel flavor to baked goods.',
    imageUrl: 'https://images.unsplash.com/photo-1626263180802-293c75d3c6e3',
    category: 'Sweeteners',
    substitutes: ['White sugar + molasses', 'Coconut sugar'],
    nutritionFacts: {
      servingSize: '4g (1 tsp)',
      calories: 15,
      fat: 0,
      carbs: 4,
      protein: 0,
      sodium: 0,
      sugar: 4
    },
    density: 0.81,
    tips: [
      'Keep in an airtight container to prevent hardening',
      'Place a piece of bread in the container to maintain softness',
      'Can be softened in the microwave if hardened'
    ]
  },
  {
    id: '6',
    name: 'Baking powder',
    description: 'A leavening agent containing baking soda, an acid (usually cream of tartar), and a moisture absorber like cornstarch.',
    imageUrl: 'https://images.unsplash.com/photo-1622711893950-b9775e67ed04',
    category: 'Leavening Agents',
    substitutes: ['Baking soda + cream of tartar'],
    density: 0.9,
    tips: [
      'Double-acting: releases gas when wet and again when heated',
      'Replace every 6-12 months for best results',
      'Test freshness by adding to hot water - should bubble vigorously'
    ]
  },
  {
    id: '7',
    name: 'Baking soda',
    description: 'Sodium bicarbonate, a leavening agent that requires an acid to activate, producing carbon dioxide gas.',
    imageUrl: 'https://images.unsplash.com/photo-1622711893950-b9775e67ed04',
    category: 'Leavening Agents',
    substitutes: ['Baking powder (3x amount)'],
    density: 0.85,
    tips: [
      'Needs acid (like buttermilk, yogurt, or vinegar) to activate',
      'Too much can create a metallic taste',
      'Store in a cool, dry place and replace every 6 months',
      'Also useful as a cleaner and odor absorber'
    ]
  },
  {
    id: '8',
    name: 'Salt',
    description: 'Enhances flavor, strengthens gluten, and controls yeast fermentation in bread baking.',
    imageUrl: 'https://images.unsplash.com/photo-1518110925495-5fe2fda0442c',
    category: 'Seasonings',
    substitutes: ['Kosher salt (1.5x amount)', 'Sea salt'],
    density: 1.2,
    tips: [
      'Table salt has smaller crystals than kosher or sea salt',
      'Never omit salt in bread recipes as it is crucial for proper fermentation',
      'Table salt contains iodine which can impart a slight flavor'
    ]
  },
  {
    id: '11',
    name: 'Rolled oats',
    description: 'Whole oat groats that have been steamed and flattened with large rollers. Great for baking and breakfast.',
    imageUrl: 'https://images.unsplash.com/photo-1614961233913-a5113a4a34ed',
    category: 'Grains',
    substitutes: ['Quick oats', 'Steel-cut oats (with longer cooking)'],
    nutritionFacts: {
      servingSize: '40g',
      calories: 150,
      fat: 3,
      carbs: 27,
      protein: 5,
      sodium: 0,
      fiber: 4
    },
    density: 0.42,
    tips: [
      'Can be used in cookies, granola, and as a topping for fruit crisps',
      'Adds texture and nutrition to baked goods',
      'Store in an airtight container in a cool, dry place',
      'Can be ground into flour for gluten-free baking'
    ]
  },
  {
    id: '12',
    name: 'Chocolate chips',
    description: 'Small drops of chocolate used in cookies, muffins, and other baked goods.',
    imageUrl: 'https://images.unsplash.com/photo-1549007953-2f2dc0b24019',
    category: 'Baking Additions',
    substitutes: ['Chopped chocolate bars', 'Cacao nibs'],
    nutritionFacts: {
      servingSize: '15g',
      calories: 80,
      fat: 4.5,
      carbs: 9,
      protein: 1,
      sodium: 5,
      sugar: 8
    },
    density: 0.64,
    tips: [
      'Look for dairy-free varieties for vegan baking',
      'Different percentages of cacao offer different flavor profiles',
      'Can be melted for dipping or drizzling',
      'Store in a cool, dry place to prevent melting or blooming'
    ]
  }
];

// Measurement conversions
export const measurementConversions: MeasurementConversion[] = [
  { fromUnit: 'cup', toUnit: 'ml', conversionFactor: 236.6 },
  { fromUnit: 'tbsp', toUnit: 'ml', conversionFactor: 14.8 },
  { fromUnit: 'tsp', toUnit: 'ml', conversionFactor: 4.9 },
  { fromUnit: 'oz', toUnit: 'g', conversionFactor: 28.35 },
  { fromUnit: 'lb', toUnit: 'g', conversionFactor: 453.6 },
  { fromUnit: 'inch', toUnit: 'cm', conversionFactor: 2.54 },
  { fromUnit: 'F', toUnit: 'C', conversionFactor: 0.556 }
];
