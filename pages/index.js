import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSlider from '@/components/HeroSlider';
import FeaturedCategories from '@/components/FeaturedCategories';
import RootLayout from '@/components/Layouts/RootLayout';
import { featuredCategoriesData, productsData } from '@/data';
const inter = Inter({ subsets: ['latin'] });

const HomePage = ({ featuredProducts, featuredCategories }) => {
  return (
    <main className={` ${inter.className}`}>
      <HeroSlider featuredProducts={featuredProducts}/>
      <FeaturedCategories featuredCategories={featuredCategories}/>
    </main>
  );
};
export default HomePage;
export const getStaticProps = async () => {
  const featuredProductsData = getFeaturedProducts();
  return {
    props: {
      featuredProducts: featuredProductsData,
      featuredCategories: featuredCategoriesData,
    },
  };
};

function getFeaturedProducts(){
  const randomIndexes = getRandomNumbers();
  return randomIndexes.map(index => productsData[index]);
}

function getRandomNumbers() {
  const numbers = [];

  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 39);
    numbers.push(randomNumber);
  }

  return numbers;
}
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


