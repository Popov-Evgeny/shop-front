import React, {useEffect} from 'react';
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import {NavLink} from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import {fetchCategories} from "../../../store/categories/categoriesThunks";
import {useAppDispatch, useAppSelector} from "../../../app/store/hooks";
import {selectCategories} from "../../../store/categories/categoriesSlice";

interface Props {
    double?: boolean
}

const CategoriesMenu: React.FC<Props> = ({double}) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);

    const [openCat, setOpenCat] = React.useState(false);
    const anchorRefCat = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleToggle = () => {
        setOpenCat((prevOpenCat) => !prevOpenCat);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRefCat.current &&
            anchorRefCat.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpenCat(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpenCat(false);
        } else if (event.key === 'Escape') {
            setOpenCat(false);
        }
    }

    const prevOpenCat = React.useRef(openCat);
    React.useEffect(() => {
        if (prevOpenCat.current && !openCat) {
            anchorRefCat.current!.focus();
        }

        prevOpenCat.current = openCat;
    }, [openCat]);

    return (
        <>
            {!double ? (
            <Button
                ref={anchorRefCat}
                id="composition-button"
                aria-controls={openCat ? 'composition-menu' : undefined}
                aria-expanded={openCat ? 'true' : undefined}
                aria-haspopup="true"
                sx={{my: 1.8, color: 'black', display: 'block'}}
                onClick={handleToggle}
            >
                Solutions &#9660;
            </Button>) : (
            <MenuItem onClick={handleToggle}>
                <Typography textAlign="center">Solutions</Typography>
            </MenuItem>)}
            <Popper
                open={openCat}
                anchorEl={anchorRefCat.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
                sx={{zIndex: 1000, left: '100px'}}
            >
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom-start' ? 'left top' : 'left bottom',
                        }}
                    >
                        <Paper className={double ? 'double': ''}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    autoFocusItem={openCat}
                                    id="composition-menu"
                                    aria-labelledby="composition-button"
                                    onKeyDown={handleListKeyDown}
                                >
                                    {categories && categories.map((item) => (

                                        <NavLink to={'/' + item.title.toLowerCase()} key={Math.random()}>
                                            <MenuItem onClick={handleClose}>
                                                <Typography textAlign="center">{item.title}</Typography>
                                            </MenuItem>
                                        </NavLink>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default CategoriesMenu;