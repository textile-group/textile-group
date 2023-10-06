import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import HomePage from "./pages/homePage";
import ContactsPage from "./pages/contactsPage";
import RangePage from "./pages/rangePage";
import AboutUsPage from "./pages/aboutUsPage";

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route 
      exact path="/"
      element={<HomePage/>} />
      <Route 
      path="/contacts"
      element={<ContactsPage/>} />
      <Route 
      path="/range"
      element={<RangePage/>} />
      <Route 
       path="/about-us"
      element={<AboutUsPage/>} />
    </Routes>
    </>
  )
}

export default App;
