import RootLayout from '@/components/Layouts/RootLayout';
import { productsData } from '@/data';
import { addComponent } from '@/redux/features/PcBuilder/PcBuilder';
import { Button, Rate } from 'antd';
import { useRouter } from 'next/router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function ProductPage({product}) {
  const state = useSelector(state => {
    return state.pcBuilder
  })
  const router = useRouter();
  const dispatch = useDispatch();
  const handleAdd= ()=>{
    dispatch(addComponent(product._id));
    router.push('/pcbuilder')
  }
  return (
    <div
      className='product-container'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      <div className='product-image'>
        <img src={product.image} alt='' />
      </div>
      <div className='product-info'>
        <h1>{product.product_name}</h1>
        <Rate disabled defaultValue={product.rating} />
        <p>{product.status}</p>
        <p
          style={{
            fontSize: '20px',
            marginBottom: '50px',
          }}
        >
          Price: {product.price}$
        </p>

        <Button type='primary' size='large' onClick={handleAdd}>
          Add To Build
        </Button>
      </div>
    </div>
  );
}

ProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async ({params}) => {
  const id = params.id;
  const productData =  productsData.find(product => product._id === id);
  return {
    props: {
      product:productData,
    },
  };
}

export const getStaticPaths = async () => {
  const products = productsData;
  return {
    paths: products.map((product) => `/products/${product._id}`),
    fallback: false,
  };
};