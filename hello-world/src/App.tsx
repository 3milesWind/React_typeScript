import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/state/User';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
function App() {
  const personName =  {
    first: 'Bruce',
    last: 'Wayne'
  }
  
  const nameList = [
     {
       first: 'Bruce',
       last: 'Wayne'
     },
     {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    },
  ]
  return (
    <div className="App">
      {/* <Greet name="Jeffrey" messageCount={10} isLoggedIn= {false} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='loading' />
      <Heading>PlaceHolder</Heading>
      <Oscar>
        <Heading>Oscar goes to leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick= {(event, id) => {console.log('Button clicked', event, id)}}/>
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container  styles={{border: '1px soild black', padding: '1rem'}}/>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      <List 
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick = {(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive isNegative isZero/>
    </div>
  );
}

export default App;
