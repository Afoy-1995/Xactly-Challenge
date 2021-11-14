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
  // This simulates a GET request and a database creation has aspects of a RESTful API
  useEffect(() => {
    setProfiles(db.hierarchy)
  })

  return (
      <div>
        <DashBoard profiles={profiles} corps={db.company} user={currentUser}/>
      </div>
  );
}

export default App;
