import AboutUs from "./components/AboutUs";
import BestSelling from "./components/BestSelling";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
