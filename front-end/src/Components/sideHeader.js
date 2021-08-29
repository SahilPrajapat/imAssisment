import { NavLink } from 'react-router-dom';
import './sideHeader.css';


const SideHeader = () => {
  return (
    <ul className="nav flex-column">
        <div className="text-center" style={{height:"90px", cursor:"pointer"}}>
            <img src="./image/logo.png" alt="" style={{height:"70px", width:"70px"}} className=""/>
        </div>
        <NavLink to="/course" className="text-white  text-decoration-none p-3 sideLink">My Courses</NavLink>
        <NavLink to="/groups" className="text-white  text-decoration-none p-3 sideLink">My Group</NavLink>
        <NavLink to="/explore" className="text-white  text-decoration-none p-3 sideLink">Explore</NavLink>
        <NavLink to="/joingroup" className="text-white  text-decoration-none p-3 sideLink">Join Group</NavLink>
    </ul>
  );
};


export default SideHeader;
