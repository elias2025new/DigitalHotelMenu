import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import ImportantInfo from './components/ImportantInfo';
import CategoryNav from './components/CategoryNav';
import FoodCard from './components/FoodCard';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);

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
      const offset = 100; // Offset for sticky nav
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
      const scrollPosition = window.scrollY + 150;

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

      <div className="pt-20">
        <Header />
      </div>

      <ImportantInfo />

      <main className="px-6 py-8 flex-grow">
        {menuData.map((category) => (
          <section key={category.id} id={category.id} className="mb-12">
            <h2 className="text-2xl font-bold text-hotel-dark mb-2 tracking-tight">
              {category.title}
            </h2>
            {category.description && (
              <p className="text-sm text-hotel-muted mb-6 italic opacity-80">
                {category.description}
              </p>
            )}

            <div className="space-y-4 pt-2">
              {category.items.map((item, index) => (
                <FoodCard key={`${category.id}-${index}`} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      <Footer />

      <ScrollToTop />
    </Layout>
  );
}

export default App;
