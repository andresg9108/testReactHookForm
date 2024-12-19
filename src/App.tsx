import React from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom';
import Index from './pages/Index/Index.tsx';
import Example from './pages/Example/Example.tsx';
import ExampleYup from './pages/ExampleYup/ExampleYup.tsx';
import Error404 from './pages/Error404/Error404.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/example" element={<Example />} />
        <Route path="/exampleyup" element={<ExampleYup />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;