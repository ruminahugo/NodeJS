// pages/_app.js
import '../styles/global.css'; // Import global CSS

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <header style={{ background: '#0070f3', padding: '10px', color: '#fff' }}>
        <h1>My Next.js App</h1>
      </header>
      <Component {...pageProps} />
      <footer style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>&copy; 2025 My App</p>
      </footer>
    </>
  );
}
