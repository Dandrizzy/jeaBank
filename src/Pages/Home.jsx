import Innovate from '@/Features/Home/Innovate';
import Hero from '../Features/Home/Hero';
import About from '@/Features/Home/About';
import Services from '@/Features/Home/Services';
import Calculate from '@/Features/Home/Calculate';
import { Slides } from '@/Features/Home/Slides';
import Contact from '@/Features/Home/Contact';
import Footer from '@/Features/Home/Footer';
import LogoStack from '@/Features/Home/LogoStack';
import TradeMark from '@/Features/Home/TradeMark';
const Home = () => {
 return (
  < >
   <Hero />
   <div id="innovate">
    <Innovate />
   </div>
   <div id="about">
    <About />
   </div>
   <LogoStack />
   <Services />
   <div id="lend">
    <Calculate />
   </div>
   <div id="testimonies">
    <Slides />
   </div>
   <div id="contact">
    <Contact />
   </div>
   <Footer />
   <TradeMark />
  </>
 );
};

export default Home;