import logo from './logo.svg';
import './App.css';
import { AddEmployee } from './Components/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchEmployee } from './Components/SearchEmployee';
import { DeleteEmployee } from './Components/DeleteEmployee';
import { ViewEmployee } from './Components/ViewEmployee';

function App() {
  return (
    <div>
     
<BrowserRouter>

<Routes>

<Route path='/' element={<AddEmployee/>}/>
<Route path='/search' element={<SearchEmployee/>}/>
<Route path='/delete' element={<DeleteEmployee/>}/>
<Route path='/view' element={<ViewEmployee/>}/>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;
