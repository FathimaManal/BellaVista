import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Zap } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('starters');

  const categories = [
    { id: 'starters', name: 'Appetizers' },
    { id: 'mains', name: 'Main Course' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const menuItems = {
    starters: [
      {
        name: 'Samosa Chaat',
        description: 'Crispy samosas topped with yogurt, chutneys, and sev',
        price: '₹180',
        vegetarian: true
      },
      {
        name: 'Tandoori Chicken Wings',
        description: 'Spiced chicken wings marinated in yogurt and tandoori masala',
        price: '₹320',
        popular: true
      },
      {
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese cubes with bell peppers and onions',
        price: '₹280',
        vegetarian: true
      },
      {
        name: 'Seekh Kebab',
        description: 'Spiced minced lamb skewers grilled in tandoor',
        price: '₹380'
      }
    ],
    mains: [
      {
        name: 'Butter Chicken',
        description: 'Tender chicken in creamy tomato and cashew gravy',
        price: '₹420',
        popular: true
      },
      {
        name: 'Dal Makhani',
        description: 'Slow-cooked black lentils with butter and cream',
        price: '₹280',
        vegetarian: true
      },
      {
        name: 'Fish Curry',
        description: 'Fresh fish in coconut curry with aromatic spices',
        price: '₹480'
      },
      {
        name: 'Chicken Biryani',
        description: 'Fragrant basmati rice layered with spiced chicken',
        price: '₹380'
      },
      {
        name: 'Paneer Makhani',
        description: 'Cottage cheese in rich tomato and cashew gravy',
        price: '₹320',
        vegetarian: true
      }
    ],
    desserts: [
      {
        name: 'Gulab Jamun',
        description: 'Soft milk dumplings soaked in cardamom sugar syrup',
        price: '₹120',
        popular: true
      },
      {
        name: 'Kulfi Falooda',
        description: 'Traditional ice cream with vermicelli and rose syrup',
        price: '₹150',
        vegetarian: true
      },
      {
        name: 'Ras Malai',
        description: 'Cottage cheese dumplings in sweetened milk with nuts',
        price: '₹140',
        vegetarian: true
      },
      {
        name: 'Kheer',
        description: 'Creamy rice pudding with cardamom and dry fruits',
        price: '₹110',
        vegetarian: true
      }
    ],
    beverages: [
      {
        name: 'Masala Chai',
        description: 'Traditional spiced tea with cardamom, ginger, and cloves',
        price: '₹60',
        popular: true
      },
      {
        name: 'Fresh Lime Soda',
        description: 'Refreshing lime juice with soda and black salt',
        price: '₹80',
        vegetarian: true
      },
      {
        name: 'Mango Lassi',
        description: 'Creamy yogurt drink blended with fresh mango',
        price: '₹120',
        vegetarian: true
      },
      {
        name: 'Thandai',
        description: 'Cooling drink with almonds, fennel, and rose petals',
        price: '₹100',
        vegetarian: true
      },
      {
        name: 'Filter Coffee',
        description: 'South Indian style coffee with frothy milk',
        price: '₹70'
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
            Discover authentic Indian flavors crafted with traditional spices and recipes
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