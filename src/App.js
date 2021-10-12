import { Cards } from "./components/Cards";
import { Profile } from "./components/Profile";
import AplicationProvider from "./context";

import './style/global.css';

function App() {


  return (
    <AplicationProvider>
      <div className="App">
        <Profile />
        <Cards />
      </div>
    </AplicationProvider>
  );
}

export default App;
