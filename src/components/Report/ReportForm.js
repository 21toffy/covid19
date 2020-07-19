import React from 'react';
import './ReportForm.css';
import axios from 'axios';
import './states.js';
import PersonTitle from './ReportComponents/PersonTitle';


const nStates = ['abuja', 'abia', 'adamawa','akwa','anambra','bauchi','bayelsa','benue','borno','cross river','delta','ebonyi','edo','ekiti','enugu','gombe','imo','jigawa','kaduna','kano','katsina','kebbi','kogi','kwara','lagos','nassarawa','niger','ogun','ondo','osun','oyo','plateaue','rivers','sokoto','taraba','yobe','zamfara'];

// const Allsymptoms = ['No symptoms', 'shortness of breadth', 'nasal congestion' ,'dry cough',
// 'feaver', 'sore throat', 'runny nose', 'diarrhea', 'abdomnalnpain', 'fatigue', 'pressure in the chest'];
var Allsymptoms=[
    { id: 0, title: 'No symptoms' },
    { id: 1, title: 'shortness of breadth' },
    { id: 2, title: 'nasal congestion' }
]
const BUTTONS = [
    { id: 0, title: 'button1' },
    { id: 1, title: 'button2' },
    { id: 2, title: 'button3' }
]
class ReportForm extends React.Component {
    state = {
        display:true,
        values: [],
        filling_for_who: "",
        title: "MR",
        full_name: "",
        phone: "",
        email: "",
        gender: "Female",
        traveled: false,
        contact: false,
        treatment: false,
        state: "",
        address: ""
    }
  

    
    handleFormSubmit = (event) =>{
        // console.log(event.target.value);
        axios.post('http://127.0.0.1:8000/report/', {
            symptoms:event.target.symptoms.value,
            filling_for_who:event.target.filling_for_who.value,
            title:event.target.title.value,
            full_name:event.target.full_name.value,
            phone:event.target.phone.value,
            email:event.target.email.value,
            gender:event.target.gender.value,
            traveled:event.target.traveled.value,
            contact:event.target.contact.value,
            treatment:event.target.treatment.value,
            state:event.target.state.value,
            address:event.target.address.value,

        })
    }

    MR = e => {
        console.log(this.state.title)
        e.preventDefault();
        this.setState({
            title: 'MR'
    });
    
    }
    
    MRS = e => {
        console.log(this.state.title)
    e.preventDefault();
    this.setState({
        title: 'MRS'
    });
    }

    MISS = e => {
        console.log(this.state.title)
    e.preventDefault();
    this.setState({
        title: 'MISS'
    });
    }

    DR = e => {
        console.log(this.state.title)
    e.preventDefault();
    this.setState({
        title: 'DR'
    });
        }

    handleRadioChange=(event)=> {
        console.log(event.target.value);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        };
    
        Male = e => {
            console.log(this.state.gender)
        e.preventDefault();
        this.setState({
            gender: 'Male'
        });
            }
            Female = e => {
                console.log(this.state.gender)
            e.preventDefault();
            this.setState({
                gender: 'Female'
            });
                }

    handleChange = (event)=> {
        console.log(event.target.value);
        this.setState({...this.state,
            [event.target.name]: event.target.value
        });
        };
    yestraveled =  e =>{
        console.log(this.state.traveled)

        e.preventDefault();
            this.setState({
                traveled: 'true'
            });
                }

    notraveled =  e =>{
        console.log(this.state.traveled)
        e.preventDefault();
            this.setState({
                traveled: 'false'
            });
                }

     yestreatment =  e =>{
        console.log(this.state.treatment)
        e.preventDefault();
            this.setState({
                treatment: 'true'
            });
                }

    notreatment =  e =>{
        console.log(this.state.treatment)
        e.preventDefault();
            this.setState({
                treatment: 'false'
            });
                }
 yescontact =  e =>{
    console.log(this.state.contact)

        e.preventDefault();
            this.setState({
                contact: true
            });
                }

    nocontact =  e =>{
        console.log(this.state.contact)

        e.preventDefault();
            this.setState({
                contact: false
            });
                }

    open = e =>{
        console.log(this.state.display)
        this.setState({
            display: !this.state.display
    });

    }

    close = e =>{
        console.log(this.state.display)

        this.setState({
            display: !this.state.display    
    })
    
    }

    multiple = button => {
        let tmp = this.state.values;
        console.log(tmp)
        if (this.state.values.includes(button)) {
            this.setState({
                values: this.state.values.filter(el => el !== button)
            })
        } else {
            tmp.push(button);
            this.setState({
                values: tmp
            })
        }
    }

    render() {
        if(this.state.display){
            return (
                <div className='modal-wrapper'  data-v-2d7880ea="">
                <form className="form" onSubmit={this.handleFormSubmit}>
                 <button className="close-form"  onClick={this.close}><h1>x</h1></button>

                {/* title */}


                <div>
                {BUTTONS.map(bt => (
                    <p
                        key={bt.id}
                        onDoubleClick={() => this.multiple(bt.id)}
                        className="title-button">
                        {bt.title}
                    </p>
                ))}
                        {/* {Allsymptoms.map((bt, index) => {
                                            return <button onClick={() => this.handleMultipleButton(bt[index])}> {bt} </button>
                                            })} */}
                {/* <button onClick={this.handleMultipleButton}> click </button> */}
            </div>




                <br/>
                <p>Title</p>
                <div data-v-2d7880ea="" class="form-field">
                    <button onClick={this.MR} data-v-2d7880ea="" className="title-button" style={ this.state.title=== "MR" ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>MR</button>
                    <button onClick={this.MRS} data-v-2d7880ea="" className="title-button" style={ this.state.title=== "MRS" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>MRS</button>
                    <button onClick={this.MISS} data-v-2d7880ea="" className="title-button" style={ this.state.title=== "MISS" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>MISS</button>
                    <button onClick={this.DR} data-v-2d7880ea="" className="title-button" style={ this.state.title=== "DR" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>DR</button>
                </div><br/>
                {/* end of title */}
    
    
                {/* im filling for who */}
                <p>im filling for who</p>
                <div className="input-group mb-3">
                    <select className="browser-default custom-select" onChange={this.handleRadioChange} id="filling_for_who">
                        <option value="My Self">my self</option>
                        <option value="Some One Else">someone else</option>
                    </select>
                </div><br/>
                {/* end of im filling for who */}
    
                 {/* full name */}
    
                 <div style={{flex: 6}}>
                 <bold><label for ="full_name">Full name</label></bold>
                    <input value={this.state.full_name} className="form-control form-control-sm" onChange={this.handleChange} id="full_name" type="text" name="full_name" placeholder="full name"></input>
                </div><br/>
    
                {/* phone number */}
    
                <div style={{flex: 6}}>
                <bold><label for ="phone">Phone Number</label></bold>
    
                    <input value={this.state.phone} className="form-control form-control-sm" onChange={this.handleChange} id="phone" type="text" name="phone" placeholder="phone"/>
                    
                </div><br/>
    
                {/* email address */}
                <div style={{flex: 6}}>
                <bold><label for ="email">Email</label></bold>
    
                    <input value={this.state.email} className="form-control form-control-sm" onChange={this.handleChange} id="email" type="email" name="email" placeholder="email"></input>
                </div>
                <br/>
    
                {/* gender */}
    
                <p>Gender</p>
                <div data-v-2d7880ea="" class="form-field">
                    <button onClick={this.Male} data-v-2d7880ea="" className="title-button" style={ this.state.gender=== "Male" ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Male</button>
                    <button onClick={this.Female} data-v-2d7880ea="" className="title-button" style={ this.state.gender=== "Female" ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>Female</button>
                    
                </div>
                {/* end okf gender */}
    
                {/* symptoms */}
    
                {/* end of symptoms */}
    
    
    
    
                {/* Have you been to any country(ies) outside 
                            your country of residence in the past month? */}
                <h6>Have you been to any country(ies) outside your country of residence in the past month?</h6>
    
                <div data-v-2d7880ea="" class="form-field">
                    <button onClick={this.yestraveled} data-v-2d7880ea="" className="title-button" style={ this.state.traveled=== true ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Yes</button>
                    <button onClick={this.notraveled} data-v-2d7880ea="" className="title-button" style={ this.state.traveled=== false ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>NO</button>
                    
                </div>
                    <br/><br/>
                    {/* end of Have you been to any country(ies) outside 
                    your country of residence in the past month? */}   
                    
                   
    
                            {/*Are you under treatment for any other ailment?*/}
                            Are you under treatment for any other ailment?
    
                            <div data-v-2d7880ea="" class="form-field">
                                <button onClick={this.yestreatment} data-v-2d7880ea="" className="title-button" style={ this.state.treatment=== true ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Yes</button>
                                <button onClick={this.notreatment} data-v-2d7880ea="" className="title-button" style={ this.state.treatment=== false ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>NO</button>
                                
                            </div>
                    <br/><br/>
                            
    
                            {/* end of Are you under treatment for any other ailment? */}
    
    
    
                            {/* Have you been in contact with any confirmed (COVID-19) case? */}
    
                            Have you been in contact with any confirmed (COVID-19) case?
    
                            <div data-v-2d7880ea="" class="form-field">
                                <button onClick={this.yescontact} data-v-2d7880ea="" className="title-button" style={ this.state.contact=== true ?{ backgroundColor:"#4c51bf", color:"#fff"} : {}}>Yes</button>
                                <button onClick={this.nocontact} data-v-2d7880ea="" className="title-button" style={ this.state.contact=== false ?{ backgroundColor:"#4c51bf", color:"#fff" } : {}}>NO</button>
                                
                            </div>
                    <br/><br/>                        
                            {/* end of Have you been in contact
                             with any confirmed (COVID-19) case? */}
    
                            {/* state */}
                            <p>states</p>
                            <div className="input-group mb-3">
                                <select className="browser-default custom-select" name="state" onChange={this.handleRadioChange} id="states">
                                    {nStates.map((nstates, index) => {
                                        return <option value={nstates}>{nstates}</option>
                                        })}
                                </select>
                            </div><br/><br/>
    
                            {/* end of state */}
    
                 {/* address */}
                 <p>address</p>
                    <div style={{}}>    
              <textarea value={this.state.address} className="form-control form-control-sm" onChange={this.handleChange} placeholder="enter you address" id="address" type="textarea" name="address"/>     
                
                    </div><br/>
                    {/* <div data-v-2d7880ea="" className="form-field justify-end"> */}
                    <button data-v-2d7880ea="" type="submit" className="justify-end py-2 px-8 bg-purple-800 text-white hover:bg-orange-600 focus:outline-none text-2xl" >Submit</button>
                    {/* </div>                 */}
                </form>                
                </div>
    
    
            );
        }
        return null;
    }
}

export default ReportForm;