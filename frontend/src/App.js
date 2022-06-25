import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Login from "./login/Login";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/s" element={<Test/>}/>
        <Route path="*" element={<h1>Not found</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;