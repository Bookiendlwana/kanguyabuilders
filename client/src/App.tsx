import React from 'react';
import { Router, Route } from 'wouter';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Route path="/">
            <Hero />
            <About />
            <Services />
            <Projects />
            <Reviews />
            <Contact />
          </Route>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;