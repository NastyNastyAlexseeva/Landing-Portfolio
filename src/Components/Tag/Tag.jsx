import { Button as BButton } from 'react-bootstrap';

import cl from './Tag.module.scss';

const Tag = ({ name }) => {
  return (
    <BButton className={cl.tag} variant="outline-secondary">{name}</BButton>
  );
}

export default Tag;