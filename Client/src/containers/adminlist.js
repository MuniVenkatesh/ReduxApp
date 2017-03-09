import React from "react";
import {connect} from "react-redux";

export class Admin extends React.Component{

  render(){
    return(
    <div>
    {this.props.adminData.map(data=>(
      <li key={data.id}>{data.name} {data.city}</li>
    ))}
    </div>
  );
}
}

function mapStateToProps(state){
  return{
    adminData:state.admin
  }
}

export default connect(mapStateToProps)(Admin);
