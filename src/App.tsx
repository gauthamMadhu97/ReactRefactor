import './App.css';
import { useRoutes } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
