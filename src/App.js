// src/App.js

import React, { useEffect, useState } from "react";
import RestaurantForm from "./components/RestaurantForm";
import Navbar from "./components/Navbar";
import { v4 as uuidV4 } from "uuid";
import { Box, Button, Grid2, Modal } from "@mui/material";
import RestaurantCard from "./components/RestaurantCard";
import Notification from "./components/Snackbar";

function App() {
    const [restaurants, setRestaurants] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(false);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarSeverity, setSnackbarSeverity] = useState("success");

    const handleOpenSnackbar = (message, severity = "success") => {
        setSnackbarMessage(message);
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const addRestaurant = (data) => {
        data = { id: uuidV4(), ...data };
        setRestaurants([...restaurants, data]);
        handleOpenSnackbar("Restraunt Added");
    };

    const editRestaurant = (id, data) => {
        let temp = restaurants.map((restaurant) => {
            if (id === restaurant.id) {
                return data;
            }
            return restaurant;
        });
        setRestaurants(temp);
        setSelectedData(false);
        handleOpenSnackbar("Restraunt Updated");
    };

    const deleteRestaurant = (id) => {
        let temp = restaurants.filter((restaurant) => restaurant.id !== id);
        setRestaurants(temp);
        handleOpenSnackbar("Restraunt Deleted");
    };

    return (
        <>
            <Navbar />
            <Notification
                open={snackbarOpen}
                message={snackbarMessage}
                onClose={handleCloseSnackbar}
                severity={snackbarSeverity}
            />
            <Box margin={4}>
                <Grid2 container spacing={2}>
                    {restaurants &&
                        restaurants.map((restaurant) => (
                            <Grid2
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                key={restaurant.id}
                            >
                                <RestaurantCard
                                    restaurant={restaurant}
                                    deleteRestaurant={deleteRestaurant}
                                    setSelectedData={setSelectedData}
                                />
                            </Grid2>
                        ))}
                </Grid2>
                <Modal
                    open={isModalOpen || selectedData}
                    onClose={() => {
                        setIsModalOpen(false);
                        setSelectedData(false);
                    }}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: 400,
                            bgcolor: "background.paper",
                            border: "2px solid #000",
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <RestaurantForm
                            addRestaurant={addRestaurant}
                            editRestaurant={editRestaurant}
                            selectedData={selectedData}
                            onSubmit={() => {
                                setIsModalOpen(false);
                                setSelectedData(false);
                            }}
                        />
                    </Box>
                </Modal>
                <Button
                    variant="contained"
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                    style={{ marginTop: "1rem" }}
                >
                    Add
                </Button>
            </Box>
        </>
    );
}

export default App;
