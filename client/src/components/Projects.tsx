import React from 'react';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Family Home",
      category: "Residential",
      location: "Constantia, Cape Town",
      year: "2024",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "A stunning 4-bedroom family home featuring modern architecture and sustainable building practices."
    },
    {
      id: 2,
      title: "Office Complex Renovation",
      category: "Commercial",
      location: "CBD, Cape Town",
      year: "2023",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete renovation of a 3-story office building with modern amenities and energy-efficient systems."
    },
    {
      id: 3,
      title: "Luxury Kitchen Renovation",
      category: "Renovation",
      location: "Camps Bay, Cape Town",
      year: "2024",
      image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "High-end kitchen renovation featuring custom cabinetry, premium appliances, and elegant finishes."
    },
    {
      id: 4,
      title: "Retail Store Fitout",
      category: "Commercial",
      location: "V&A Waterfront, Cape Town",
      year: "2023",
      image: "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Complete fitout of a flagship retail store with custom displays and modern lighting systems."
    },
    {
      id: 5,
      title: "Heritage Home Restoration",
      category: "Restoration",
      location: "Observatory, Cape Town",
      year: "2023",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Careful restoration of a Victorian-era home preserving historical features while adding modern conveniences."
    },
    {
      id: 6,
      title: "Apartment Complex",
      category: "Residential",
      location: "Green Point, Cape Town",
      year: "2022",
      image: "https://images.pexels.com/photos/1396118/pexels-photo-1396118.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "New construction of a 12-unit apartment complex with contemporary design and ocean views."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-4">Our Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across Cape Town. 
            Each project showcases our commitment to quality, innovation, and client satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Completed in {project.year}</span>
                  </div>
                </div>
                
                <button className="flex items-center text-navy-primary hover:text-navy-dark font-semibold transition-colors">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Want to see more of our work? Contact us to discuss your project and view our complete portfolio.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-navy-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;