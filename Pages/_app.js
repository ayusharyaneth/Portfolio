import '../styles/globals.css'
import { useState, useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setDarkMode(localStorage.getItem('theme') === 'dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <button onClick={() => setDarkMode(!darkMode)} className="absolute top-4 right-4 p-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded">
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <Component {...pageProps} />
    </div>
  );
}
