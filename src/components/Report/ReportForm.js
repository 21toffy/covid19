import React from 'react';
import './ReportForm.css';

class ReportForm extends React.Component {
    state = {
        symptoms: "",
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
    
    }

    handleChange = e => {
        let { name, value } = e.target;
        if (e.target.type === "checkbox") {
          value = e.target.checked;
        }
    };

    // handleRadioTitleChange=(event)=> {
    //     console.log(event.target.value);
    //     this.setState({
    //       ...this.state,
    //       title: event.target.value
    //     });
    //   };

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

    render() {
        return (
            <div className="container">
                <div>
                    <form>
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
                            <p>Gender</p>
                            <input type="checkbox" name="gender" value="MR" className="checkbox" checked={this.state.selectedOption === 'MR'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">MR</label>

                            <input type="checkbox" name="gender" value="MRS" className="checkbox" checked={this.state.selectedOption === 'MRS'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">MRS</label>

                            <input type="checkbox" name="gender" value="MISS" className="checkbox" checked={this.state.selectedOption === 'DR'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">MISS</label>

                            <input type="checkbox" name="gender" value="DR" className="k-radio" checked={this.state.selectedOption === 'MISS'} 
                                onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">DR</label>
                        </div><br/><br/>


                        {/* full name */}

                        <div style={{flex: 6}}>
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
                            <input type="radio" name="radio" value="Male" className="k-radio" checked={this.state.selectedOption === 'Male'} 
                                onChange={this.handleRadioChange}/>
                        <label className="k-radio-label">Male</label>

                        <input type="radio" name="radio" value="Female" className="k-radio" checked={this.state.selectedOption === 'Female'} 
                                onChange={this.handleRadioChange}/>
                        <label className="k-radio-label">Female</label>

                        </div>
                        <br/><br/>

                        {/* symptoms */}



                        {/* end of symptoms */}



                        {/* Have you been to any country(ies) outside 
                        your country of residence in the past month? */}

                        <div className="k-form-field" >
                                <p>Have you been to any country(ies) outside 
                        your country of residence in the past month?</p>
                            <input type="radio" name="travelled" value="true" className="k-radio" checked={this.state.selectedOption === 'true'} onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">yes</label>

                            <input type="radio" name="travelled" value="false" className="k-radio" checked={this.state.selectedOption === 'false'} onChange={this.handleRadioChange} />
                            <label className="k-radio-label">no</label>

                        </div>
                        <br/><br/>
                        {/* end of Have you been to any country(ies) outside 
                        your country of residence in the past month? */}



                        {/*Are you under treatment for any other ailment?*/}

                        <div className="k-form-field" >
                            <p>Are you under treatment for any other ailment?</p>
                            <input type="radio" name="treatment" value="true" className="k-radio" checked={this.state.selectedOption === 'true'} onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">yes</label>

                            <input type="radio" name="treatment" value="false" className="k-radio" checked={this.state.selectedOption === 'false'} onChange={this.handleRadioChange}/>
                            <label className="k-radio-label">no</label>

                        </div>
                        <br/><br/>
                        {/* end of Are you under treatment for any other ailment? */}




                        {/* Have you been in contact with any confirmed (COVID-19) case? */}

                        <div className="k-form-field" >
                            <p>Have you been in contact with any confirmed (COVID-19) case?</p>
                            <input type="radio" name="contact" value="true" className="k-radio" checked={this.state.selectedOption === 'true'} onChange={this.handleRadioChange} />
                            <label className="k-radio-label">yes</label>

                            <input type="radio" name="contact" value="false" className="k-radio" checked={this.state.selectedOption === 'false'} onChange={this.handleRadioChange} />
                            <label className="k-radio-label">no</label>

                        </div><br/><br/>
                        {/* end of Have you been in contact
                         with any confirmed (COVID-19) case? */}

                        
                        {/* state */}
                        <p>state</p>
                        <div className="input-group mb-3">
                            <select className="browser-default custom-select" placeholder="state" id="state">
                                <option selected>my self</option>
                                <option value="1">someone else</option>
                            </select>
                        </div><br/>

                        {/* end of state */}


                        
                        {/* address */}
                        <p>address</p>
                        <div style={{flex: 6}}>
                            <input value={this.state.address} className="form-control form-control-sm" onChange={this.handleChange} id="address" type="text" name="address" placeholder="address"></input>
                        </div><br/>


                        <button type="primary">submit</button>

                        


                    </form>
                </div>

            </div>

        );
    }
}

export default ReportForm;