import { Route, Routes, Navigate } from "react-router-dom"
// import DogList from "./DogList"
import Dog from "./Dog"

const RouteList = () => {    
    return (
        <Routes>
            {/* <Route exact path="/dogs" element={<DogList/>}/> */}
            <Route 
                exact path="/dogs/:dogName"
                element={<Dog/>}
            />
            <Route
                path=""
                element={<Navigate to="/dogs" replace />}
            />
        </Routes>
    )
}

export default RouteList