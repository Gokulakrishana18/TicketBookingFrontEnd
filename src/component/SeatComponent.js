import React, { useEffect, useState } from "react";
import '../css/BookingSeat.css';
import ListOfSeat from "./ListOfSeat";
import { getSeat, seatBooking } from '../services/TicketBookingService';
import { getToken, getUserName } from "../services/AuthService";

const SeatComponent = () => {
    const [seatDetails, setSeatDetails] = useState([]);
    const [seatPrice, setSeatPrice] = useState(0);
    const [seatCount, setSeatCount] = useState(0);
    const [selectedSeat, setSelectedSeat] = useState([]);
    const [isBookedMessage, setIsBookedMessage] = useState('');
    const [responseCode, setResponseCode] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [seatId, setSeatId] = useState();
    const [choosedSeat, setChoosedSeat] = useState([]);
    
    const userName = localStorage.getItem("user_email");

    useEffect(() => {
        const screenID = localStorage.getItem("screenId");
        getSeat(screenID)
            .then(response => {
                setSeatDetails(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    // Handle seat price change
    const getTheSeatPrice = (e) => {
        const seat = e.id;
        const user_email = userName;
        const existingIndex = selectedSeat.findIndex(item => item.id === e.id); 
        const existingSeat = choosedSeat.findIndex(item => item.seat === e.id); 

        if (existingIndex !== -1) {
            const filteredList = selectedSeat.filter(item => item.id !== e.id);
            const filteredUserList = choosedSeat.filter(item => item.seat !== e.id);
            setChoosedSeat(filteredUserList);
            setSeatPrice(seatPrice - e.price);
            setSeatCount(seatCount - 1);
            setSelectedSeat(filteredList);
        } else {
            const userAndSeat = [...choosedSeat, { 
                seat: e.id, 
                user_email, 
                seatNumber: e.seatNumber, 
                seatPrice: e.price, 
                seatType: e.seatType 
            }];
            setChoosedSeat(userAndSeat);
            const markAsBooked = { ...e, booked: true };
            const seats = [...selectedSeat, markAsBooked];
            setSeatPrice(seatPrice + e.price);
            setSeatId(seat);
            setSelectedSeat(seats);
            setSeatCount(seatCount + 1);
        }
    };

    // Confirm ticket booking
    const confirmTicket = () => {
        // Check if any seat is selected
        if (selectedSeat.length === 0) {
            alert("Please choose a seat...");
            return;  // Early exit if no seats are selected
        }

        // Prepare the data to be sent to the backend
        const seatsToBook = choosedSeat.map(seat => {
            return {
                id: seat.seat,  // The ID of the selected seat
                seatNumber: seat.seatNumber,  // Seat number
                isBooked: true,  // Mark as booked
                seatType: seat.seatType,  // Seat type (e.g., VIP, Regular)
                seatPrice: seat.seatPrice  // Seat price
            };
        });

        // Log the data to be sent to the backend for debugging purposes
        console.log("Seats to be booked:", seatsToBook);

        // Send the booking data to the backend
        fetch('http://localhost:8080/api/ticketBooking/bookingSeat', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getToken(),  // Assuming getToken() returns the auth token
            },
            body: JSON.stringify(seatsToBook),  // Send the structured seat data
        })
        .then(response => response.text())   // Parse the response as JSON
        .then(data => {
            console.log("Backend response:", data); 
            if (data.includes("Success")) {
                setIsBookedMessage("Booked successfully!");
            } else {
                setIsBookedMessage("Something went wrong. Please try booking after some time.");
            }
        })
        .catch(error => {
            console.error('Error booking the ticket:', error);
            setIsBookedMessage("An error occurred while booking. Please try again.");
        });
    };

    // Reset the page
    const referceThePage = () => {
        setSeatPrice(0);
        setSeatCount(0);
        setSelectedSeat([]);
        setChoosedSeat([]);
    };

    useEffect(() => {}, [selectedSeat, seatPrice]);

    return (
        <div className="Bookingpage">
            <div className="booking-container">
                <button style={{ backgroundColor: 'green' }}>&times;</button>
                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>NA</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied"></div>
                        <small>Occupied🪑🪑🪑</small>
                    </li>
                </ul>
                <div className="booking-row-container">
                    <div className="booking-screen"></div>
                    <div className="booking-row">
                        {seatDetails?.map((e) => (
                            <ListOfSeat 
                                key={e.id} 
                                seat={e} 
                                getTheSeatPrice={getTheSeatPrice} 
                            />
                        ))}
                    </div>
                </div>
                <div className="Price">
                    <p>
                        You have selected <span id="count">{seatCount}</span> seats for a price of $
                        <span>{seatPrice}</span>
                    </p>
                </div>
                {isBookedMessage && <p>{isBookedMessage}</p>}
                <button className='btn btn-primary' onClick={confirmTicket}>
                    Confirm the ticket
                </button>
                <button className="btn btn-danger" onClick={referceThePage}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default SeatComponent;
