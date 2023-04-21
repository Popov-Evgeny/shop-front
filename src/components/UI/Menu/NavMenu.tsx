import React from 'react';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {PAGES} from "../../../constants";
import CategoriesMenu from "./CategoriesMenu";

const NavMenu = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const anchorRefNav = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpenNav((prevOpenNav) => !prevOpenNav);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRefNav.current &&
            anchorRefNav.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpenNav(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenNav(false);
        } else if (event.key === 'Escape') {
            setOpenNav(false);
        }
    }

    const prevOpenNav = React.useRef(openNav);
    React.useEffect(() => {
        if (prevOpenNav.current === true && openNav === false) {
            anchorRefNav.current!.focus();
        }

        prevOpenNav.current = openNav;
    }, [openNav]);

    return (
        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
                size="large"
                ref={anchorRefNav}
                id="composition-button"
                aria-controls={openNav ? 'composition-menu' : undefined}
                aria-expanded={openNav ? 'true' : undefined}
                aria-haspopup="true"
                sx={{
                    bgcolor: 'black',
                    color: '#fff',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                }}
                onClick={handleToggle}
            >
                <MenuIcon sx={{marginLeft: '2px'}}/>
            </IconButton>
            <Popper
                open={openNav}
                anchorEl={anchorRefNav.current}
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
                                    autoFocusItem={openNav}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {PAGES.map((page) => (
                                        page === 'Solutions' ? (
                                            <Box key={Math.random()}>
                                                <CategoriesMenu
                                                    double
                                                />
                                            </Box>
                                        ) : (
                                            <NavLink to={'/' + page.toLowerCase()} key={Math.random()}>
                                                <MenuItem onClick={handleClose}>
                                                    <Typography textAlign="center">{page}</Typography>
                                                </MenuItem>
                                            </NavLink>
                                        )
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </Box>
    );
};

export default NavMenu;