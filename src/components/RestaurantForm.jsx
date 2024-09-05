import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

const RestaurantForm = ({
    addRestaurant,
    editRestaurant,
    selectedData,
    onSubmit,
}) => {
    const [formData, setFormData] = useState({
        name: selectedData ? selectedData.name : "",
        description: selectedData ? selectedData.description : "",
        location: selectedData ? selectedData.location : "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        if (selectedData) {
            editRestaurant(selectedData.id, formData);
        } else {
            addRestaurant(formData);
        }
        onSubmit();
    };

    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "0.5rem",
                alignItems: "center",
                gap: "0.5rem",
            }}
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
            }}
        >
            <TextField
                name="name"
                label="Restaurant Name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
            />
            <TextField
                name="description"
                label="Description"
                multiline={true}
                value={formData.description}
                onChange={handleChange}
                required
                fullWidth
                minRows={5}
            />
            <TextField
                name="location"
                label="Location"
                value={formData.location}
                onChange={handleChange}
                required
                fullWidth
            />
            <Button variant="contained" type="submit">
                {selectedData ? "Edit Restaurunt" : "Add Restaurant"}
            </Button>
        </form>
    );
};

export default RestaurantForm;
