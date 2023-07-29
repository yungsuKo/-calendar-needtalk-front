import styled from 'styled-components';
import Layout from '../../../Layout/Layout';
import { SignupForm } from '../components/SignupForm';
import { SignupIntro } from '../components/SignupIntro';

const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
`;

const LoginPage = () => {
  return (
    <Layout>
      <Container>
        <SignupForm></SignupForm>
      </Container>
    </Layout>
  );
};

export default LoginPage;
