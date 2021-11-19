import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {PageNotFound} from "./404";
import {VisaComponent} from "./cards/visa";
import {MasterCardComponent} from "./cards/mastercard";
import {AXComponent} from "./cards/ax";


function WelcomeMessage() {
    return (
        <div>
             Bienvenido a CC Generator
        </div>
    )
}


export default function CCGeneratorApp() {
  return (
    <div className={'app_wrapper'}>
        <Router>
            <Header/>

            <div className="content_wrapper">
                <Switch>
                    <Route exact path="/" component={VisaComponent}/>
                    <Route exact path="/visa" component={VisaComponent}/>
                    <Route exact path="/mastercard" component={MasterCardComponent}/>
                    <Route exact path="/ax" component={AXComponent}/>
                    <Route component={VisaComponent}/>
                </Switch>
            </div>

            <Footer/>
        </Router>
    </div>
  );
}