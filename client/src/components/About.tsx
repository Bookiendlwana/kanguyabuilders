import React from 'react';
import { Shield, Users, Award, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-4">About Kanguya Builders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in Cape Town with over 14 years of experience, we are your trusted partner 
            for all construction needs. Our commitment to excellence and customer satisfaction 
            has made us a leading name in the construction industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Kanguya Builders team at work"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-navy-primary mb-6">Our Story</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to transform the construction landscape in Cape Town, 
              Kanguya Builders has grown from a small local contractor to a trusted name 
              in the industry. Our journey began with a simple commitment: to deliver 
              exceptional construction services that exceed our clients' expectations.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Over the years, we have successfully completed hundreds of projects, 
              ranging from residential homes to commercial buildings. Our team of 
              skilled professionals brings expertise, creativity, and dedication to 
              every project we undertake.
            </p>
            <div className="flex items-center text-navy-primary">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-semibold">Based in Cape Town, South Africa</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy-primary mb-3">Quality Assurance</h3>
            <p className="text-gray-600">
              We maintain the highest standards of quality in every project, 
              ensuring durable and reliable construction that stands the test of time.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy-primary mb-3">Expert Team</h3>
            <p className="text-gray-600">
              Our skilled professionals bring years of experience and expertise 
              to every project, ensuring exceptional results and customer satisfaction.
            </p>
          </div>
          
          <div className="text-center p-8 bg-white rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-navy-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-navy-primary mb-3">Proven Track Record</h3>
            <p className="text-gray-600">
              With 14+ years in the industry and hundreds of successful projects, 
              we have established ourselves as a trusted construction partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;