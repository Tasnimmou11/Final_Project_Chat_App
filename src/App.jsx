import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Layout from "./components/Layout/Layout";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Menu from "./pages/Menu";
import UserList from "./pages/UserList";
import FriendRequstList from "./pages/FriendRequstList";
import FriendList from "./pages/FriendList";
import BlockList from "./pages/BlockList";












function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Layout/>} > 
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/userlist" element={<UserList/>} />
        <Route path="/friendrequestlist" element={<FriendRequstList/>} />
        <Route path="/friendlist" element={<FriendList/>} />
        <Route path="/blocklist" element={<BlockList/>} />
        

        </Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
