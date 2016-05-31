import React, {Component } from 'react';
import {Userprofile,UserRepos,Notes} from '../../components';

class Profile extends Component{

    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <Userprofile /> 路由的参数是{this.props.params.username}
                </div>
                <div className="col-md-4"><UserRepos /></div>
                <div className="col-md-4"><Notes /></div>
            </div>
        )
    }
}

export default Profile;