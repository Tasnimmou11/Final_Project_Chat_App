import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Layout from "./components/Layout/Layout";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Layout/>} > 
        <Route path="/" element={<Home/>} />
        </Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
