import Layout from "../../Components/Layout";
import Slider from '../../Components/Slider';
import About from "../../Components/About";
import Gallery from "../../Components/Gallery/Gallery";
import Contacts from '../../Components/Contacts';

import cl from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Layout>
        <Slider />
        <About />
        <Gallery />
        <Contacts list={[{url: 'https://pikabu.ru/' }]} />
      </Layout>
    </>
  );
}

export default Home;