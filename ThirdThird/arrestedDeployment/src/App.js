import { lazy, Suspense } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//import BlogPage, { loader as postsLoader } from './pages/Blog'; //changing BlogPage loading from 'eagerly' to 'lazy'
import HomePage from './pages/Home';
//import PostPage, { loader as postLoader } from './pages/Post';  //changing PostPage loading from 'eagerly' to 'lazy'
import RootLayout from './pages/Root';

//lazy loading BlogPage component
const BlogPage = lazy(() =>
  import('./pages/Blog')
);

const PostPage = lazy(() =>
  import('./pages/Post')
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'posts',
        children: [
          //{ index: true, element: <BlogPage />, loader: postsLoader }, //eager loading

          //lazy loading BlogPage & its loader
          // \-> PS: lazy loading == downloading parts of the system only when they're called, and not at once
          {
            index: true,
            element: <Suspense fallback={<p>Loading...</p>}>
              <BlogPage />
            </Suspense>, // \-> PS: Suspense == waits for the content to be loaded before showing it

            loader: () =>
              //'import' returns a promise
              import('./pages/Blog').then(module => module.loader()) //loading loader from 'BlogPage' module
          },

          //lazy loading PostPage & its loader (same as above)
          {
            path: ':id',
            element: <Suspense fallback={<p>Loading...</p>}>
              <PostPage />
            </Suspense>,

            //OBS: also sending PageParams to loader
            loader: ({params}) =>
              import('./pages/Post').then(module => module.loader({params}))

          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
