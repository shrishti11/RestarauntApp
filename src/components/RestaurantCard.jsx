import React from "react";
import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from "@mui/material";

const RestaurantCard = ({ restaurant, deleteRestaurant, setSelectedData }) => {
    return (
        <Card sx={{ width: 350 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {restaurant.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {restaurant.description}
                </Typography>
                <Typography variant="caption">
                    Location: {restaurant.location}
                </Typography>
                <CardActionArea
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                    }}
                >
                    <Button
                        variant="contained"
                        onClick={() => {
                            setSelectedData(restaurant);
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => {
                            deleteRestaurant(restaurant.id);
                        }}
                    >
                        Delete
                    </Button>
                </CardActionArea>
            </CardContent>
        </Card>
    );
};

export default RestaurantCard;
