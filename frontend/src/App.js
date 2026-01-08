// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import DynamicData from "./pages/DynamicData";
// import AutoDashboard from "./pages/AutoDashboard";


// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/data-clean" element={<DynamicData />} />
//         <Route path="/auto-dashboard" element={<AutoDashboard />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import DynamicData from "./pages/DynamicData";
import AnalyticsHub from "./pages/AnalyticsHub";
import AutoDashboard from "./pages/AutoDashboard";

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
     <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/data-clean" element={<DynamicData />} />
         <Route path="/auto-dashboard" element={<AutoDashboard />} />
         <Route path="/analytics-hub" element={<AnalyticsHub />} />


       </Routes>
    </BrowserRouter>
  );
}

export default App;

