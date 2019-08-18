import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Style, { theme }  from './theme/globalStyle'
import Faker from 'faker'
import Header from './components/Header';
import Profile from './components/Profile';
import MenuList from './components/MenuList'
// import ListHeader from 'components/ListHeader';
// import TodoList from 'containers/TodoList';

const Layout = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  display: flex;
  height: 100vh;
  width: 100vw;
  position: absolute;
	top:0;
	bottom: 0;
	left: 0;
	right: 0;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
`;

const ListTodos = styled.div`
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  width: 100%;
`;

const SideBar = styled.div`
  min-width: 160px;
  width: 30%;
  box-shadow: 4px 1px 5px 0px rgba(0,0,0,0.16);
  height: 100vh;
  padding: 0 10px;
  background: white;
  z-index: 100;
`;

// const Div = styled.div `
//   color: ${props => { console.log(props.theme); return props.theme.colors.brand800 } };
// `

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout >
        <Style />
        <SideBar >
          <Profile username={Faker.name.findName()} avatarUrl="https://loremflickr.com/240/240/spring/" />
          <MenuList name="Team To-do List" />
        </SideBar>
        <ListTodos>
          <Header/>
        </ListTodos>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
