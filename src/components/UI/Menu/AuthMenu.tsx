import React from 'react';
import {AUTH} from "../../../constants";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

interface Props {
    handleCloseUserMenu: () => void;
}

const AuthMenu:React.FC<Props> = ({handleCloseUserMenu}) => {
    return (
        <>
            {AUTH.map((setting) => (
            <NavLink key={Math.random()} to={'/' + setting.link}>
                <MenuItem key={Math.random()} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting.prev}</Typography>
                </MenuItem>
            </NavLink>
            ))}
        </>
    );
};

export default AuthMenu;