import '@/styles/globals.css'
import '@/styles/navbar.css'
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';
import { Provider } from 'react-redux'
import { store } from '@/redux/store';
const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}> 
      <ConfigProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ConfigProvider>
    </Provider>
  );
};

export default App;