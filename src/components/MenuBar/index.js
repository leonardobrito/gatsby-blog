import React, { useState, useEffect } from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Home } from 'styled-icons/boxicons-solid/Home';
import { SearchAlt2 as Search } from 'styled-icons/boxicons-regular/SearchAlt2';
import { UpArrowAlt as Arrow } from 'styled-icons/boxicons-regular/UpArrowAlt';
import { Bulb as Light } from 'styled-icons/boxicons-regular/Bulb';
import { Grid } from 'styled-icons/boxicons-solid/Grid';
import { ThList as List } from "styled-icons/typicons/ThList"
import getThemeColor from "../../utils/getThemeColor"

import { MenuBarWrapper, MenuBarGroup, MenuBarLink, MenuBarItem, } from './styles';

export default function Menubar() {

  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink
          to="/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Voltar para Home"
        >
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink
          to="/search/"
          cover
          direction="right"
          bg={getThemeColor()}
          duration={0.6}
          title="Pesquisar"
        >
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
      <MenuBarGroup>
        <MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? 'light' : 'dark')
          }}
          className={theme}
        >
          <Light />
        </MenuBarItem>
        <MenuBarItem
          className="display"
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </MenuBarItem>
        <MenuBarItem title="Ir para o Topo">
          <Arrow onClick={() => scrollTo('body')}/>
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
}
