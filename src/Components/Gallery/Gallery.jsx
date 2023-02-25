import Tags from '../Tags';
import GalleryItem from '../GalleryItem';

import { TAGS, GALLERY_LIST } from './constants';

import cl from './Gallery.module.scss';

const Gallery = () => {
  return (
    <section id='gallery' className={cl.gallery}>
      <h2>Gallery</h2>
      <Tags list={TAGS} />
      <div className={cl.cards}>
        {GALLERY_LIST.map(({ title, url, img, description, gallery }, index) => (
          <GalleryItem key={index} title={title} url={url} img={img} description={description} gallery={gallery} />
        ))}
      </div>
    </section>
  );
}

export default Gallery;