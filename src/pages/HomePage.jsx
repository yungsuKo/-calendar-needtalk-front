import { Desktop, Mobile } from '../hooks/useResponsive';
import Layout from '../layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <Desktop></Desktop>
      <Mobile></Mobile>
    </Layout>
  );
};

export default HomePage;
