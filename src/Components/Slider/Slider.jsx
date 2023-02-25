import { Carousel as BCarousel } from 'react-bootstrap';

import cl from './Slider.module.scss';

const Slider = () => {
  return (
    <BCarousel id="home" style={{height: '350px', overflow: 'hidden', objectPosition: 'center center'}}>
      <BCarousel.Item>
        <img
          className="d-block w-100"
          src="https://opis-cdn.tinkoffjournal.ru/ip/WCNepCofsOHsi_a_-UQW_nrD17KIvGQ5-itwe3P4Mws/w:1200/aHR0cHM6Ly9pbWct/Y2RuLnRpbmtvZmZq/b3VybmFsLnJ1Ly0v/bWFpbi1uaWppam91/cm5leS5vYXh2a3Uu/LmpwZw"
          alt="First slide"
        />
        <BCarousel.Caption style={{bottom: 'auto', top: '100px'}}>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </BCarousel.Caption>
      </BCarousel.Item>
      <BCarousel.Item>
        <img
          className="d-block w-100"
          src="https://149868225.v2.pressablecdn.com/wp-content/uploads/2022/12/aitu_Style_of_Golden_Boy__80s_anime_still_office_girl_at_desk_m_e43552f7-e8f5-4641-944f-6dec481084d6.webp"
          alt="Second slide"
        />

        <BCarousel.Caption style={{bottom: 'auto', top: '100px'}}>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </BCarousel.Caption>
      </BCarousel.Item>
      <BCarousel.Item>
        <img
          className="d-block w-100"
          src="https://media.2x2tv.ru/content/images/2023/01/----.jpg"
          alt="Third slide"
        />

        <BCarousel.Caption style={{bottom: 'auto', top: '100px'}}>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </BCarousel.Caption>
      </BCarousel.Item>
    </BCarousel>
  );
}

export default Slider;