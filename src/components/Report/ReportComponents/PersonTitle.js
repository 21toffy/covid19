import React from 'react';
import "./PersonTitle.css";

export default function PersonTitle(props) {
    const MR = e => {
        e.preventDefault();
        this.props.setState({
          state: 'MR'
        });
      };

    const  MRS = e => {
        e.preventDefault();
        this.props.setState({
          state: 'MRS'
        });
      };

    const  MISS = e => {
        e.preventDefault();
        this.props.setState({
          state: 'MISS'
        });
      };

    const  DR = e => {
        e.preventDefault();
        this.props.setState({
          state: 'DR'
        });
      };
       
        return (
            <div data-v-2d7880ea="" className="form-field">
                <span onClick={MR} data-v-2d7880ea="" className="title-button">MR</span>
                <span onClick={MRS} data-v-2d7880ea="" className="title-button">MRS</span>
                <span onClick={MISS} data-v-2d7880ea="" className="title-button">MISS</span>
                <span onClick={DR} data-v-2d7880ea="" className="title-button">DR</span>

            </div>

        );
}
