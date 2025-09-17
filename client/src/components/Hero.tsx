import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-navy-primary via-navy-secondary to-navy-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Dreams,
              <span className="text-navy-light"> Creating Futures</span>
            </h1>
            <p className="text-xl mb-8 text-navy-light leading-relaxed">
              With over 14 years of excellence in construction, Kanguya Builders delivers 
              professional construction services across Cape Town. From new builds to renovations, 
              we bring your vision to life with quality craftsmanship and reliable service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-white text-navy-primary hover:bg-gray-100 font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy-primary"
                onClick={() => scrollToSection('projects')}
              >
                View Our Work
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-navy-light mr-2" />
                  <span className="text-3xl font-bold">14+</span>
                </div>
                <p className="text-navy-light">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-6 h-6 text-navy-light mr-2" />
                  <span className="text-3xl font-bold">500+</span>
                </div>
                <p className="text-navy-light">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6 text-navy-light mr-2" />
                  <span className="text-3xl font-bold">100%</span>
                </div>
                <p className="text-navy-light">Quality Assured</p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Professional construction work by Kanguya Builders"
                className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-navy-primary font-semibold mb-1">Latest Project</h3>
                <p className="text-gray-600 text-sm">Modern residential construction in Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;