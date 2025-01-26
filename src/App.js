import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import ContactUs from './components/Pages/ContactUs';
import BookRoom from './components/Pages/BookRoom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Cards /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/BookRoom.js" element={<BookRoom />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";

// function App() {
//  return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path='/' element={ <Services/> } />
//         <Route path='home' element= {<Home/>} />
//         <Route path='about' element={ <ContactUs/> } />
//         <Route path='login' element={ <BookRoom/> } />
//       </Routes>
//     </div>
//   );
// }

// export default App