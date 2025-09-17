import React from 'react';
import { Home, Wrench, Paintbrush, Hammer, Building, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "New Construction",
      description: "Complete new building construction from foundation to finish, including residential and commercial projects."
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Home Renovations",
      description: "Transform your existing space with our comprehensive renovation services, from kitchens to full home makeovers."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Repairs",
      description: "Professional maintenance and repair services to keep your property in excellent condition year-round."
    },
    {
      icon: <Paintbrush className="w-8 h-8" />,
      title: "Painting & Finishing",
      description: "Interior and exterior painting services with premium materials and expert craftsmanship."
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Carpentry & Joinery",
      description: "Custom carpentry work including built-in furniture, doors, windows, and specialized woodwork."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Electrical & Plumbing",
      description: "Licensed electrical and plumbing services for new installations, repairs, and upgrades."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs. 
            From new construction to maintenance, our expert team delivers quality results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-gray-50 rounded-lg hover:bg-navy-primary hover:text-white transition-all duration-300 cursor-pointer"
            >
              <div className="text-navy-primary group-hover:text-white mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-primary group-hover:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-navy-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy-primary rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-navy-light mb-6 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in custom construction 
            solutions tailored to your specific needs. Contact us to discuss your project.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-navy-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;