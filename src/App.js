import './App.scss';
import RoutesPage from './routes/routes';
import { ContextProvider } from './context/contextAuth';

function App() {
  return (
    <ContextProvider>
      <RoutesPage></RoutesPage>
    </ContextProvider>
  );
}

export default App;
