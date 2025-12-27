import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import ImportantInfo from './components/ImportantInfo';
import CategoryNav from './components/CategoryNav';
import FoodCard from './components/FoodCard';
import FoodModal from './components/FoodModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [selectedItem, setSelectedItem] = useState(null);

  // Force scroll to top on refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (id) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 180; // Offset for taller card-style sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Update active category on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Increased to match taller nav

      for (const section of menuData) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveCategory(section.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layout>
      <CategoryNav
        categories={menuData}
        activeCategory={activeCategory}
        onCategoryClick={handleCategoryClick}
      />

      <div className="pt-32">
        <Header />
      </div>

      <ImportantInfo />

      <main className="px-6 py-4 flex-grow">
        {menuData.map((category) => (
          <section key={category.id} id={category.id} className="mb-14 text-center">
            <h2 className="text-2xl font-black text-hotel-green mb-4 tracking-tighter uppercase border-b-2 border-green-50 inline-block pb-1">
              {category.title}
            </h2>
            {category.description && (
              <p className="text-sm text-slate-600 mb-6 italic opacity-90 max-w-[85%] mx-auto leading-relaxed">
                {category.description}
              </p>
            )}

            <div className="space-y-4 text-left">
              {category.items.map((item, index) => (
                <FoodCard
                  key={`${category.id}-${index}`}
                  item={item}
                  onClick={setSelectedItem}
                />
              ))}
            </div>

            {/* Divider Line between sections */}
            <div className="mt-12 mb-6 border-b-2 border-slate-100 opacity-60 rounded-full mx-4"></div>
          </section>
        ))}
      </main>

      <Footer />

      <FoodModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      <ScrollToTop />
    </Layout>
  );
}

export default App;
