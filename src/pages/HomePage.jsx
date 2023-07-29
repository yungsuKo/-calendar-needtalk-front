import { Desktop, Mobile } from '../hooks/useResponsive';
import Layout from '../Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Desktop></Desktop>
      <Mobile></Mobile>
    </Layout>
  );
};

export default HomePage;
