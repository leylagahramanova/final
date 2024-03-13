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
  <div className="zigzag">
  <div className="zigzag-item">
    <div className="content">
      <img className="circle" style={{ marginRight: '8rem' }} src={beans} alt="Event 1" />
      <h4 className="right" style={{ marginRight: '5rem', paddingTop: "4rem", width: '347px' }}>
        Beans are the seeds of the coffee cherry
      </h4>
    </div>
  </div>

  <div className="arrow" id="first">
    <img src={arrow} alt="Arrow" />
  </div>

  <div className="zigzag-item">
    <div className="content" style={{ paddingLeft: '40rem' }}>
      <div className="text">
        <h4 className='first' style={{ marginRight: '1rem', width: '353px' }}>They are cleaned, triaged, and processed.</h4>
        <img className="circle" style={{ marginLeft: '15rem',  }}src={process} alt="Event 2" />
        <h4 className='second' style={{ width: '353px' }}>They go through a roasting process.</h4>
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

  <div style={{ paddingLeft: "30rem"}} className="zigzag-item">
    <div className="content">
      <h4 style={{ paddingTop: "15rem", width: '370px' }}>Freshly roasted beans make the best cup of coffee.</h4>
      <img className="last" style={{ borderRadius: '25px', height: '374px', width: "374px" }} src={cup} alt="Event 3" />
    </div>
  </div>
  </div>
 
</div>


        // <div  id="wrap" className='home'>
        //     <div id="content">
        //         <section className='process'>
        //             <div className="container">
        //             <div className="start">
        //                 <ul className='row'>
        //                     <li>
        //                         <div className="left">
        //                             <div className="icon">
        //                                 <img src="" alt=""/>
        //                             </div>
        //                         </div>
        //                         <div class="media-body">
        //                         <p>Beans are the seeds of the coffe cherry</p>
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </div>
        //             </div>
        //         </section>
        //     </div>
        // </div>




    )
}
export default ZigZag
{/* <div>
      <section className="about">
      <div className="about-text">
          <article id="tablet2">
           <h4 className='first'>Beans are the seeds of the coffe cherry</h4>
          </article>
        </div>
        <article id="tablet">
          <img
            src={beans}
            alt="A photo of Ada Lovelace"
            className="portrait"
          />
        </article>
      </section>

      <section className="warnings">
        <article id="mobile">
        <h4 className='second'>They are cleaned, triaged and processed.</h4>

          <img className="warn-pic" src={ground}  alt="Warning" />
          <h4>They go through a roasting process.</h4>
        </article>
      </section>

      <section className="facts">
        <aside id="desktop">
          <h4>Beans are Ground</h4>
          <img className="fact-pic" src={ground}  alt="Fact" />
          
        </aside>
        
      </section>
      <section className="fresh">
        <aside id="desktop">
          <h4>Freshly roasted beans make the best cup of coffee.</h4>
          <img className="fact-pic" src={cup}  alt="Fact" />
          
        </aside>
        
      </section>
<<<<<<< HEAD
    </div> */}
