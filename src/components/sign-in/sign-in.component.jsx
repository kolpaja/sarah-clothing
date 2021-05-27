import React from "react"
import CustomButton from "../custom-button/custom-button.component";

import FormInput from "../form-input/form-input.component"
import "./sign-in.styles.scss"

import {signInWithGoogle} from "../../firebase/firebase.utils"
class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",

        }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

     handleSubmit= event =>{
         event.preventDefault();
         this.setState({email: "", password:""})
     }

    render() {
        return (
            <div className="sign-in">
                <h1 className="title">I already have an account</h1>
                <span>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                  
                    <FormInput type="email" name="email"  label="email" value={this.state.email} handleChange={this.handleChange} required />

                    <FormInput type="password" name="password" label="password" value={this.state.password} handleChange={this.handleChange} required/>

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;