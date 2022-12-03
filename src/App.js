import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <UniversityList></UniversityList>
    </div>
  );
}

function UniversityList() {
  const [universities, setUniversity] = useState([])
  useEffect(() => {
    fetch('http://universities.hipolabs.com/search?country=United+States')
      .then(res => res.json())
    .then(data => setUniversity(data))
  },[])


  return (
    <div>
      <h1>Total University: {universities.length} </h1>
      <div className='university'>
      {
        universities.map(university => <University name={university.name} country={university.country} webPage={university.web_pages[0]}></University>)
      }
      </div>
    </div>
  )
}

function University(props) {
  return (
    <div className='single-uni'>
      <h3>Name: {props.name}</h3>
      <h4>Country: {props.country}</h4>
      <p>Website: {props.webPage}</p>
    </div>
  )
}


export default App;
