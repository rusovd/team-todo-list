import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Style, { Theme }  from './theme/globalStyle'
import SideBar from './components/SideBar';
import Header from './components/Header';
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

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout >
        <Style />
        <SideBar />
        <ListTodos>
          <Header/>
        </ListTodos>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
