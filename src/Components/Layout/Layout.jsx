import { Container as BContainer } from 'react-bootstrap';

import Header from '../Header';

import cl from './Layout.module.scss';

const Layout = ({ children, isAdmin }) => {
  return (
    <main className={cl.layout}>
      <Header isAdmin={isAdmin} />
      <BContainer>
        {children}
      </BContainer>
    </main>
  );
}

export default Layout;