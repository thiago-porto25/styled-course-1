import styled from 'styled-components';
import { Header } from '.';

const Content = styled.main`
  max-width: 800px;
  margin: 80px auto 80px auto;
  padding: 0 16px;
  box-sizing: border-box;
  font-family: 'Open Sans';

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Kaushan Script';
  }
`;

export function PageLayout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}
