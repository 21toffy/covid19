// import React, { useState, useEffect } from "react";
// import "./Body.css";
// import axios from "axios";
// import Riskchecker from './Riskchecker';
// import { Link } from 'react-router-dom';
// import ReportForm from './../Report/ReportForm';

// export default function FirstSection ({ props }) {

//     const [overall, setOverall] = useState([]);
//     const [states, setState] = useState([]);

//   useEffect(() => {

//     axios
//       .get("https://covidnigeria.herokuapp.com/api")
//       .then((response) => {
//         setOverall(response.data.data);
//         setState(response.data.data.states)
//         console.log(response.data.data.states);

        
            
//       });
//   }, []);
//   var mydate = new Date().toLocaleDateString();
//   var hospitalizedPercentage = Number((100*overall.totalActiveCases/overall.totalConfirmedCases).toFixed(1));
//   var deathsPercentage = Number((100*overall.death/overall.totalConfirmedCases).toFixed(1));
//   var recoveryPercentage = Number((100*overall.death/overall.discharged).toFixed(1));
  


//   return (
//     <div className="body">
//     <p className="dashboard-text" style={{marginTop:"70px"}}>
//     Dashboard
//     </p>
//     <h2 className="dashboard-title">
//     COVID-19 Virus Outbreak: Nigeria
//     </h2>

             


//     <div className="stats-container">
//     <div className="row">


//     <div  className="individual-card col-md-3 col-sm-12">
//         <div className="card">
//             <div className="card-body">
//                 <p className="card-title">Total Cases </p>
//                 <h2>{overall.totalConfirmedCases}</h2>
//                 <small>
//                 {mydate}

//                 </small>
//                 <p className="card-text">
//                 </p>
                
//             </div>
//         </div>
//     </div>
    


//     <div className="individual-card col-md-3 col-sm-12">
//         <div className="card">
//             <div className="card-body">
//                 <p className="card-title">currently hospitalized</p>
//                 <h2>{overall.totalActiveCases}</h2>
//                 <small>
//                 {hospitalizedPercentage} % of total

//                 </small>
             
                
//             </div>
//         </div>
//     </div>

//     <div className="individual-card col-md-3 col-sm-12">
//         <div className="mr-3 card">
//             <div className="card-body">
//                 <p className="card-title">Deaths</p>
//                 <h2>{overall.death}</h2>
//                 <small>
//                 {deathsPercentage} % of total
//                 </small>
                
//             </div>
//         </div>
//     </div>


//     <div className="individual-card col-md-3 col-sm-12">
//         <div className="mr-1 card">
//             <div className="card-body">
//                 <p className="card-title">Discharged
//                 <h2>{overall.discharged}</h2><small>
//                {recoveryPercentage} % of total
//                </small>
//                </p>
               
                
//             </div>
//         </div>
//     </div>

//     </div>
//     </div>

//     <Riskchecker />

// {/* <ReportForm/> */}


//     <div className="second-section">

//     <div className= "row stats-container">

//         <div className= "col-md-6 individual-card2">
            
//         <table style={{width:"100%"}}>
        
//             <th>
//             <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
//             </th>
//             <tr>
//                 <th  className="table-extra">state</th>
//                 <th  className="table-extra">casses</th>
//             <th  className="table-extra">discharged</th>
//             <th  className="table-extra">deaths</th>
//             </tr>
//             {states.map((stat, index) => (
//             //  <div  className= "col-md-6 individual-card">
//                     <tr key={stat._id} index={stat._id}>
//                         <td  className="table-extra">{stat.state}</td>
//                         <td className="confirmed">{stat.confirmedCases}</td>
//                         <td className="discharged">{stat.discharged}</td>
//                         <td className="death">{stat.death}</td>
//                     </tr>
//             // </div>


//              ))}
//         </table>
//         </div>
//         <div className= "col-md-6 individual-card3">

// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">


//     <button type="button" 
//         className="btn2 mine block
//         focus:outline-none mx-auto 
//         px-10 rounded-full text-xl
//         font-medium py-2 mt-4
//         bg-indigo-700 text-white ">
//             <Link to="/" className="nav-link">  Report a case </Link></button>
//      <p className="btn">Early Infection Sources</p>
 
//     {/* <button  class="pillbutton block focus:outline-none mx-auto px-10 text-xl font-medium py-2 mt-4">
//     <Link to="/" className="nav-link">  Report a case <Link>
//     </button> */}
       
        
//     </div>
// </div>
// </div>


// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//         <h5 className="card-title">Residents of Atiku Abubakar's Estate 
//        </h5>
//        <p>
//        Tassle Palm
//        </p>
       
        
//     </div>
// </div>
// </div>



// <div className="individual-card">
// <div className="mr-1 card">
//     <div className="card-body">
//         <p>On 20/03/2020</p>
//     <h5 className="card-title">Flight BA75 
//        </h5>
//        <p>
//        Arrived to Lagos from UK
//        </p>
       
        
//     </div>
// </div>
// </div>


// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//     <p>On 18/03/2020</p>
//     <h5 className="card-title">Aero Contractor Flight 
//        </h5>
//        <p>
//        From Lagos to Abuja with Atiku's Son or Bauchi Governor
//        </p>
       
        
//     </div>
// </div>
// </div>



// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//     <h5 className="card-title">Direct or indirect contact with Bauchi State Governor 
//        </h5>
//        <p>
//        Attended Press conference with Bauchi State Governor, or have been in contact with a Gov't official who has been in the same premises as the Governor bank
//        </p>
       
        
//     </div>
// </div>
// </div>




// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//     <h5 className="card-title">The launch of 2500 Housing unitse 
//        </h5>
//        <p>
//        Baucho state
//        </p>
       
        
//     </div>
// </div>
// </div>



// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//     <h5 className="card-title">NEC meeting with Bauchi State Gov't, or are in close proximity with someone who did</h5>
                
        
//     </div>
// </div>
// </div>




// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//     <h5 className="card-title">You just returned from UK, FRANCE, SPAIN, NETHERLANDS, GERMANY, UAE, CANADA, USA, in the last two weeks 
//        </h5>              
        
//     </div>
// </div>
// </div>

// <div className="individual-card ">
// <div className="mr-1 card">
//     <div className="card-body">
//     <h5 className="card-title">
            
// Flight TK625 Arrival date: 
//        </h5>
//        <p>13th of march
//        </p>        
//     </div>
// </div>
// </div>     
// </div>
// </div>
// </div>
//         </div>
     
//     );
// }