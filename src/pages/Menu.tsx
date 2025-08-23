import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Zap } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Antipasti' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Dolci' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    starters: [
      {
        name: 'Bruschetta Bella Vista',
        description: 'Toasted bread with fresh tomatoes, basil, and garlic',
        price: '$12',
        vegetarian: true
      },
      {
        name: 'Antipasto Misto',
        description: 'Selection of cured meats, cheeses, and marinated vegetables',
        price: '$18',
        popular: true
      },
      {
        name: 'Burrata Caprese',
        description: 'Creamy burrata with heirloom tomatoes and basil oil',
        price: '$16',
        vegetarian: true
      },
      {
        name: 'Carpaccio di Manzo',
        description: 'Thinly sliced beef with arugula, capers, and parmesan',
        price: '$20'
      }
    ],
    mains: [
      {
        name: 'Osso Buco alla Milanese',
        description: 'Braised veal shanks with saffron risotto',
        price: '$38',
        popular: true
      },
      {
        name: 'Pasta Bella Vista',
        description: 'House-made tagliatelle with truffle cream sauce',
        price: '$28',
        vegetarian: true
      },
      {
        name: 'Branzino in Crosta',
        description: 'Mediterranean sea bass in herb crust with lemon butter',
        price: '$34'
      },
      {
        name: 'Pollo Parmigiana',
        description: 'Breaded chicken breast with mozzarella and tomato sauce',
        price: '$26'
      },
      {
        name: 'Risotto ai Porcini',
        description: 'Creamy arborio rice with wild mushrooms and truffle oil',
        price: '$24',
        vegetarian: true
      }
    ],
    desserts: [
      {
        name: 'Tiramisu della Casa',
        description: 'Classic tiramisu with espresso-soaked ladyfingers',
        price: '$12',
        popular: true
      },
      {
        name: 'Panna Cotta ai Frutti di Bosco',
        description: 'Vanilla panna cotta with mixed berry compote',
        price: '$10',
        vegetarian: true
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Crispy shells filled with sweet ricotta and chocolate chips',
        price: '$9',
        vegetarian: true
      },
      {
        name: 'Gelato Artigianale',
        description: 'House-made gelato - ask for today\'s flavors',
        price: '$8',
        vegetarian: true
      }
    ],
    beverages: [
      {
        name: 'Italian Wine Selection',
        description: 'Curated selection from renowned Italian vineyards',
        price: '$12-45',
        popular: true
      },
      {
        name: 'Espresso',
        description: 'Traditional Italian espresso',
        price: '$4'
      },
      {
        name: 'Cappuccino',
        description: 'Rich espresso with steamed milk and foam',
        price: '$5'
      },
      {
        name: 'Limonata',
        description: 'Fresh lemon soda with mint',
        price: '$6',
        vegetarian: true
      },
      {
        name: 'Aperol Spritz',
        description: 'Classic Italian aperitif with prosecco',
        price: '$12'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-warm-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-primary mb-4">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic Italian flavors crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-elegant'
                  : 'bg-card text-foreground hover:bg-primary/10 hover:shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <Card key={index} className="card-elegant hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-playfair text-primary">
                    {item.name}
                  </CardTitle>
                  <span className="text-2xl font-bold text-gold">
                    {item.price}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {item.description}
                </p>
                <div className="flex gap-2">
                  {item.vegetarian && (
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <Leaf className="h-3 w-3 mr-1" />
                      Vegetarian
                    </Badge>
                  )}
                  {item.popular && (
                    <Badge variant="secondary" className="bg-gold/20 text-gold-800">
                      <Zap className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground">
            * Prices subject to change. Please inform us of any dietary restrictions or allergies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Menu;