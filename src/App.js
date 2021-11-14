import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import db from './dummy_db/db.json';
import DashBoard from './DashBoard';

const App = () => {
  const [profiles, setProfiles] = useState({})
  const currentUser = {
      id: "admin",
      position: 0,
      manages: [1, 2, 3],
      continent: "N/A",
      country: "N/A",
      city: "N/A"
  };
  let interval;
  // This simulates a GET request and a database creation has aspects of a RESTful API
  useEffect(() => {
    setProfiles(db.hierarchy)
  }, [])

  useEffect(() => {
    // Dummy updates from api
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => { // this emulates a GET request
      const updatedProfiles = updateStatus(db.hierarchy)
      setProfiles(updatedProfiles)
    }, 1800000);
})

function updateStatus(list) {
  const randomNumber = (Math.random().toFixed(2) * 100)
  if (randomNumber % 2 === 0) {
    list["status"] = "critical"
  } else if (randomNumber % 3 === 0) {
    list["status"] = "warning"
  } else if (randomNumber % 5 === 0) {
    list["status"] = "normal"
  }

  if (list.manages && list.manages.length > 0) {
    for (let i = 0; i < list.manages.length; i++) {
      list.manages[i] = updateStatus(list.manages[i])
    }
  }
  return list
}

  return (
      <div>
        <DashBoard profiles={profiles} corps={db.company} user={currentUser}/>
      </div>
  );
}

export default App;
