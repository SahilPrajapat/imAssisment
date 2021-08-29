import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
import axios from "axios";

const MAX_RATING = 5;
const MIN_RATING = 3;

function Explore() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const req = await axios.get("https://imarticus-test.herokuapp.com/cards");
      console.log(req.data);

      setPeople(req.data);
    }

    fetchdata();
  }, []);

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  return (
    <div className="mx-auto" style={{ width: "75%", height: "80vh" }}>
      <div className="row">
      <h4 className="col-6">Free Course</h4>

      <nav className="col-6" aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
  
      </div>
      {/* button */}
      <div className="row">
        {people.map((person) => (
          <div
            className="col-3 card mx-2 px-0"
            key={person._id}
            style={{
              width: "220px",
              height: "240px",
              marginTop: "15px",
              marginBottom: "40px",
            }}
          >
            <img
              src={`${person.imgUrl}`}
              className="card-img-top"
              style={{ height: "60%", width: "100%" }}
              alt="..."
            />
            <div className="card-body" style={{ height: "20%" }}>
              <h5 className="card-title" style={{ fontSize: "15px" }}>
                {person.name}
              </h5>
              <p
                className="card-text"
                style={{ fontSize: "14px", marginBottom: "-1px" }}
              >
                {person.enroll} Enrollment
              </p>
              <div className="flex" style={{ fontSize: "15px" }}>
                {Array(rating)
                  .fill()
                  .map((_, i) => (
                    <StarIcon style={{ height: "15px" }} />
                  ))}
                Ratings{" "}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 style={{ marginBottom: "20px" }}>Premium Course</h4>
      <div className="card mx-2" style={{ height: "200px", width: "180px" }}>
        <img
          src="../image/gd.jpg"
          className="card-img-top"
          alt="..."
          style={{ height: "140px", width: "180px" }}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ fontSize: "15px" }}>
            Course Name
          </h5>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon style={{ height: "15px" }} />
              ))}
            Ratings{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
