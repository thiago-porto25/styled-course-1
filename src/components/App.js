import { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import { darkTheme } from 'styles/dark';
import { lightTheme } from 'styles/light';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';

import Login from 'components/pages/Login';
import Home from 'components/pages/Home';

function App() {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () =>
          setTheme((current) =>
            current.id === 'light' ? darkTheme : lightTheme
          ),
      }}
    >
      <GlobalStyles />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
