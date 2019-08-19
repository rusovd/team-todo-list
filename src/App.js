import React from 'react';
import styled, { ThemeProvider } from 'styled-components'
import Style, { theme }  from './theme/globalStyle'
import Faker from 'faker'
import Jumbotron from './components/Jumbotron';
import Profile from './components/Profile';
import GroupList from './components/GroupList'
import AddButton from './components/AddButton'
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
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;
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

const Footer = styled.div`
  height: 5rem;
  padding: 10px;
  color: red;
  height: 10%
  width: 100%;
  background: #e9e9e9;
  display: flex;
`;

const Middle = styled.div`
  height: 25rem;
  padding: 10px;
  color: white;
  width: 100%;
  height:100%
  background: white;
  display: flex;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout >
        <Style />
        <SideBar >
          <Profile username={Faker.name.findName()} avatarUrl="https://loremflickr.com/240/240/spring/" />
          <GroupList name="Team To-do List" />
        </SideBar>
        <ListTodos>
          <Jumbotron/>
          <Middle/>
        <Footer>
          <AddButton label="Add a to-do"  />
          {/* onClick={addTodo} */}
        </Footer>
        </ListTodos>
        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
