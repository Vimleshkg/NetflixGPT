
import { Provider } from 'react-redux';
import Body, { myRouter } from './Components/Body';
import { myStore } from './Utils/ReduxStore';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Provider store={myStore}>
    <div className="App">
    <RouterProvider router={myRouter}></RouterProvider>
    </div>
    </Provider>
  );
}

export default App;
