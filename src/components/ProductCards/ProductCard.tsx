import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import {Product} from "../../type";
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
            className="cards" sx={{maxWidth: 450}}
            onClick={() => navigate('/products/' + product._id)}
        >
            <CardActionArea className="card-body">
                <CardMedia
                    sx={{height: 220}}
                    image={API_URL + '/uploads/' + product.image}
                    title="green iguana"
                    className="card-img"
                />
                <CardContent className="card-text">
                    <Typography gutterBottom variant="h5" component="div" className="card-title">
                        {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <b>Price:</b> {product.price} $
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ProductCard;