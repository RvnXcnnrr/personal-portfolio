import React, { createContext, useContext, useState } from 'react';

const TestimonialContext = createContext();

export const useTestimonials = () => {
  const context = useContext(TestimonialContext);
  if (!context) {
    throw new Error('useTestimonials must be used within a TestimonialProvider');
  }
  return context;
};

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);

  const addTestimonial = (testimonial) => {
    const newTestimonial = {
      id: Date.now(),
      name: testimonial.name,
      email: testimonial.email,
      text: testimonial.message,
      rating: 5, // Default rating
      service: 'Contact Form Submission',
      date: new Date().toISOString(),
      approved: false // Can be used for moderation
    };
    setTestimonials(prev => [newTestimonial, ...prev]);
    return newTestimonial;
  };

  const approveTestimonial = (id) => {
    setTestimonials(prev =>
      prev.map(testimonial =>
        testimonial.id === id
          ? { ...testimonial, approved: true }
          : testimonial
      )
    );
  };

  const getApprovedTestimonials = () => {
    return testimonials.filter(t => t.approved);
  };

  return (
    <TestimonialContext.Provider value={{
      testimonials,
      addTestimonial,
      approveTestimonial,
      getApprovedTestimonials
    }}>
      {children}
    </TestimonialContext.Provider>
  );
};
