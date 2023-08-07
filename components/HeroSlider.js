import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Carousel, Rate } from 'antd';
import { useRouter } from 'next/router';
import StarRatings from 'react-star-ratings';

const contentStyle = {
  height: '90vh',
  lineHeight: '160px',
};
export default function HeroSlider({ featuredProducts }) {
  const router =  useRouter();
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Featured Products</h1>
      <div className='carousel-container'>
        <Carousel
          // autoplay
          arrows
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          {featuredProducts.map((product) => (
            <div key={product._id}>
              <div style={contentStyle} className='carousel_product'>
                <div className='product-info'>
                  <h1 style={{ marginBottom: 0 }}>{product.product_name}</h1>
                  <Rate disabled defaultValue={product.rating} />
                  <Button
                    style={{
                      borderRadius: '0',
                      height: '60px',
                      widthL: '150px',
                      textAlign: 'center',
                    }}
                    type='primary'
                    size='large'
                    onClick={() => router.push(`/products/${product._id}`)}
                  >
                    See More
                  </Button>
                </div>
                <div className='image_wrapper'>
                  <img src={product.image} alt='' />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
