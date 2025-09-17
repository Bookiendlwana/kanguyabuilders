import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Constantia, Cape Town",
      rating: 5,
      date: "March 2024",
      review: "Kanguya Builders transformed our home beyond our expectations. Their attention to detail and professional approach made the entire renovation process smooth and stress-free. Highly recommended!",
      project: "Kitchen & Bathroom Renovation"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Green Point, Cape Town",
      rating: 5,
      date: "February 2024",
      review: "Outstanding work on our new office space. The team was punctual, professional, and delivered exactly what was promised. The quality of workmanship is exceptional.",
      project: "Office Fitout"
    },
    {
      id: 3,
      name: "Lisa van der Merwe",
      location: "Camps Bay, Cape Town",
      rating: 5,
      date: "January 2024",
      review: "From start to finish, Kanguya Builders exceeded our expectations. They completed our home extension on time and within budget. The craftsmanship is top-notch.",
      project: "Home Extension"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Observatory, Cape Town",
      rating: 5,
      date: "December 2023",
      review: "Excellent service and quality work. The team was respectful of our property and cleaned up thoroughly each day. We're thrilled with our renovated space.",
      project: "Full Home Renovation"
    },
    {
      id: 5,
      name: "Amanda Roberts",
      location: "Claremont, Cape Town",
      rating: 5,
      date: "November 2023",
      review: "Professional, reliable, and skilled. Kanguya Builders handled our commercial project with expertise and delivered outstanding results. Will definitely use them again.",
      project: "Retail Store Construction"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Wynberg, Cape Town",
      rating: 5,
      date: "October 2023",
      review: "The best construction company we've worked with. Their communication was excellent throughout the project, and the final result is beautiful. Highly professional team.",
      project: "Bathroom Renovation"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-primary mb-4">Client Reviews</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with Kanguya Builders.
          </p>
        </div>

        {/* Overall Rating Summary */}
        <div className="bg-navy-primary rounded-lg p-8 text-white text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="flex mr-4">
              {renderStars(5)}
            </div>
            <span className="text-3xl font-bold">5.0</span>
          </div>
          <p className="text-navy-light text-lg">Based on 50+ client reviews</p>
          <p className="text-navy-light mt-2">100% of clients would recommend us to others</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-navy-primary mr-3" />
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{review.review}"
              </p>
              
              <div className="border-t pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold text-navy-primary">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-sm text-navy-secondary font-medium">{review.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-navy-primary mb-4">Share Your Experience</h3>
            <p className="text-gray-600 mb-6">
              We value your feedback! If you've worked with us, we'd love to hear about your experience.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-navy-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
            >
              Leave a Review
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;