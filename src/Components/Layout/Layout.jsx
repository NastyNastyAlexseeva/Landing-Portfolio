import { Container as BContainer } from 'react-bootstrap';

import Header from '../Header';

import cl from './Layout.module.scss';

const Layout = ({ children }) => {
  return (
    <main className={cl.layout}>
      <Header />
      <BContainer>
        {children}
      </BContainer>
    </main>
  );
}

export default Layout;