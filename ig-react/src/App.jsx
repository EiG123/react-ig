import './App.css'
import { useSelector } from "react-redux";
import Homepage from './Homepage';
import Authentication from './authentication/Authentication';

function App() {
  const user = useSelector(state => state.data.user.user)
  return (
    <div className="app">
      {user ? (<Homepage/>) : (<Authentication/>)}
    </div>
  );
}

export default App
