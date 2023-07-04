import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { 
  HomePage, 
  PeopleListPage, 
  CounterButtonPage, 
  PageNotFound, 
  ProtectedPage, 
  ControlledFormPage,
  UnControlledFormPage,
  UserProfilePage
} from "./pages";
import { NavBar } from "./pages/NavBar";
import { NestedFormsNavbar } from "./pages/NestedFormsNavbar";






function App() {
  //define state
  // const [numberOfClicks, setNumberOfClicks] = useState(0);
  // const [hideMassage, setHideMessage] = useState(false)

  //method for the clicked button in CounterButton component(passed as a prop)
  // const increement = () => setNumberOfClicks(numberOfClicks + 1);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="App-header">
          <Routes>
            <Route path="/" element={<HomePage />} exact></Route>
            <Route path="/counter" element={<CounterButtonPage />}></Route>
            <Route path="/people-list" element={<PeopleListPage />}></Route>
            <Route path="/protected" element={<ProtectedPage />}></Route>
            {/* nested routes */}
            <Route path="/forms" element={<NestedFormsNavbar />}>
              <Route path="controlled" element={<ControlledFormPage />}></Route>
              <Route path="uncontrolled" element={<UnControlledFormPage />}></Route>
              <Route path="" element={<ControlledFormPage />}></Route>
            </Route>
            <Route path="/user" element={<UserProfilePage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
