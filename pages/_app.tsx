import '../styles/globals.scss' ;
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import 'slick-carousel/slick/slick.css' ;
import 'slick-carousel/slick/slick-theme.css' ;
import Layout from '../components/Layout' ;
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
