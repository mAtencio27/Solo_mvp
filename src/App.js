
import './App.css';

import axios from 'axios'

function App() {

  //const pushedData = []

  const data = async () => {
    const res = await axios.get("/api/v1/groceries")
    console.log(res)
  }
  data()





  return (
    <div className="App"> 
    </div>
  );
}

export default App;
