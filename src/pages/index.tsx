import type { NextPage } from 'next';
import Header from '../components/Header';
import { HomeTemplate } from '../template/home';

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomeTemplate />
    </div>
  );
};

export default Home;
