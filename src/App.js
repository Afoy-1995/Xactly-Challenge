import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import db from '../dummy_db/db.json';
import { Dummybase } from '../dummy_db/db'

const App = () => {
  const dummyDb = new Dummybase()
  const currentUser = {
      id: "admin",
      position: -1,
      manages: [0, 1, 2, 3],
      continent: "N/A",
      country: "N/A",
      city: "N/A"
  };
  // This simulates a 
  useEffect(() => {
    dummyDb.createDummyUser(currentUser)
    for (let i = 0; i < db.hierarchy.length; i++) {
      dummyDb.createDummyUser(db.hierarchy[i])
    }
    
  }, [])
  return (
    <ThemeProvider>
      <div>
        Hello World!
      </div>
    </ThemeProvider>
  );
}

export default App;
