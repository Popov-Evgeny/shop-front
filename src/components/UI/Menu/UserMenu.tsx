import React from 'react';
import {AUTH, USER_MENU} from "../../../constants";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {NavLink} from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import {AccountCircle} from "@mui/icons-material";
import Tooltip from "@mui/material/Tooltip";
import {useAppDispatch, useAppSelector} from "../../../app/store/hooks";
import {selectUser} from "../../../store/users/usersSlice";
import {logout} from "../../../store/users/usersThunks";

const UserMenu = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(selectUser);

    const [openUserMenu, setOpenUserMenu] = React.useState<boolean>(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const logoutHandler = () => {
        dispatch(logout());
    }

    const handleToggle = () => {
        setOpenUserMenu((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpenUserMenu(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenUserMenu(false);
        } else if (event.key === 'Escape') {
            setOpenUserMenu(false);
        }
    }

    const prevOpen = React.useRef(openUserMenu);
    React.useEffect(() => {
        if (prevOpen.current === true && openUserMenu === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = openUserMenu;
    }, [openUserMenu]);

    return (
        <Box sx={{flexGrow: 1, display: {xs: 'flex'}}}>
            <Tooltip title="Open settings">
                <IconButton
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={openUserMenu ? 'composition-menu' : undefined}
                    aria-expanded={openUserMenu ? 'true' : undefined}
                    aria-haspopup="true"
                    sx={{color: 'black', display: 'block'}}
                    onClick={handleToggle}>
                    <AccountCircle sx={{width: 40, height: 40}}/>
                </IconButton>
            </Tooltip>
            <Popper
                open={openUserMenu}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{zIndex: 1000}}
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openUserMenu}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {user ? (USER_MENU.map((item) => (
                                            item === 'Logout' ? (
                                                <MenuItem onClick={handleClose}>
                                                    <Typography
                                                        textAlign="center"
                                                        onClick={logoutHandler}
                                                    >{item}</Typography>
                                                </MenuItem>) : (
                                                <NavLink to={'/' + item} key={Math.random()}>
                                                    <MenuItem onClick={handleClose}>
                                                        <Typography textAlign="center">{item}</Typography>
                                                    </MenuItem>
                                                </NavLink>
                                            )
                                        ))) :
                                        (AUTH.map((item) => (
                                            <NavLink to={'/' + item.link} key={Math.random()}>
                                                <MenuItem onClick={handleClose}>
                                                    <Typography textAlign="center">{item.prev}</Typography>
                                                </MenuItem>
                                            </NavLink>
                                        )))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
};

export default UserMenu;