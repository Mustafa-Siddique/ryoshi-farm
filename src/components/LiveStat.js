import React from "react";

export default function LiveStat() {
  return (
    <div className="row mx-auto liveStat">
      <div className="col my-2 m-md-0">
        <div class="card bg-transparent border-1 border-secondary" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title text-secondary">TOTAL VALUE LOCKED</h5>
            <h6 class="card-subtitle mb-2 fs-4 text-light">000000.00</h6>
          </div>
        </div>
      </div>
      <div className="col my-2 m-md-0">
        <div class="card bg-transparent border-1 border-secondary" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">TOTAL REWARDS</h5>
            <h6 class="card-subtitle mb-2 fs-4 text-light">000000.00</h6>
          </div>
        </div>
      </div>
      <div className="col my-2 m-md-0">
        <div class="card bg-transparent border-1 border-secondary" style={{width: "18rem"}}>
          <div class="card-body">
            <h5 class="card-title">RYOSHI TOKEN PRICE</h5>
            <h6 class="card-subtitle mb-2 fs-4 text-light">000000.00</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
