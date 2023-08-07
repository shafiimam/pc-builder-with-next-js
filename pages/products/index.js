import RootLayout from '@/components/Layouts/RootLayout';
import { productsData } from '@/data';
import { addComponent } from '@/redux/features/PcBuilder/PcBuilder';
import { Button, Card, Image, Rate } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch } from 'react-redux';

const allCategories = [
  'Processor',
  'Motherboard',
  'RAM',
  'Monitor',
  'GPU',
  'Mouse',
  'Others',
];

const getProductsToRender = (products, category) => {
  if (category && category !== 'Others')
    return products.filter((product) => product.category === category);
  if (category && category === 'Others')
    return products.filter(
      (product) => !allCategories.includes(product.category)
    );
  return products;
};

export default function ProductsPage({ products }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleAdd = (id, productName, name = 'Others') => {
    dispatch(
      addComponent({
        name,
        id,
        productName,
      })
    );
    router.push('/pcbuilder');
  };

  const { category, builderMode } = router.query;
  let productsToRender = getProductsToRender(products, category);

  return (
    <div className='products-container'>
      {productsToRender.map((productData, index) => (
        <Card
          key={index}
          style={{
            width: 300,
            height: 550,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          cover={
            <Image src={productData.image} alt={productData.product_name} />
          }
          hoverable
          onClick={
            !builderMode
              ? () =>
                  handleAdd(
                    productData.category,
                    productData._id,
                    productData.product_name
                  )
              : null
          }
        >
          <>
            <p>Category: {productData.category}</p>
            <p>Price: ${productData.price}</p>
            <p>Status: {productData.status}</p>
            <p>Rating:{productData.rating}</p>
            <span>
              <Rate allowHalf disabled defaultValue={productData.rating} />
            </span>
            {builderMode && (
              <Button
                type='primary'
                style={{
                  width: '100%',
                  height: 'auto',
                  marginTop: '15px',
                  padding: '10px',
                }}
                onClick={() =>
                  handleAdd(
                    productData._id,
                    productData.product_name,
                    category !== 'Others' ? productData.category : 'Others'
                  )
                }
              >
                Add To Build
              </Button>
            )}
          </>
        </Card>
      ))}
    </div>
  );
}
ProductsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const products = productsData;
  return {
    props: {
      products,
    },
  };
};
