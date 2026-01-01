import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import ImportantInfo from './components/ImportantInfo';
import CategoryNav from './components/CategoryNav';
import FoodCard from './components/FoodCard';
import FoodModal from './components/FoodModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import { menuData } from './data/menuData';

function App() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].id);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Force scroll to top on refresh and handle image preloading
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Preload all images
    const imageUrls = menuData.flatMap(category => category.items.map(item => item.image));
    let loadedCount = 0;

    if (imageUrls.length === 0) {
      setTimeout(() => {
        setIsExiting(true);
        setTimeout(() => setIsLoading(false), 800);
      }, 1000);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === imageUrls.length) {
        // Minimum display time for the loader to ensure smooth feel
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsLoading(false), 800);
        }, 1500);
      }
    };

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Continue even if some images fail
    });
  }, []);

  const handleCategoryClick = React.useCallback((id) => {
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
  }, []);

  // Update active category on scroll (Throttled & Efficient)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Trigger when section is in middle of screen
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveCategory(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Watch all menu sections
    menuData.forEach((category) => {
      const element = document.getElementById(category.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {isLoading && <Loader isExiting={isExiting} />}
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
    </>
  );
}

export default App;
