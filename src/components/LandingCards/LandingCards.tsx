import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/store/hooks";
import {selectCategories} from "../../store/categories/categoriesSlice";
import {fetchCategories} from "../../store/categories/categoriesThunks";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {API_URL} from "../../constants";
import {Categories} from "../../app/types/types";
import './LandingCards.scss';
import {useNavigate} from "react-router-dom";

const LandingCards = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const categories = useAppSelector(selectCategories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="categories-wrapper">
            <div className="vert-card-wrapper">
                {categories && categories.map((category: Categories, ind: number) => (
                    ind < 2 && <Card
                        key={Math.random()}
                        sx={{maxWidth: 650}}
                        className="cards-category"
                        onClick={() => navigate('/categories/' + category.title)}
                    >
                        <CardActionArea className={category.title}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={API_URL + '/uploads/' + category.image}
                                alt={category.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {category.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            <div className="hor-card-wrapper">
                {categories && categories.map((category: Categories, ind: number) => (
                    ind > 1 && <Card
                        key={Math.random()}
                        sx={{maxWidth: 500}}
                        className="cards-category"
                        onClick={() => navigate('/categories/' + category.title)}
                    >
                        <CardActionArea className={category.title}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={API_URL + '/uploads/' + category.image}
                                alt={category.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {category.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    )
        ;
};

export default LandingCards;