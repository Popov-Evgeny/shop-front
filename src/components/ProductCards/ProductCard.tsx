import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Product} from "../../app/types/types";
import {API_URL} from "../../constants";
import './ProductCards.scss';
import {useNavigate} from "react-router-dom";

interface Props {
    product: Product
}

const ProductCard: React.FC<Props> = ({product}) => {
    const navigate = useNavigate();

    return (
        <Card
            className="cards" sx={{maxWidth: 250}}
            onClick={() => navigate('/products/' + product._id)}
        >
            <CardActionArea className="card-body">
                <CardMedia
                    sx={{height: 160}}
                    image={API_URL + '/uploads/' + product.image}
                    title="green iguana"
                    className="card-img"
                />
                <CardContent className="card-text">
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" className="read-more">
                        <b>Read more...</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;