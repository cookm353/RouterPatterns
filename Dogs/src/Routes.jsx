import { Route, Switch, Redirect } from "react-router-dom"
import DogList from "./DogList"
import Dog from "./Dog"

const Routes = () => {    
    return (
        <Switch>
            <Route exact path="/dogs/:dogName">
                <Dog/>
            </Route>
            <Route exact path="/dogs">
                <DogList/>
            </Route>
            <Redirect to="/dogs" />
        </Switch>
    )
}

export default Routes