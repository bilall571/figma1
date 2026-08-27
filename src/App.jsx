
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import ThreeIcons from './components/ThreeIcons/ThreeIcons';
import Tools from './components/Tools/Tools';
import Focus from './components/Focus/Focus';
import Slider from './/components/Slider/Slider';
import Faq from './components/Faq/Faq';
import MediaGallery from './components/MediaGallery/MediaGallery';
import BottomCta from './components/BottomCta/BottomCta';
import Footer from './components/Footer/Footer';
import './App.css';

import PhoneTwo from "./assets/Col (1).png";

const toolsData = [
  {
    mainTitle: "All the essential tools",
    mainSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    phoneImg: PhoneTwo,
    rightTitle: "Semper feugiat",
    rightText: "Proin arcu aliquet tristique in nec adipiscing elementum dui sit. Ut in eu convallis cras vulputate ultrices amet, libero pretium felis ac id sapien facilisi.",
    features: [
      { title: "Malesuada feugiat magna in" },
      { title: "Tempus adipiscing id" }
    ]
  }
];

function App() {
  return (
    <div className="main-wrapper">
      <Header />
      <Hero />
      <ThreeIcons />
      <Tools list={toolsData[0]} />
      <Focus />
      <Slider />
      <Faq />
      <MediaGallery />
      <BottomCta />
      <Footer />
    </div>
  );
}


export default App;
