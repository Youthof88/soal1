import React from 'react';
import { Link } from 'react-router-dom';

export default class Tab1 extends React.Component {
    render = () =>
        <div className="render form-group">
            <label htmlFor="login">Nama</label>
            <input type="text" ref="login" id="login" className="form-control"/>
            <Link to='/tab2' onClick={() => {
                this.props.changeActive(1);
                this.props.changeName(this.refs.login.value);
            }}  
            className="btn btn-primary">Submit</Link>
        </div>
}