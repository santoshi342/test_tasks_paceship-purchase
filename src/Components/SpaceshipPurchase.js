import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SpaceshipPurchase(){
	const bestPrice = 1000;
	const [color , setColor] = useState(0)
	const [power, setPower] =useState(0);
	const [warpDrive , setWarpDrive] =useState(0);
	const [packages , setPackages]=useState(0);

    const [active1, setActive1] = useState("");
    const [active2,setActive2] =useState("");
    const [active3,setActive3] =useState("");
    const [active4,setActive4] =useState("");


  const handleClick1 = e => {  
  	setColor(0,true)
    setActive1(e.target.id); 
  };

const handleClick2 = e => {
	setColor(100)
    setActive1(e.target.id);
 };

  const handleClick3 = e => {
  	 setColor(200)
     setActive1(e.target.id);
  };

    const handleClick4 = e => {
   setPower(0)
    setActive2(e.target.id);
  };
    
    const handleClick5 = e => {
    setPower(200)
    setActive2(e.target.id);
  };
     const handleClick6 = e => {
    setPower(500)
    setActive2(e.target.id);
  };
     const handleClick7 = e => {
    setWarpDrive(0)
    setActive3(e.target.id);
  };
     const handleClick8 = e => {
    setWarpDrive(1000)
    setActive3(e.target.id);
  };

      const handleClick9 = e => {
    setPackages(0)
    setActive4(e.target.id);
  };
       const handleClick10 = e => {
    setPackages(100)
    setActive4(e.target.id);
  };
         const handleClick11 = e => {
    setPackages(500)
    setActive4(e.target.id);
  };



	return(

		<div class="container">
  			<div class="row">
  		
  				<h4 className="mainHeading">Spaceship Configurator</h4>
   			 	<div class="col">   			 	
					<h5>Select Color:</h5>
					
					<button onClick={handleClick1} id={"1"} className={active1 === "1" ?  "borderActive": "active1"} style={{ borderRadius:'4px' }}><button className="inbutton1"></button><br/>+0 &euro; <br/>Snow</button>{" "}
					<button onClick={handleClick2} id={"2"} className={active1 === "2" ? "borderActive": "active1"}style={{ borderRadius:'4px' }}><button className="inbutton2"></button><br/>+100 &euro; <br />Valcono</button>{" "}
					<button onClick={handleClick3} id={"3"} className={active1 === "3" ? "borderActive": "active1"} style={{ borderRadius:'4px' }}><button className="inbutton3"></button><br/>+200 &euro; <br/> Sky</button><br/><br/>

					<h5>Select Power:</h5>
					<button onClick={handleClick4} id={"4"} className={active2 === "4" ? "borderActive": "active2"} style={{ borderRadius:'4px' }}>100 MW <br/>+0 &euro; </button>{" "}
					<button onClick={handleClick5} id={"5"} className={active2 === "5" ? "borderActive": "active2"} style={{ borderRadius:'4px' }}>150 MW <br/> +200 &euro;</button>{" "}
					<button onClick={handleClick6} id={"6"} className={active2 === "6" ?  "borderActive": "active2"} style={{ borderRadius:'4px' }}>200 MW <br/>+500 &euro; </button><br/><br/>

					<h5>Warp Drive</h5>
					<button onClick={handleClick7} id={"7"} className={active3 === "7" ? "borderActive": "active3"} style={{ borderRadius:'4px' }} > NO <br/>+0E</button>{" "}
					<button onClick={handleClick8} id={"8"} className={active3 === "8" ? "borderActive": "active3"} style={{ borderRadius:'4px' }}>YES <br/>+1000 &euro;</button><br/><br/>

					<h5>Select Option Package:</h5>
					<button onClick={handleClick9} id={"9"} className={active4 === "9" ? "borderActive": "active4"} style={{ borderRadius:'4px' }}>Basic <br/>+0 &euro;
					</button>{" "}
					<button onClick={handleClick10}  id={"10"} className={active4 === "10" ? "borderActive": "active4"} style={{ borderRadius:'4px' }}>Sport<br/> +100 &euro;
					</button>{" "}
					
					<button onClick={handleClick11} id={"11"} className={active4 === "11" ? "borderActive": "active4"} style={{ borderRadius:'4px' }}>Lux <br/> +500 &euro;
					
					</button><br/><br/>
					</div><br/><br/>      			
  
       		
   			
   				<div class="col" id="righttotal">
   				<div style={{border:"1px solide black"}}>
		    		<h5>Best Price: <spam style={{ marginLeft: '7.5rem' }} className="whitespace"> {bestPrice}&euro;</spam></h5>
					<h5>Color:<span style={{ marginLeft: '10.5rem' }}></span>+{color}&euro;</h5>
					<h5>Power:<span style={{ marginLeft: '10rem' }}></span>+{power}&euro;</h5>
					<h5>Warp Driver:<span style={{ marginLeft: '6.7rem' }}></span>+{warpDrive}&euro;</h5>
					<h5>Option package:<span style={{ marginLeft: '4.5rem' }}></span>+{packages}&euro;</h5>
					<hr style={{width:"537px"}}/>
					<h5>Total:<span style={{ marginLeft: '11rem' }}></span>
					{bestPrice+color+power+warpDrive+packages}&euro;</h5> 
					</div>   	
 				</div> 				
  			</div>  		
  		</div>
		)
}

