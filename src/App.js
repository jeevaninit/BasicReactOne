import React from 'react'
import Input from './Input';
import Button  from './Button';

const PrintCourseName=()=>{
  return(
    <>
    <h1>Welcome to React Class</h1>
    </>
  );
}

const PrintDuration=()=>{
  return(<>
  <h3>Class-7 to 8 Pm</h3>
  </>)
}

const App = () => {
  return (
    <>
      <center>
        <h1>Welcome to Functional Component</h1>
        <hr />
        <label>User Name</label>
        <Input />
        <label>Email ID</label>
        <Input />
        <label>Password</label>
        <Input />
        <Button />
        
{/*         <PrintCourseName />
        <PrintDuration /> */}
        </center>
    </>
  )
}

export default App;