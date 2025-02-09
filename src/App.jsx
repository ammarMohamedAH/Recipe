
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Mealinfo from './Components/Mealinfo/Mealinfo'
import Category from './Components/Category/Category'
import NotFound from './Components/NotFound/NotFound'

function App() {
 
  let routes = createBrowserRouter([{
    path:'/', element:<Layout></Layout>,children:[
      {index:true,element:<Home></Home>},
      {path:'/category/:cat',element:<Category></Category>},
      {path:'/mealdet/:id',element:<Mealinfo></Mealinfo>},
      {path:'*',element:<NotFound></NotFound>},
    ]
  }])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
