import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import {Icon, ListItem, ListItemButton, ListItemText} from "@mui/material";
import Logo from "../../assets/icons/logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import './Footer.scss';
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectCategories} from "../../store/categories/categoriesSlice";
import {fetchCategories} from "../../store/categories/categoriesThunks";
import {Categories, SocialLinks} from "../../app/types/types";
import {SOCIALS} from "../../constants";

const Footer = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);


    return (
        <div className="footer">
            <div className="footer-wrapper">
                <div className="footer-block footer-block-logo">
                    <Box sx={
                        {
                            display: 'flex',
                            m: 1,
                            minWidth: '100px'
                        }}>
                        <NavLink to="/">
                            <Icon sx={{display: 'flex', minWidth: '100px'}}>
                                <img style={{margin: '0 auto'}} src={Logo} alt="logo"/>
                            </Icon>
                        </NavLink>
                    </Box>
                    <Typography>Sign up for texts to be notified about our best offers on the perfect gifts.</Typography>
                </div>
                <div className="footer-block">
                    <Box
                        sx={{width: '100%', height: 'auto', maxWidth: 360,}}
                    >
                        <Typography gutterBottom variant="h6" component="div" className="footer-block-title">
                            All products
                        </Typography>
                        {categories &&
													<ListItem component="div" disablePadding className="footer-block-list">
                              {categories.map((category: Categories) => (
                                  <ListItemButton key={Math.random()}>
                                      <NavLink to={'/' + category.title.toLowerCase()} className="footer-block-link">
                                          <ListItemText primary={category.title}/>
                                      </NavLink>
                                  </ListItemButton>
                              ))}
													</ListItem>}
                    </Box>
                </div>
                <div className="footer-block">
                    <Box
                        sx={{width: '100%', height: 'auto', maxWidth: 360,}}
                    >
                        <Typography gutterBottom variant="h6" component="div" className="footer-block-title">
                            Company
                        </Typography>
                        <ListItem component="div" disablePadding className="footer-block-list">
                            <ListItemButton>
                                <NavLink to="/about" className="footer-block-link">
                                    <ListItemText>About</ListItemText>
                                </NavLink>
                            </ListItemButton>
                            <ListItemButton>
                                <NavLink to="/support" className="footer-block-link">
                                    <ListItemText>Support</ListItemText>
                                </NavLink>
                            </ListItemButton>
                        </ListItem>
                    </Box>
                </div>
                <div className="footer-block">
                    <Box
                        sx={{width: '100%', height: 'auto', maxWidth: 360,}}
                    >
                        <Typography gutterBottom variant="h6" component="div" className="footer-block-title">
                            Follow Us
                        </Typography>
                        <ListItem component="div" disablePadding className="footer-block-list">
                            {SOCIALS.map((item: SocialLinks) => (
                                <ListItemButton key={Math.random()}>
                                    <a href={item.link} target="_blank" rel="noopener&quot noreferrer" className="footer-block-link">
                                        <ListItemText primary={item.title}/>
                                    </a>
                                </ListItemButton>
                            ))}
                        </ListItem>
                    </Box>
                </div>
            </div>
        </div>
    );
};

export default Footer;