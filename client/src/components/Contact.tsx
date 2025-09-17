import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your construction project? Contact us today for a free consultation 
            and detailed quote. We're here to bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-navy-primary mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">Phone</h4>
                  <p className="text-gray-600">+27 21 123 4567</p>
                  <p className="text-gray-600">+27 82 456 7890 (Mobile)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">Email</h4>
                  <p className="text-gray-600">info@kanguyabuilders.co.za</p>
                  <p className="text-gray-600">quotes@kanguyabuilders.co.za</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">Address</h4>
                  <p className="text-gray-600">123 Construction Avenue</p>
                  <p className="text-gray-600">Woodstock, Cape Town, 7925</p>
                  <p className="text-gray-600">South Africa</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-navy-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-navy-primary mb-1">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 2:00 PM</p>
                  <p className="text-gray-600">Sunday: Emergency calls only</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-navy-primary rounded-lg text-white">
              <h4 className="font-semibold mb-2">Emergency Services</h4>
              <p className="text-navy-light mb-2">
                We offer 24/7 emergency construction services for urgent repairs and situations.
              </p>
              <p className="font-semibold">Emergency Hotline: +27 82 999 8888</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-navy-primary mb-6">Request a Quote</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+27 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy-primary focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="new-construction">New Construction</option>
                    <option value="renovation">Home Renovation</option>
                    <option value="maintenance">Maintenance & Repairs</option>
                    <option value="painting">Painting & Finishing</option>
                    <option value="carpentry">Carpentry & Joinery</option>
                    <option value="electrical-plumbing">Electrical & Plumbing</option>
                    <option value="other">Other (please specify in message)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project, timeline, and any specific requirements..."
                    rows={5}
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-navy-primary hover:bg-navy-dark"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Quote Request
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>

              <p className="text-sm text-gray-500 mt-4">
                * Required fields. We'll respond to your quote request within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;