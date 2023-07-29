import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import SignupPage from './features/users/page/SignupPage';

const GlobalStyle = createGlobalStyle`
${reset}
`;
const isLogin = false;

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/availability"
          element={isLogin ? <HomePage /> : <Navigate to="/signup" />}
        ></Route>
        <Route path="/integration" element={<HomePage />}></Route>
        <Route path="/help" element={<HomePage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
