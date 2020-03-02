import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';

import GlobalStyle from '../../styles/global';
import { LayoutMain, LayoutWrapper } from './styles';

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <aside>
        <Sidebar />
      </aside>
      <LayoutMain>{children}</LayoutMain>
      <MenuBar />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
