import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/availability" element={<HomePage />}></Route>
        <Route path="/integration" element={<HomePage />}></Route>
        <Route path="/help" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
