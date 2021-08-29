function JoinGroup() {
  return (
    <div className="mx-auto" style={{width:"60%"}}>
      <div className="row p-4" style={{boxShadow:"0 4px 8px -2px #ededed"}}>
        <div className="col-sm-6">

            <div className="card-body">
              <h5 className="card-title">Enter Group Code</h5>
                <input type="text" className="form-control my-4 py-2" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
              <a href="#" className="btn btn-success w-100 py-2" >
                Join Group
              </a>
            </div>
        </div>
        <div className="col-sm-6 border">
              <h5 className="card-title mt-4">Group Codes</h5>
              <p className="card-text">
                Learning in Imarticus happens in Learning Groups. Each Learning
                Group is identified with a unique 6-digit Group Code. Join a
                Learning Group by entering its Group Code.
              </p>
            </div>
      </div>
    </div>
  );
}

export default JoinGroup;
