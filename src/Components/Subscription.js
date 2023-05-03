import React, { useState } from 'react'
import Sidenav from './Sidenav'
import Navbar from './Navbar'
import SubscriptionCard from './SubscriptionCard';

function Subscription() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <Navbar />
      <Sidenav />


      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}

          >
            Pay-As-You-Go
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Sync (Automated Cleaning)
          </button>
        </div>


        <div className="content-tabs">

          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Only pay for what you use.</h2>
            <p>
              The more you verify, the lower your cost.
              <SubscriptionCard />
            </p>
          </div>
        </div>




        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Subscription plans to clean your <br /> lists every single day.</h2>
          <p>
            Clean your email lists on a near-daily basis to ensure accurate data all the time.
            <SubscriptionCard />
          </p>
        </div>
      </div>

    </>

  )
}

export default Subscription
