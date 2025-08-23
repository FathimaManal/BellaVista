import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-playfair font-bold mb-4">Bella Vista</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Experience authentic Italian cuisine in an elegant atmosphere. 
              Where tradition meets innovation, and every meal is a celebration.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-primary-foreground/80">
                <MapPin className="h-5 w-5 mr-3" />
                <span>123 Italian Way, Culinary District, City 12345</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Phone className="h-5 w-5 mr-3" />
                <span>(555) 123-VISTA</span>
              </div>
              <div className="flex items-center text-primary-foreground/80">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@bellavista.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4">Hours</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5" />
                <div>
                  <p><strong>Mon-Thu:</strong> 5:00 PM - 10:00 PM</p>
                  <p><strong>Fri-Sat:</strong> 5:00 PM - 11:00 PM</p>
                  <p><strong>Sunday:</strong> 4:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-playfair font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/menu" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Our Menu
              </a>
              <a href="/reservations" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Reservations
              </a>
              <a href="/about" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-primary-foreground/80 hover:text-gold transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Bella Vista Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;