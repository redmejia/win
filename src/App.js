import './App.css';
import Dashboard from './Components/Dashboard';
import { Route, Routes } from "react-router-dom";
import TableOrder from './Components/OrderTable';
import DevDocAPI from './Components/DevDocAPI';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/order' element={<TableOrder />} />
      <Route path='/api-doc' element={<DevDocAPI />} />
    </Routes>

  );
}

export default App;
