import React from 'react';
import { connect } from 'dva';
// import styles from './IndexPage.css';

import Header from '../../components/Header/Header'
import Carousels from '../../components/Carousels/Carousels'
import Content from '../../components/Content/Content'
import Footer from '../../components/Footer/Footer'
import styles from './HomePage.css'
function IndexPage() {
  return (
    <div className={styles.shouye}>
      <Header></Header>
      <Carousels></Carousels>
      <Content></Content>
      <Footer></Footer>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
