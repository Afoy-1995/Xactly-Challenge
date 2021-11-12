import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components'
import db from './dummy_db/db.json';
import { Dummybase } from './dummy_db/db'
import DashBoard from './DashBoard';

const App = () => {
  const dummyDb = new Dummybase()
  const [profiles, setProfiles] = useState({})
  const currentUser = {
      id: "admin",
      position: -1,
      manages: [0, 1, 2, 3],
      continent: "N/A",
      country: "N/A",
      city: "N/A"
  };
  // This simulates a GET request and a database creation 
  useEffect(() => {
    dummyDb.createDummyUser(currentUser)
    for (let i = 0; i < db.hierarchy.length; i++) {
      dummyDb.createDummyUser(db.hierarchy[i])
    }
    setProfiles(dummyDb.profiles)
  }, [])
  return (
      <div>
        <DashBoard profiles={profiles} corps={db.company} user={currentUser}/>
      </div>
  );
}

export default App;
