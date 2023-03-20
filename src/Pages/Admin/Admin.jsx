import Layout from "../../Components/Layout";
import BannerForm from '../../Components/Forms/BannerForm';

import cl from './Admin.module.scss';

const Admin = () => {
  return (
    <Layout isAdmin={true}>
      <BannerForm />
    </Layout>
  );
}

export default Admin;