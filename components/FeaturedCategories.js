import Link from 'next/link';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export default function FeaturedCategories({ featuredCategories }) {
  const items = Object.keys(featuredCategories).map((category, index) => (
    <Link
      key={category}
      href={`/products?category=${category}`}
      style={{
        height: index % 2 ? '200px' : '250px',
        margin: '0px',
      }}
    >
      <img
        className='category-image'
        alt='example'
        src={featuredCategories[category]}
      />
      <h1 className='category-name'>{category}</h1>
    </Link>
  ));
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Featured Categories</h1>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry columnsCount={3} gutter='10px'>{items}</Masonry>
      </ResponsiveMasonry>
    </div>
  );
}
