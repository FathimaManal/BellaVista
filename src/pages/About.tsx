import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Award, Heart, Users } from 'lucide-react';
import chefImage from '@/assets/chef-portrait.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-burgundy to-burgundy-light text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            A journey of passion, tradition, and the authentic flavors of Italy
          </p>
        </div>
      </section>

      {/* Restaurant Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
                Bella Vista's Beginning
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded in 1985 by the Rossi family, Bella Vista began as a dream to bring 
                  the authentic flavors of their hometown in Tuscany to our city. What started 
                  as a small family restaurant has grown into a beloved culinary destination.
                </p>
                <p>
                  Our commitment to traditional Italian cuisine, combined with the finest 
                  locally-sourced ingredients, has made Bella Vista a cornerstone of the 
                  community for nearly four decades.
                </p>
                <p>
                  Every dish tells a story of heritage, passion, and the time-honored recipes 
                  passed down through generations of the Rossi family.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-elegant text-center">
                  <CardContent className="pt-6">
                    <Award className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-playfair font-semibold text-primary">Award Winning</h3>
                    <p className="text-sm text-muted-foreground">Best Italian Restaurant 2023</p>
                  </CardContent>
                </Card>
                <Card className="card-elegant text-center">
                  <CardContent className="pt-6">
                    <Users className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-playfair font-semibold text-primary">Family Owned</h3>
                    <p className="text-sm text-muted-foreground">Three generations of excellence</p>
                  </CardContent>
                </Card>
                <Card className="card-elegant text-center">
                  <CardContent className="pt-6">
                    <Heart className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-playfair font-semibold text-primary">Made with Love</h3>
                    <p className="text-sm text-muted-foreground">Every dish crafted with passion</p>
                  </CardContent>
                </Card>
                <Card className="card-elegant text-center">
                  <CardContent className="pt-6">
                    <MapPin className="h-12 w-12 text-gold mx-auto mb-4" />
                    <h3 className="font-playfair font-semibold text-primary">Local Roots</h3>
                    <p className="text-sm text-muted-foreground">Serving the community since 1985</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Meet Our Executive Chef
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The culinary genius behind Bella Vista's exceptional cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img 
                src={chefImage} 
                alt="Chef Marco Rossi" 
                className="w-80 h-96 object-cover rounded-2xl shadow-elegant mx-auto lg:mx-0"
              />
            </div>
            <div>
              <h3 className="text-3xl font-playfair font-bold text-primary mb-4">
                Chef Marco Rossi
              </h3>
              <p className="text-xl text-gold mb-6">Executive Chef & Owner</p>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Chef Marco Rossi, grandson of Bella Vista's founder, brings over 20 years 
                  of culinary expertise to every dish. Trained in the finest kitchens of 
                  Milan and Rome, he returned to lead the family business with a vision 
                  of honoring tradition while embracing innovation.
                </p>
                <p>
                  Under his leadership, Bella Vista has earned numerous accolades, including 
                  "Best Italian Restaurant" for three consecutive years. Chef Marco's 
                  philosophy centers on using the freshest local ingredients to create 
                  dishes that transport guests straight to the heart of Italy.
                </p>
                <p>
                  When he's not in the kitchen, Chef Marco travels to Italy twice a year 
                  to discover new recipes and maintain relationships with local producers 
                  who supply our authentic Italian ingredients.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Achievements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• James Beard Award Nominee</li>
                    <li>• Culinary Institute of America Graduate</li>
                    <li>• Featured in Culinary Weekly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Specialties</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hand-made Pasta</li>
                    <li>• Osso Buco Milanese</li>
                    <li>• Truffle Risotto</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Bella Vista
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-burgundy to-burgundy-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                  Authenticity
                </h3>
                <p className="text-muted-foreground">
                  We stay true to traditional Italian recipes and cooking methods, 
                  ensuring every dish reflects the authentic flavors of Italy.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                  Excellence
                </h3>
                <p className="text-muted-foreground">
                  From ingredient selection to service delivery, we maintain the 
                  highest standards in every aspect of the dining experience.
                </p>
              </CardContent>
            </Card>

            <Card className="card-elegant text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-gradient-to-r from-burgundy to-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                  Community
                </h3>
                <p className="text-muted-foreground">
                  We believe great food brings people together and are proud to 
                  be a gathering place for our community's celebrations and connections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-primary mb-6">
            Visit Us
          </h2>
          <Card className="card-elegant">
            <CardContent className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                    Location
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center justify-center md:justify-start">
                      <MapPin className="h-5 w-5 mr-2 text-gold" />
                      123 Italian Way
                    </p>
                    <p className="text-center md:text-left">Culinary District, City 12345</p>
                    <p className="text-center md:text-left">
                      Located in the heart of the historic culinary district, 
                      just steps from downtown's main attractions.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-semibold text-primary mb-4">
                    Parking & Transit
                  </h3>
                  <div className="space-y-2 text-muted-foreground text-center md:text-left">
                    <p>• Complimentary valet parking available</p>
                    <p>• Street parking on Italian Way</p>
                    <p>• Metro Station: Culinary District (2 blocks)</p>
                    <p>• Bus routes 15, 22, 44 stop nearby</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;