import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Clock, Users, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Reservations = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', 
    '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.date) {
      newErrors.date = 'Date is required';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required';
    }

    if (!formData.guests) {
      newErrors.guests = 'Number of guests is required';
    } else if (parseInt(formData.guests) < 1 || parseInt(formData.guests) > 12) {
      newErrors.guests = 'Number of guests must be between 1 and 12';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Reservation Request Submitted!",
        description: "We'll contact you within 24 hours to confirm your reservation.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        specialRequests: ''
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-warm-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-playfair font-bold text-primary mb-4">
            Make a Reservation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us for an unforgettable dining experience. Reserve your table today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-primary">
                Reservation Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={errors.name ? 'border-destructive' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-destructive' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={errors.phone ? 'border-destructive' : ''}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      min={today}
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      className={errors.date ? 'border-destructive' : ''}
                    />
                    {errors.date && (
                      <p className="text-destructive text-sm mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="time">Time *</Label>
                    <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                      <SelectTrigger className={errors.time ? 'border-destructive' : ''}>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.time && (
                      <p className="text-destructive text-sm mt-1">{errors.time}</p>
                    )}
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <Label htmlFor="guests">Number of Guests *</Label>
                  <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                    <SelectTrigger className={errors.guests ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[...Array(12)].map((_, i) => (
                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                          {i + 1} {i + 1 === 1 ? 'Guest' : 'Guests'}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.guests && (
                    <p className="text-destructive text-sm mt-1">{errors.guests}</p>
                  )}
                </div>

                {/* Special Requests */}
                <div>
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any dietary restrictions, celebrations, or special requests..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="btn-hero w-full">
                  Submit Reservation
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Restaurant Info */}
          <div className="space-y-8">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  Hours & Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Dinner Service</h4>
                  <p className="text-muted-foreground">Monday - Thursday: 5:00 PM - 10:00 PM</p>
                  <p className="text-muted-foreground">Friday - Saturday: 5:00 PM - 11:00 PM</p>
                  <p className="text-muted-foreground">Sunday: 4:00 PM - 9:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Reservations</h4>
                  <p className="text-muted-foreground">
                    We recommend booking 3-7 days in advance, especially for weekends and holidays.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                  <Phone className="h-6 w-6 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <p className="text-muted-foreground">(555) 123-VISTA</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Email</h4>
                  <p className="text-muted-foreground">reservations@bellavista.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Location</h4>
                  <p className="text-muted-foreground">
                    12 Bazaar Lane<br />
                    Culinary Quarter, City 12345
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-primary flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Group Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Planning a special celebration or business dinner? We offer private dining 
                  options for groups of 8 or more.
                </p>
                <Button variant="outline" className="w-full">
                  Inquire About Private Dining
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;