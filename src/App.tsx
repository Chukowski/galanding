import React from 'react';
import Hero from './components/Hero';
import FilmDescription from './components/FilmDescription';
import EventDetails from './components/EventDetails';
import Tickets from './components/Tickets';
import Sponsorship from './components/Sponsorship';
import Recognition from './components/Recognition';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <FilmDescription />
      <EventDetails />
      <Tickets />
      <Sponsorship />
      <Recognition />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;