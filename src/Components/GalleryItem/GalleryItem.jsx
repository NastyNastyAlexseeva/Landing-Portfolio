import { useState } from 'react';

import { Button as BButton } from 'react-bootstrap';
import { CloseButton as BCloseButton } from 'react-bootstrap';
import { Card as BCard } from 'react-bootstrap';
import { Modal as BModal } from 'react-bootstrap';
import { Carousel as BCarousel } from 'react-bootstrap';

import cl from './GalleryItem.module.scss';

const GalleryItem = ({ title, url, img, description, gallery }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const hanleClick = () => {
    setShow(!show)
  }

  return (
    <BCard style={{ width: 'calc(33% - 40px)', margin: '20px' }}>
      <BCard.Img variant="top" src={img} />
      <BCard.Body>
        <BCard.Title>{title}</BCard.Title>
        {url && <a href={url} target='_blank'>visit site</a>}
        <BCard.Text>{description}</BCard.Text>
        { gallery?.length ?
          <div>
            <BButton onClick={hanleClick} variant="primary">View</BButton>
            {/** заменить порталом */}
            <BModal show={show} onHide={handleClose}>
              <BModal.Body>
              <BCarousel>
                  {gallery.map(({ img, description }, index) => (
                    <BCarousel.Item key={index}>
                      <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                      />
                      <BCarousel.Caption>
                        <p>{description}</p>
                      </BCarousel.Caption>
                    </BCarousel.Item>
                  ))}
                </BCarousel>
              </BModal.Body>
              <BModal.Footer>
                <BCloseButton onClick={handleClose} />
              </BModal.Footer>
            </BModal>
          </div>
          : null
        }
      </BCard.Body>
    </BCard>
  );
}

export default GalleryItem;