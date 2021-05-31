import Sidebar from "./Sidebar"
import './App.css';
import Header from "./Header"
import Feed from "./Feed"
import Widjects from "./Widjects"
import Login from "./Login"
import {  useSelector} from "react-redux"
import {
  selectUserName,
} from "./features/user/userSlice";
function App() {
  const userName =useSelector(selectUserName);
  return (
    <div className="app">
     {
        userName ? (
          <>
            <Header />

            <div className="app__body">
              <Sidebar />
              <Feed />
              <Widjects />
            </div>
          </>
        ) : (
            <Login />
          )
      }
    </div>
  );
}

export default App;
