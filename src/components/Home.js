import React from 'react'
import Notes from '../components/Notes'
//import AddNote from '../components/AddNote'

function Home(props) {
  const {showAlert}=props;
    return (
    <>
        <Notes showAlert={showAlert} /> 
      </>
      )
    }
    
export default Home;