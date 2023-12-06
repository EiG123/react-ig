import './App.css'
import { useDispatch, useSelector } from "react-redux";
import Homepage from './Homepage';
import Authentication from './authentication/Authentication';
import { useEffect } from 'react';
import { auth } from './firebase';
import {setLoading} from './features/userSlice.jsx';
import {loginUser} from './features/userSlice.jsx'


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        
        
        dispatch(loginUser({
          uid: authUser.uid,
          username: authUser.displayName,
          email: authUser.email,
        })
        );
        dispatch(setLoading(false));
      }else{
        console.log("User is not looged in");
      }
    });
  }, []);
  const user = useSelector(state => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading)
  console.log(auth.currentUser);

  

  
  
  return (
    <div className="app">
      {isLoading ? (<div className='loader-container'>
        <div className='loader'></div>
      </div>) : (<>{user ? (<Homepage/>) : (<Authentication/>)}</>)}
      

      
    </div>
  );
}

export default App
