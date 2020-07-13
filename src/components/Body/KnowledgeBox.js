import React from "react";
import "./Body.css";


export default function KnowledgeBox({ props }) {

    return(

                    <div className="information-individual-card">
                    <div className="mr-1 card">
                        <div className="card-body">
                            <p className="card-title btn"><small>COVID-19 Knowledge box</small></p>  
                        </div>
                    </div>

                    <div className="information-individual-card">
                        <div className="mr-1 card">
                            <div className="card-body">
                                <h5 className="card-title">Coronavirus vs COVID-19</h5><hr/>
                                <p>
                                    Coronaviruses (according to WHO) are a family of viruses that cause illnesses ranging from the common cold to more severe diseases such as severe acute respiratory syndrome (SARS) and the Middle East respiratory syndrome (MERS).
                                    Their original mode of transmission were Animal to human
                                    <ul>
                                        <li>'CO' stands for Coronavirus</li>
                                        <li>'VI' stands for Virus</li>
                                        <li>'D' stads for Disease</li>
                                        <li>'19'stands for the year it was first discovered, 2019</li>
                                    </ul>
                                    COVID-19 is an acronym.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="information-individual-card">
                        <div className="mr-1 card">
                            <div className="card-body">
                                <h5 className="card-title">COVID-19 Symptoms</h5>
                                <hr/>
                                <p>
                                COVID-19 symptoms includes;
                                    <ul>
                                        <li>Fever</li>
                                        <li>Breathing difficulties</li>
                                        <li>Cough</li>
                                    </ul>
                                It can lead to pneumonia, multiple organ failure and even death in severe cases
                                Estimates of the incubation period - the time between infection and the onset of symptoms - range from one to 14 days. Most infected people show symptoms within five to six days
                                Asymptomatic - Infected patients that do not display any symptoms despite having the virus in their systems are considered to be asymptomatic 
                                </p> 
                            </div>
                        </div>
                    </div>

                <div className="information-individual-card">
                    <div className="mr-1 card">
                        <div className="card-body">
                            <h5 className="card-title">DFace mask vs. face covering: What's the difference? </h5>
                            <hr/>
                            <p>
                            The CDC stresses the use of "face coverings" in its recommendation, not necessarily "face masks." So what's the difference? A face covering can be any cloth that covers the nose and mouth, including a scarf or bandana wrapped around the face.
                            A face mask refers to a more specific shape that usually involves material that's more fitted to the nose, mouth and skull, as through the use of ear straps.
                            It's possible that "face covering" is used to differentiate coverings from surgical and N95 respirator masks that are so critically low in hospitals in New York and the rest of the country. 
                            </p>                                                      
                        </div>
                    </div>
                </div>



                <div className="information-individual-card">
                    <div className="mr-1 card">
                        <div className="card-body">
                            <h5 className="card-title">Personal Protective Equipments(PPEs)</h5>
                            <hr/>
                            <p>
                            What are PPEs ?

                            PPEs are Personal Protective Equipments or specialized clothing to keep one safe while working. PPE include items like gloves, masks, gowns and goggles.

                            How Does PPE Protect me?

                            Your PPE gear protects you from infection by creating a barrier between you and the infection. This barrier reduces the chance of touching, being exposed to, and spreading germs.

                            PPE gear is effective protection for health workers/ people with close contact with infected person if worn, removed, and disposed off correctly and appropriately.

                            As we learned earlier, COVID-19 is primarily transmitted through droplets and direct / indirect contact with contaminated surfaces.
                            Do I need any Personal Protective Equipment (PPE) for myself ?

                            No, so far you ain't an health worker, not in close range (less than 2m) with an infected person or suspected case and it's not recommended by the local authorities of your community 
                            </p>                        
                        </div>
                    </div>
                </div>



                <div className="information-individual-card">
                <div className="mr-1 card">
                    <div className="card-body">
                    <h5 className="card-title">NEC meeting with Bauchi State Gov't, or are in close proximity with someone who did</h5>                         
                    </div>
                </div>
                </div>




                <div className="information-individual-card">
                <div className="mr-1 card">
                    <div className="card-body">
                    <h5 className="card-title">You just returned from UK, FRANCE, SPAIN, NETHERLANDS, GERMANY, UAE, CANADA, USA, in the last two weeks 
                    </h5>                                     
                    </div>
                </div>
                </div>

                <div className="information-individual-card">
                <div className="mr-1 card">
                    <div className="card-body">
                    <h5 className="card-title">                           
                Flight TK625 Arrival date: 
                    </h5>
                    <p>13th of march
                    </p>        
                    </div>
                </div>
                </div>
                </div>
                
                
        );
    }