import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import FriendsDetail from "./componets/FriendsDetail/FriendsDetail";
import Home from './componets/Home/Home';
import NoMatch from "./componets/Nomatch/Nomatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home"element ={<Home/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/friend/:FriendId"element={<FriendsDetail />}/>
        <Route path="*" element={<NoMatch/>} />
      </Routes>



      </BrowserRouter>
    </div>
  );
}

export default App;
