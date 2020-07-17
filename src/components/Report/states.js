import React from 'react';
import './ReportForm.css';
import axios from 'axios';
import './states.js';


const nStates = ['abuja', 'abia', 'adamawa','akwa','anambra','bauchi','bayelsa','benue','borno','cross river','delta','ebonyi','edo','ekiti','enugu','gombe','imo','jigawa','kaduna','kano','katsina','kebbi','kogi','kwara','lagos','nassarawa','niger','ogun','ondo','osun','oyo','plateaue','rivers','sokoto','taraba','yobe','zamfara'];

// const Allsymptoms = ['No symptoms', 'shortness of breadth', 'nasal congestion' ,'dry cough',
// 'feaver', 'sore throat', 'runny nose', 'diarrhea', 'abdomnalnpain', 'fatigue', 'pressure in the chest'];
var Allsymptoms=[
    { id: 0, title: 'No symptoms' },
    { id: 1, title: 'shortness of breadth' },
    { id: 2, title: 'nasal congestion' }
]
class ReportForm extends React.Component {
    state = {
        symptoms: [],
        filling_for_who: "",
        title: "",
        full_name: "",
        phone: "",
        email: "",
        gender: "",
        traveled: false,
        contact: false,
        treatment: false,
        state: "",
        address: ""
    }
  
    
    
    handleFormSubmit = (event) =>{
        // console.log(event.target.value);
        event.preventDefault();
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

    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "radio") {
          value = e.target.checked;
        }
    };


      handleRadioChange=(event)=> {
        console.log(event.target.value);
        this.setState({
          ...this.state,
          [event.target.name]: event.target.value
        });
      };

    handleChange = (event)=> {
        console.log(event.target.value);
        this.setState({...this.state,
          [event.target.name]: event.target.value
        });
      };

      multipleSelectChange = (button) => {
        // const values = [...e.target.symptoms].map(opt => opt.value);
        // this.onChange(values);
            let tmp = this.state.symptoms;
            if (this.state.symptoms.includes(button)) {
                this.setState({
                    symptoms: this.state.symptoms.filter(el => el !== button)
                })
            } else {
                tmp.push(button);
                this.setState({
                    symptoms: tmp
                })
            } 

      };
  
    render() {
       
        return (
            <div className="container">
                <div>
                <div>
                {Allsymptoms.map(bt => (
                    <button
                        key={bt}
                        onClick={() => this.multipleSelectChange()}
                        className={this.state.symptoms.includes(bt) ? "buttonPressed" : "button"}>
                        {bt}
                    </button>
                ))}
            </div>

                    <form onSubmit={this.handleFormSubmit}>
                    <br/>
                    <p>im filling for who</p>
                        {/* im filling for who */}
                        <div className="input-group mb-3">
                            <select className="browser-default custom-select" onChange={this.handleRadioChange} id="filling_for_who">
                                <option value="My Self">my self</option>
                                <option value="Some One Else">someone else</option>
                            </select>
                        </div><br/><br/>


                        {/* title */}
                        <div className="section over-hide z-bigger" >
                            <p>title</p>
                            <input type="radio" name="title" value="MR" className="radio" checked={this.state.title === 'MR'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">MR</label>

                            <input type="radio" name="title" value="MRS" className="radio" checked={this.state.title === 'MRS'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">MRS</label>

                            <input type="radio" name="title" value="MISS" className="radio" checked={this.state.title === 'MISS'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">MISS</label>

                            <input type="radio" name="title" value="DR" className="k-radio" checked={this.state.title === 'DR'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">DR</label>
                        </div><br/><br/>


                        {/* full name */}

                        <div style={{flex: 6}}>
                            {/* <bold><label for ="full_name"><p style={{color:"black"}}>Full name</p></label></bold> */}
                            <input value={this.state.full_name} className="form-control form-control-sm" onChange={this.handleChange} id="full_name" type="text" name="full_name" placeholder="full name"></input>
                        </div><br/>

                        {/* phone number */}

                        <div style={{flex: 6}}>
                            <input value={this.state.phone} className="form-control form-control-sm" onChange={this.handleChange} id="phone" type="text" name="phone" placeholder="phone"/>
                          
                        </div><br/>

                        {/* email address */}
                        <div style={{flex: 6}}>
                            <input value={this.state.email} className="form-control form-control-sm" onChange={this.handleChange} id="email" type="email" name="email" placeholder="email"></input>
                        </div>
                        <br/><br/>

                        {/* gender */}

                        <div className="k-form-field" >
                            <p>Gender</p>
                            <input type="radio" name="gender" value="Male" className="k-radio" checked={this.state.gender === 'Male'} 
                                onChange={this.handleRadioChange}/>
                        <label className="k-radio-label">Male</label>

                        <input type="radio" name="gender" value="Female" className="k-radio" checked={this.state.gender === 'Female'} 
                                onChange={this.handleRadioChange}/>
                        <label className="k-radio-label">Female</label>

                        </div>
                        <br/><br/>

                        {/* symptoms */}
                        <select multiple={true} value={this.state.symptoms} onChange={this.multipleSelectChange} name="symptoms" id="symptoms">
                            {Allsymptoms.map((symptoms, index) => {
                                return <option value={symptoms}>{symptoms}</option>
                                })}
                            
                        </select>
                        {/* <select multiple={true} value={this.state.symptoms} onChange={this.multipleSelectChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select> */}

                        {/* end of symptoms */}



                        {/* Have you been to any country(ies) outside 
                        your country of residence in the past month? */}

                        <div className="k-form-field" >
                                <p>Have you been to any country(ies) outside 
                        your country of residence in the past month?</p>
                            <input type="radio" name="traveled" value="true" className="k-radio" checked={this.state.traveled === 'true'} onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">yes</label>

                            <input type="radio" name="traveled" value="false" className="k-radio" checked={this.state.traveled === 'false'} onChange={this.handleRadioChange} />
                            <label className="k-radio-label">no</label>

                        </div>
                        <br/><br/>
                        {/* end of Have you been to any country(ies) outside 
                        your country of residence in the past month? */}



                        {/*Are you under treatment for any other ailment?*/}

                        <div className="k-form-field" >
                            <p>Are you under treatment for any other ailment?</p>
                            <input type="radio" name="treatment" value="true" className="k-radio" checked={this.state.treatment === 'true'} onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">yes</label>

                            <input type="radio" name="treatment" value="false" className="k-radio" checked={this.state.treatment === 'false'} onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">no</label>

                        </div>
                        <br/><br/>
                        {/* end of Are you under treatment for any other ailment? */}




                        {/* Have you been in contact with any confirmed (COVID-19) case? */}

                        <div className="k-form-field" >
                            <p>Have you been in contact with any confirmed (COVID-19) case?</p>
                            <input type="radio" name="contact" value="true" className="k-radio" checked={this.state.contact === 'true'} onChange={this.handleRadioChange} />
                            <label className="k-radio-label">yes</label>

                            <input type="radio" name="contact" value="false" className="k-radio" checked={this.state.contact === 'false'} onChange={this.handleRadioChange} />
                            <label className="k-radio-label">no</label>

                        </div><br/><br/>
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
                        <div style={{flex: 6}}>
                            <input value={this.state.address} className="form-control form-control-sm" onChange={this.handleChange} id="address" type="text" name="address" placeholder="address"></input>
                        </div><br/>

{/* ..................................................................................... */}

 {/* title */}
                    



                        <button type="primary">submit</button>

                        


                    </form>
                </div>

            </div>

        );
    }
}

export default ReportForm;