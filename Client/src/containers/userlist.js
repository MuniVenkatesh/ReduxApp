import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {selectedUser} from "../actions/index.js";

export class User extends React.Component{

  render(){
    return(
    <div>
    {this.props.userData.map(data=>(
      <li key={data.id} onClick={()=>{this.props.select(data)}}>{data.name} {data.age}</li>
    ))}
    </div>
  );
}

}

function matchDispatchToProps(dispatch){
  return bindActionCreators({select:selectedUser},dispatch);
}

function mapStateToProps(state){
  return{
    userData:state.user
  }
}

export default connect(mapStateToProps,matchDispatchToProps)(User);
