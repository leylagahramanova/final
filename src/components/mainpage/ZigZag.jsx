import React from 'react'
import beans from '../../img/beans.png';
import process from '../../img/process.png';
import ground from '../../img/ground.png';
import cup from '../../img/cup.jfif';
import arrow from '../../img/arrow.png';
function ZigZag() {
  return (
    <div className="zigzag-timeline">
      <h2>PROCESS</h2>
      <div className="zigzag-item">
        <div className="content">
          <img className="circle" src={beans} alt="Event 1" />
          <h4 className="right">Beans are the seeds of the coffee cherry</h4>
        </div>
      </div>
  
      <div className="arrow" id="first">
        <img src={arrow} alt="Arrow" />
      </div>
  
      <div className="zigzag-item">
        <div className="content" id="content-triaged">
          <div className="text">
            <h4 className='first'>They are cleaned, triaged, and processed.</h4>
            <img className="circle" id="roasting" src={process} alt="Event 2" />
            <h4 className='second'>They go through a roasting process.</h4>
          </div>
        </div>
      </div>
  
      <div className="arrow" id="second">
        <img src={arrow} alt="Arrow" />
      </div>
  
      <div className="zigzag-item">
        <div className="content-1">
          <h4>Beans are Ground</h4>
          <img src={ground} alt="Event 3" />
        </div>
      </div>
  
      <div className="arrow" id="third">
        <img src={arrow} alt="Arrow" />
      </div>
  
      <div className="zigzag-item">
        <div className="content">
          <h4>Freshly roasted beans make the best cup of coffee.</h4>
          <img className="last" src={cup} alt="Event 3" />
        </div>
      </div>
    </div>
  );
}
export default ZigZag