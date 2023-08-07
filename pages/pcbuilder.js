'use client'

import RootLayout from '@/components/Layouts/RootLayout';
import { Button, Card } from 'antd';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
export default function PCBuilderPage() {
  const { components } = useSelector((state) => state.pcBuilder);
  const isAllSelected = isAllComponentsSelected(components);
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <h1>PC Builder</h1>
      <h2>Select the components for you next level PC</h2>
      <span>**All components are mandatory to complete the build**</span>
      <AllSelections components={components} />
      <hr />
      <div>
        <Button type='primary' disabled={!isAllSelected}>
          Complete Build
        </Button>
      </div>
    </div>
  );
}

const AllSelections = ({ components }) => {
  const router = useRouter();

  return components.map((component) => (
    <Card
      key={component.name}
      style={{
        maxWidth: '600px',
        margin: '20px 0',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <h4>Select {component.name}</h4>
        <Button
          type='primary'
          onClick={() =>
            router.push(`/products?category=${component.name}&builderMode=true`)
          }
        >
          Select
        </Button>
      </div>
      <div className='selected-components'>
        Current Selection: {component.productName}
      </div>
    </Card>
  ));
};

const isAllComponentsSelected = (components) => {
  debugger;
  let isAllSelected = true;

  for (const component of components) {
    if (!component.id) {
      isAllSelected = false;
      break;
    }
  }
  return isAllSelected;
};
PCBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  return {
    props: {},
  }
}