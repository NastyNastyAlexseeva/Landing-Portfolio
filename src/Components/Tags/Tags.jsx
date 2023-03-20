import Tag from '../Tag';

import cl from './Tags.module.scss';

const Tags = ({ list }) => {
  return (
    list?.length ?
    <div className={cl.tags}>
      { list.map(({ name }, index) => <Tag key={index} name={name} />) }
    </div>
    : null
  );
}

export default Tags;