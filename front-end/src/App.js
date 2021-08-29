import './App.css';
import TopHeader from './Components/topHeader';
import SideHeader from './Components/sideHeader';
import { Redirect, Route, Switch } from 'react-router-dom';
import Courses from './Components/Pages/Courses';
import Groups from './Components/Pages/Groups';
import Explore from './Components/Pages/Explore';
import JoinGroup from './Components/Pages/JoinGroup';

function App() {
  return (
    <div className="container-fluid" style={{height:"100vh"}}>
      <div className="row" style={{height:"100%"}}>
        <div className="col-2 p-0" style={{backgroundColor:"#055646", height:"100vw"}}>
          {/* side header */}
          <SideHeader/>
        </div>
        <div className="col border p-0">
            {/* top header */}
            <TopHeader/>
            <div className="mt-5">
              <Switch>
                {/* page components */}
                  <Route path="/course" component={Courses} />
                  <Route path="/groups" component={Groups} />
                  <Route path="/explore" component={Explore} />
                  <Route path="/joingroup" component={JoinGroup}/>
                  <Redirect from="/" to="/course"/>
              </Switch>

            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
