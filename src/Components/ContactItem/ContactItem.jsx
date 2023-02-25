import { ReactComponent as TeleramSvg } from '../../assets/telegram.svg';

import cl from './ContactItem.module.scss';

const ContactItem = ({ url }) => {
  return (
    <div className={cl.contact}>
      <TeleramSvg />
      <a href={url} target='_blank'>{url}</a>
    </div>
  );
}

export default ContactItem;