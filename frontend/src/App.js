import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Layout } from './components/layout';
import { MainContainer } from './components/main-container';
import { GlobalStyle } from './styles/global-style';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Layout>
            <MainContainer />
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
