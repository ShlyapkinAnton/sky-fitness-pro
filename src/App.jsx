import { AppRoutes } from "./routes";
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const userData = JSON.parse(localStorage.getItem('auth')) ?? null;

  return (
    <Provider store={store}>
      <AppRoutes userData={userData} />
    </Provider>  
  );
}

export default App;
