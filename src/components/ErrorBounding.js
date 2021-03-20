import React , {Component} from 'react';
 
class ErrorBounding extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            hasError:false
        }
    }

    render(){
       if(this.state.hasError){
           return <h1>Sorry Not working</h1>
       }
       return this.props.children
    }
}

export default ErrorBounding;