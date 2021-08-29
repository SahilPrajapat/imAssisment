function Courses() {
  return (
        <div className="card mb-3 mx-auto p-3" style={{width:"65%"}}>
            <div className="row g-0">
            <div className="col-md-4">
                <img src="../image/ml.jpg" className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 my-auto">
                <div className="card-body display-select">
                <div className="row m-auto">
                    <div className="col-8">
                        <p className="card-title">Introduction to Machnie Learning</p>
                        <div className="progress">
                            <div
                            className="progress-bar"
                            role="progressbar"
                            style={{width:"25%"}}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            >
                            25%
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <button type="button" className="btn btn-outline-success">Start Course</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
  );
}

export default Courses;
