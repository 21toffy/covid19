import React, { useState, useEffect } from 'react';
import './ReportForm.css';
import axios from 'axios';
import './states.js';


const nStates = ['abuja', 'abia', 'adamawa','akwa','anambra','bauchi','bayelsa','benue','borno','cross river','delta','ebonyi','edo','ekiti','enugu','gombe','imo','jigawa','kaduna','kano','katsina','kebbi','kogi','kwara','lagos','nassarawa','niger','ogun','ondo','osun','oyo','plateaue','rivers','sokoto','taraba','yobe','zamfara'];

const Allsymptoms = ['No symptoms', 'shortness of breadth', 'nasal congestion' ,'dry cough',
'feaver', 'sore throat', 'runny nose', 'diarrhea', 'abdomnalnpain', 'fatigue', 'pressure in the chest'];

// var Allsymptoms=[
//     { id: true, title: 'No symptoms' },
//     { id: true, title: 'shortness of breadth' },
//     { id: true, title: 'nasal congestion' }
// ]


const ReportForm =({closeModal})=> {
    const [values, setValues] = useState([{name: "first", isActive: true},{name: "second", isActive: true},{name: "third", isActive: true},{name: "fourth", isActive: true}]);
    const[me, Setme]=useState([])

    const [filling_for_who, setFilling_for_who] = useState('My self');
    const [title, setTitle] = useState('MR');
    const [naphemad, setNaphemad] = useState(
        {full_name:'', email:'', address:'', phone:''}
    );
    const [gender, setGender] = useState('Female');
    const [traveled, setTraveled] = useState(false);
    const [contact, setContact] = useState(false);
    const [treatment, setTreatment] = useState(false);
    const [state, setState] = useState("Lagos");

    let myRef;
    useEffect(() =>{
        document.addEventListener('click',closeFormModal);
    }, []);
    
    const closeFormModal =(e)=>{
        if(myRef && !myRef.contains(e.target)){
            closeModal();
        }
    }
        
    const handleFormSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target.value);
        axios.post('http://127.0.0.1:8000/report/', {
            // symptoms:event.target.symptoms.value,
            filling_for_who:event.target.filling_for_who.value,
            title:event.target.title.value,
            full_name:event.target.full_name.value,
            phone:event.target.phone.value,
            email:event.target.email.value,
            gender:event.target.gender,
            traveled:event.target.traveled,
            contact:event.target.contact,
            treatment:event.target.treatment,
            state:event.target.state.value,
            address:event.target.address.value,

        })  ;
    }

    const MR = e => {
        e.preventDefault();
        console.log(title)
        setTitle("MR");
    
    }
    
    const MRS = e => {
        e.preventDefault();

        console.log(title)
        setTitle("MRS");

    }

    const MISS = e => {
        e.preventDefault();

        console.log(title)
        setTitle("MISS");

    }

    const DR = e => {
        e.preventDefault();

        console.log(title)
        setTitle("DR");


        }

    const identity=(event)=> {
        setFilling_for_who(event.target.value);
        console.log(filling_for_who)
        };
        const currentstate=(event)=> {
            console.log(state)
            setState(event.target.value);
            };
    
        const Male = e => {
            e.preventDefault();

            setGender('Male');
            console.log(gender)

            }
        const Female = e => {
            e.preventDefault();

            setGender('Female');
            console.log(gender)


            }

    const handleChange = (event)=> {
        console.log(event.target.value);
        
        setNaphemad({...naphemad, [event.target.name]: event.target.value})

        };

    const yestraveled =  e =>{
        e.preventDefault();

        setTraveled(true);
        console.log(traveled)

                }

    const notraveled =  e =>{
        e.preventDefault();

        setTraveled(false);
        console.log(traveled)
                }

    const  yestreatment =  e =>{
                e.preventDefault();

                setTreatment(true);
                console.log(treatment)
                }

    const notreatment =  e =>{
                e.preventDefault();

        setTreatment(false);
        console.log(treatment)


                }
 const yescontact =  e =>{
        e.preventDefault();

    setContact(true);
    console.log(contact)

                }

    const nocontact =  e =>{
        e.preventDefault();

        setContact(false);
        console.log(contact)


                }



    const onClick = (index) => {
        let tmp = values;
        tmp[index].isActive = !tmp[index].isActive;;
        Setme(tmp)
        console.log(me)
    }

        
            return (
                <div  data-v-2d7880ea="">
                    <div className='modal-wrapper' >
                    <form onSubmit={handleFormSubmit} ref={(node) => (myRef = node)} className="form">


                
                    <p>Symptoms</p>
                            <div data-v-2d7880ea="" class="form-field">
                                
                                    {Allsymptoms.map((simp, index) => {
                                        return <button onClick={MR} data-v-2d7880ea="" className="title-button" style={ title=== "MR" ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>{simp}</button>
                                        })}
                            </div><br/><br/>



                <br/>
                <p>Title</p>
                <div data-v-2d7880ea="" class="form-field">
                    <button onClick={MR} data-v-2d7880ea="" className="title-button" style={ title=== "MR" ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>MR</button>
                    <button onClick={MRS} data-v-2d7880ea="" className="title-button" style={ title=== "MRS" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>MRS</button>
                    <button onClick={MISS} data-v-2d7880ea="" className="title-button" style={ title=== "MISS" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>MISS</button>
                    <button onClick={DR} data-v-2d7880ea="" className="title-button" style={ title=== "DR" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>DR</button>
                </div><br/>
                {/* end of title */}
    
    
                {/* im filling for who */}
                <p>im filling for who</p>
                <div className="input-group mb-3">
                    <select className="browser-default custom-select" defaultValue={filling_for_who} onChange={identity} id="filling_for_who">
                        <option value="Some One Else">my self</option>
                        <option value="My Self">someone else</option>
                    </select>
                </div><br/>
                {/* end of im filling for who */}
    
                 {/* full name */}
    
                 <div style={{flex: 6}}>
                 <bold><label for ="full_name">Full name</label></bold>
                    <input value={naphemad.full_name} className="form-control form-control-sm" onChange={handleChange} id="full_name" type="text" name="full_name" placeholder="full name"></input>
                </div><br/>
    
                {/* phone number */}
    
                <div style={{flex: 6}}>
                <bold><label for ="phone">Phone Number</label></bold>
    
                    <input value={naphemad.phone} className="form-control form-control-sm" onChange={handleChange} id="phone" type="text" name="phone" placeholder="phone"/>
                    
                </div><br/>
    
                {/* email address */}
                <div style={{flex: 6}}>
                <bold><label for ="email">Email</label></bold>
    
                    <input value={naphemad.email} className="form-control form-control-sm" onChange={handleChange} id="email" type="email" name="email" placeholder="email"></input>
                </div>
                <br/>
    
                {/* gender */}
    
                <p>Gender</p>
                <div data-v-2d7880ea="" class="form-field">
                    <button onClick={Male} data-v-2d7880ea="" className="title-button" style={ gender=== "Male" ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Male</button>
                    <button onClick={Female} data-v-2d7880ea="" className="title-button" style={ gender=== "Female" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>Female</button>
                    
                </div>
                {/* end okf gender */}
    
                {/* symptoms */}
    
                {/* end of symptoms */}
    
    
    
    
                {/* Have you been to any country(ies) outside 
                            your country of residence in the past month? */}
                <h6>Have you been to any country(ies) outside your country of residence in the past month?</h6>
    
                <div data-v-2d7880ea="" class="form-field">
                    <button onClick={yestraveled} data-v-2d7880ea="" className="title-button" style={ traveled=== true ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Yes</button>
                    <button onClick={notraveled} data-v-2d7880ea="" className="title-button" style={ traveled=== false ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>NO</button>
                    
                </div>
                    <br/><br/>
                    {/* end of Have you been to any country(ies) outside 
                    your country of residence in the past month? */}   
                    
                   
    
                            {/*Are you under treatment for any other ailment?*/}
                            Are you under treatment for any other ailment?
    
                            <div data-v-2d7880ea="" class="form-field">
                                <button onClick={yestreatment} data-v-2d7880ea="" className="title-button" style={ treatment=== true ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Yes</button>
                                <button onClick={notreatment} data-v-2d7880ea="" className="title-button" style={ treatment=== false ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>NO</button>
                                
                            </div>
                    <br/><br/>
                            
    
                            {/* end of Are you under treatment for any other ailment? */}
    
    
    
                            {/* Have you been in contact with any confirmed (COVID-19) case? */}
    
                            Have you been in contact with any confirmed (COVID-19) case?
    
                            <div data-v-2d7880ea="" class="form-field">
                                <button onClick={yescontact} data-v-2d7880ea="" className="title-button" style={ contact=== true ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Yes</button>
                                <button onClick={nocontact} data-v-2d7880ea="" className="title-button" style={ contact=== false ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>NO</button>
                            </div>
                    <br/><br/>                        
                            {/* end of Have you been in contact
                             with any confirmed (COVID-19) case? */}
    
                            {/* state */}
                            <p>states</p>
                            <div className="input-group mb-3">
                                <select className="browser-default custom-select" name="state" onChange={currentstate} id="states">
                                    {nStates.map((nstates, index) => {
                                        return <option value={nstates}>{nstates}</option>
                                        })}
                                </select>
                            </div><br/><br/>
    
                            {/* end of state */}
    
                 {/* address */}
                 <p>address</p>
                    <div style={{}}>    
              <textarea value={naphemad.address} className="form-control form-control-sm" onChange={handleChange} placeholder="enter you address" id="address" type="textarea" name="address"/>     
                
                    </div><br/>
                    {/* <div data-v-2d7880ea="" className="form-field justify-end"> */}
                    <button data-v-2d7880ea="" type="submit" className="justify-end py-2 px-8 bg-purple-800 text-white hover:bg-orange-600 focus:outline-none text-2xl" >Submit</button>
                    {/* </div>                 */}
                </form>    
                    </div>                
                </div>
    
    
            );
        

}

export default ReportForm;