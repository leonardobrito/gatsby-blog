import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from '../Sidebar';
import MenuBar from '../MenuBar';
import { TransitionPortal } from "gatsby-plugin-transition-link"

import GlobalStyle from '../../styles/global';
import { LayoutMain, LayoutWrapper } from './styles';

const Layout = ({ children }) => {

  return (
    <LayoutWrapper>
      <GlobalStyle />
      <TransitionPortal level="top">
        <Sidebar />
      </TransitionPortal>
      <LayoutMain>{children}</LayoutMain>
      <TransitionPortal level="top">
        <MenuBar />
      </TransitionPortal>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
