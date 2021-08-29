import {UserCircleIcon} from "@heroicons/react/solid";

function TopHeader() {
  return (
    <div className="navbar bg-white py-2 navbar-light" style={{paddingLeft:"20%", paddingRight:"20%", boxShadow:"0 8px 16px -4px #aeaeae"}}>
      <nav className="navbar-brand">My Courses</nav>
      <div>    
        <div class="dropdown">
            <UserCircleIcon style={{height:"40px"}}/>
          <button
            className="btn dropdown-toggle w-3"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{outline:"none"}}
          >
          user
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Edit Profile
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Contact Us
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
