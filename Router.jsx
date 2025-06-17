import { createBrowserRouter } from "react-router";
import App from "./src/App";
import About from "./src/components/About";
import Projects from "./src/components/Projects";
import Testimonials from "./src/components/Testimonials";

const router = createBrowserRouter ([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path: "about",
                element:<About/>
            },
            {
                path:"projects",
                element:<Projects/>
            },
            {
                path:"Testimonials ",
                element:<Testimonials/>
            },
            {
                path:"Not Found",
                element:<NotFound/>

            }
        ]
    }
])