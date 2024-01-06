import { AppRoutes } from "./routes";
import { GlobalStyle } from "./styles/common.styles";
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>  
      <GlobalStyle />
    </>
     
  );
}

export default App;
