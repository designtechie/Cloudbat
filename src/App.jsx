
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cards />
     <Projects/>
     <Blogs/>
     <ContactForm/>
      <Footer/>
   
    </div>
  );
};

export default App;
