import React from "react";
import {connect} from "react-redux";

export class Admin extends React.Component{

  render(){
    return(
    <div>
    {this.props.select.name}
    </div>
  );
}
}

function mapStateToProps(state){
  return{
    select:state.selected
  }
}

export default connect(mapStateToProps)(Admin);
