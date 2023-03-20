import Layout from "../../Components/Layout";
import Banner from '../../Components/Banner';
import About from "../../Components/About";
import Gallery from "../../Components/Gallery/Gallery";
import Contacts from '../../Components/Contacts';

import Img from '../../assets/bckg.png';

import cl from './Home.module.scss';

const Home = () => {
  return (
    <>
      <Layout>
        <Banner src={Img} />
        <About />
        <Gallery />
        <Contacts list={[{url: 'https://pikabu.ru/' }]} />
      </Layout>
    </>
  );
}

export default Home;