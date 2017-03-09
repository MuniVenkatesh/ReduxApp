import React from "react";
import {connect} from "react-redux";

export class User extends React.Component{

  render(){
    return(
    <div>
    {this.props.userData.map(data=>(
      <li key={data.id}>{data.name} {data.age}</li>
    ))}
    </div>
  );
}

}


function mapStateToProps(state){
  return{
    userData:state.user
  }
}

export default connect(mapStateToProps)(User);
