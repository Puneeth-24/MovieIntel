import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Layout from "./Layout"
import Home from "./pages/Home"
import MovieDetail from './pages/MovieDetail';
import './style/App.css';



const router=createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'movie/:id',
            element:<MovieDetail/>
        }

    ]
}]);

function App(){
    return (<div className='app'>
        <RouterProvider router={router}/>
    </div>);
}

export default App;