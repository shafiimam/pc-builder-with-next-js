import {
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from '@ant-design/icons';
import { Button, Dropdown, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
const { SubMenu } = Menu;

const RootLayout = ({ children }) => {
  const routes = ['Processor', 'Motherboard', 'RAM', 'Monitor', 'GPU', 'Mouse', 'Others'];

  const items = routes.map((item) => {
    return {
      key: '1',
      label: (
        <Link rel='noopener noreferrer' href={`/products?category=${item}`}>
          {item}
        </Link>
      ),
    };
  });
  return (
    <Layout>
      <Header>
        <div className='nav-container'>
          <div className='logo'>
            <Link href='/'>
              <div className='logo-container'>
                <Image
                  src='https://static.vecteezy.com/system/resources/thumbnails/006/298/276/small/gear-smart-eps-icon-digital-tech-business-logo-free-vector.jpg'
                  alt=''
                  height={50}
                  width={50}
                />
              </div>
            </Link>
          </div>
          <div className='nav-items'>
            <Link
              href='/pcbuilder'
              style={{
                color: 'white',
              }}
            >
              <Button>PC Builder</Button>
            </Link>

            <Dropdown menu={{ items }} placement='bottomLeft' arrow>
              <Button>Categories</Button>
            </Dropdown>
          </div>
        </div>
      </Header>

      <Content
        style={{
          padding: '0 24px',
          minHeight: '100vh',
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: '28px',
          }}
        >
          PC-BUILDER
        </h2>
        <p className={styles.social_icons}>
          <Link href='https://web.facebook.com/groups/programmingherocommunity'>
            <FacebookFilled />
          </Link>
          <Link href='www.twitter.com'>
            <TwitterSquareFilled />
          </Link>
          <Link href='https://web.programming-hero.com/home/'>
            <GoogleSquareFilled />
          </Link>
          <Link href='www.linkedin.com'>
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Programming Hero
      </Footer>
    </Layout>
  );
};
export default RootLayout;
