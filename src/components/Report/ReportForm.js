import React from 'react';


class ReportForm extends React.Component {
    state = {  }
    
    render() {
        return (
            <div className="container">
                <div>
                    <form>
                        <div className="input-group mb-3">
                            <select className="browser-default custom-select" placeholder="filling for who" id="filling_for_who">
                                <option selected>my self</option>
                                <option value="1">someone else</option>
                            </select>
                        </div>

                        <select className="mdb-select md-form" multiple>
                            <option value="" disabled selected>Choose your sypmtoms</option>
                            <option value="1">USA</option>
                            <option value="2">Germany</option>
                            <option value="3">France</option>
                            <option value="4">Poland</option>
                            <option value="5">Japan</option>
                        </select>

                        <div style={{flex: 6}}>
                            <input className="form-control form-control-sm" id="full_name" type="text" name="full_name" placeholder="full name"></input>
                        </div>

                        <div style={{flex: 6}}>
                            <input className="form-control form-control-sm" id="phone" type="text" name="phone" placeholder="phone"></input>
                        </div>

                        <div style={{flex: 6}}>
                            <input className="form-control form-control-sm" id="email" type="email" name="email" placeholder="email"></input>
                        </div>


                        <div className="input-group mb-3">
                            <select className="browser-default custom-select" placeholder="filling for who" id="gender">
                                <option selected>male</option>
                                <option value="1">female</option>
                            </select>
                        </div>

                        <div style={{flex: 6}}>
                            <input className="form-control form-control-sm" id="traveled" type="text" name="title" placeholder=""></input>
                        </div>

                        <div style={{flex: 6}}>
                            <input className="form-control form-control-sm" id="traveled" type="text" name="title" placeholder=""></input>
                        </div>

                        <div style={{flex: 6}}>
                            <input className="form-control form-control-sm" id="traveled" type="text" name="title" placeholder=""></input>
                        </div>



                        <div style={{flex: 6}}>
                            <input></input>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
}

export default ReportForm;