// pages/_app.js
import '../styles/global.css'; // Import global CSS
import '../styles/custom-menu.css';
import Head from 'next/head';
import MenuComponent from '../components/Menu';

export default function MyApp({ Component, pageProps }) {
  const title = (Component.title || 'Trang chủ') + ' FUTA';
  return (
    <>
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
    </Head>
        <MenuComponent />
        <Component {...pageProps} />
        <footer style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>&copy; 2025 My App</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/@splidejs/splide/dist/js/splide.min.js" defer></script>
    </>
  );
}
