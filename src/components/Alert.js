import React from 'react'



function Alert(props) {
    
    // const capitalize= (word)=>{
    //     if(word==="danger"){
    //         word="Error";
    //     }
    //     let lower = word?.toLowerCase();
    //     return lower?.charAt(0).toUpperCase() + lower?.slice(1);
    // }
    // let temp = capitalize(props.alert.type);
  return (
    
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msg}
            </div>
    
  )
}

export default Alert 