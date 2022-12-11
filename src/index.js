import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

<<<<<<< HEAD
import './index.css';
=======
import './styles/style.css';
import './styles/logo.css';
import './styles/footer.css';
import './index.css'
>>>>>>> 8452ae2647f2d4df7fdf5b2d2a360a78742897a4

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
