import { Route, Routes } from 'react-router-dom';
import Routing from './Routing';
import LoginSubmission from './pages/LoginSubmission/LoginSubmission';
import './App.css';
function App() {


  return (

          <Routes>
            <Route exact path='/' element={<Routing />}>
              <Route index path='/' element={<LoginSubmission />} />
            </Route>
          </Routes>

  );
}

export default App;
