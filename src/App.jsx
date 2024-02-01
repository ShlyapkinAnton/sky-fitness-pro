import { useState } from 'react'
import { AppRoutes } from "./routes";
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('auth')) ?? null);

  return (
    <Provider store={store}>
      <AppRoutes user={user} setUser={setUser}/>
    </Provider>  
  );
}

export default App;
