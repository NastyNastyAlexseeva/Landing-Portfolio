import Tag from '../Tag';

import cl from './Tags.module.scss';

const Tags = ({ list }) => {
  return (
    list?.length ?
    <div className={cl.tags}>
      { list.map(({ name }) => <Tag name={name} />) }
    </div>
    : null
  );
}

export default Tags;