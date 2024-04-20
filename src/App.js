import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children:[
      {index:true , element: <Home />},
    ]
  },
  {
    path: '/signup',
    element: <Signup />
  }
]);

function App() {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    var htmlElement = document.querySelector("html");

    if (i18n.language === "ar") {
      htmlElement.setAttribute("lang", "ar");
      htmlElement.setAttribute("dir", "rtl");
    } else {
      htmlElement.setAttribute("lang", "en");
      htmlElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);
  return <RouterProvider router={router} />;
}

export default App;
