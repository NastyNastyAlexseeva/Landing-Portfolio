import ContactItem from '../ContactItem';

import cl from './Contacts.module.scss';

const Contacts = ({ list }) => {
  return (
    <div id='contacts' className={cl.contacts}>
      <h3>Contacts</h3>
      {
        list?.length ? list.map(({url}, index) => <ContactItem key={index} url={url} />) : null
      }
    </div>
  );
}

export default Contacts;