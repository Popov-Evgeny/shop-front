import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import {FormGroup, Input} from "@mui/material";
import Button from "@mui/material/Button";
import './LoginForm.scss';
import {LoginUserData} from "../../type";

const initialState: LoginUserData = {
    email: '',
    password: '',
}

const LoginForm = () => {
    const [loginData, setLoginData] = useState<LoginUserData>(initialState);

    const onChangeFormFills = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setLoginData(prev => ({
            ...prev,
            [name]: value,
        }))
    };

    // const onFormSubmit = () => {
    //
    // }


    return (
        <div className="login-form-wrapper">
            <h5 className="login-form-title">Login</h5>
            <form>
                <FormGroup
                    sx={{maxWidth: 350,}}
                >
                    <FormControl
                        variant={"outlined"}
                        size={"medium"}
                        sx={{m: 2}}
                    >
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input
                            id="my-input"
                            type="email"
                            name="email"
                            value={loginData.email}
                            onChange={onChangeFormFills}
                        />
                    </FormControl>
                    <FormControl
                        variant={"outlined"}
                        size={"medium"}
                        sx={{m: 2}}
                    >
                        <InputLabel htmlFor="my-input">Password</InputLabel>
                        <Input
                            id="my-input"
                            type="password"
                            name="password"
                            value={loginData.password}
                            onChange={onChangeFormFills}
                        />
                    </FormControl>
                    <Button type="submit" className="login-form-btn" sx={{m: 2}}>Login</Button>
                </FormGroup>
            </form>
        </div>
    );
};

export default LoginForm;