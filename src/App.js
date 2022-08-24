import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout'

import './assets/css/bootstrap.min.css';
import './assets/css/template-catalog.css';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  );
}

export default App;
