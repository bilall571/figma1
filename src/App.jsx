
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ThreeIcons from './components/ThreeIcons/ThreeIcons';
import Tools from './components/Tools/Tools';
import Focus from './components/Focus/Focus';
import Slider from './/components/Slider/Slider';
import Faq from './components/Faq/Faq';
import BottomCta from './components/BottomCta/BottomCta';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Hero />
      <ThreeIcons />
      <Tools />
      <Focus />
      <Slider />
      <Faq />
      <BottomCta />
      <Footer />
    </div>
  );
}

export default App;
