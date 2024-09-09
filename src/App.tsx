import HomePage from './ui/pages/HomePage';
import DetailPage from './ui/pages/DetailPage';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import './App.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<HomePage />} />
    <Route path="/detail/:name" element={<DetailPage />} />
    </>
   
  )
);

const App: React.FC = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  );
};

export default App;