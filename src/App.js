import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body></Body>,
    children:[
      {
        path:"/",
        element:<MainContainer></MainContainer>
      },
      {
        path: "/watch",
        element: <WatchPage></WatchPage>
      }
    ]
  }
])
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head></Head>
        <RouterProvider router={appRouter}></RouterProvider>
        {/* <Body></Body> */}
        
      </div>
    </Provider>
  );
}

export default App;
