import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  CreateFormPage,
  PreviewForm,
  BlankPage
} from './page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BlankPage/>,
    children: [
      {
        path: 'forms',
        element: <CreateFormPage />,
      },
      {
        path: 'add-forms/:id',
        element: <PreviewForm />,
      },
    ],
  },
  // {
  //   path: '/test',
  //   element: <PreviewForm />
  // }
]);

export default router;
