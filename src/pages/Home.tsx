import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChefHat, Award, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-restaurant.jpg';
import pastaImage from '@/assets/pasta-featured.jpg';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Rodriguez",
      text: "Absolutely divine! The pasta was perfection and the ambiance was magical. Bella Vista exceeded all expectations.",
      rating: 5
    },
    {
      name: "James Wilson",
      text: "An authentic Italian experience in the heart of the city. The chef's attention to detail is remarkable.",
      rating: 5
    },
    {
      name: "Sophie Chen",
      text: "Perfect for special occasions. The service was impeccable and every dish was a work of art.",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-white">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 fade-in">
            Bella Vista
          </h1>
          <p className="text-xl md:text-2xl mb-8 fade-in">
            Authentic Italian Cuisine in an Elegant Setting
          </p>
          <div className="space-x-4 fade-in">
            <Link to="/menu">
              <Button className="btn-hero">
                View Menu
              </Button>
            </Link>
            <Link to="/reservations">
              <Button className="btn-gold">
                Make Reservation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Why Choose Bella Vista
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of traditional Italian flavors and modern culinary artistry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <ChefHat className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold mb-4">Expert Chefs</h3>
                <p className="text-muted-foreground">
                  Our master chefs bring decades of experience from the finest kitchens of Italy
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold mb-4">Award Winning</h3>
                <p className="text-muted-foreground">
                  Recognized for excellence in cuisine, service, and authentic Italian dining experience
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <Star className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-playfair font-semibold mb-4">5-Star Service</h3>
                <p className="text-muted-foreground">
                  Impeccable service and attention to detail make every visit truly memorable
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Dish */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Signature Pasta
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our signature handmade pasta with locally sourced ingredients, prepared with 
                traditional techniques passed down through generations. Each plate is a testament 
                to our commitment to authentic Italian cuisine.
              </p>
              <div className="space-y-2 mb-8">
                <p className="flex items-center text-muted-foreground">
                  <Star className="h-5 w-5 text-gold mr-2" />
                  Fresh pasta made daily
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Star className="h-5 w-5 text-gold mr-2" />
                  Organic, locally sourced ingredients
                </p>
                <p className="flex items-center text-muted-foreground">
                  <Star className="h-5 w-5 text-gold mr-2" />
                  Traditional Italian recipes
                </p>
              </div>
              <Link to="/menu">
                <Button className="btn-hero">
                  Explore Full Menu
                </Button>
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={pastaImage} 
                alt="Signature pasta dish" 
                className="w-full rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-16">
            What Our Guests Say
          </h2>
          
          <div className="relative">
            <Card className="card-elegant">
              <CardContent className="pt-8 pb-8">
                <Quote className="h-12 w-12 text-gold mx-auto mb-6" />
                <p className="text-xl text-muted-foreground mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="font-semibold text-primary">
                  {testimonials[currentTestimonial].name}
                </p>
              </CardContent>
            </Card>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-burgundy to-burgundy-light text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready for an Unforgettable Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Reserve your table today and discover why Bella Vista is the premier destination for Italian cuisine
          </p>
          <Link to="/reservations">
            <Button className="btn-gold text-lg px-8 py-4">
              Make a Reservation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;