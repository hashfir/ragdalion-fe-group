import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
} from 'react-router-dom';
import './index.css';
// import { CreateFormPage } from './page';
import { ChakraProvider } from '@chakra-ui/react'
import router from './router';


ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
        {/* <CreateFormPage /> */}
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <App />
//     </ChakraProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
