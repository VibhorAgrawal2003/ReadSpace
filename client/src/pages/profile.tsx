import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface UserProfile {
    username: string;
    email: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = sessionStorage.getItem("token");

            if (!token) {
                navigate("/auth");
                return;
            }

            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/client/users/${username}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProfile(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
                navigate("/auth"); // Redirect to login on error
            }
        };

        fetchProfile();
    }, [username, navigate]);

    return (
        <div className='profile-container'>
            <h1>User Profile</h1>
            {profile ? (
                <div>
                    <p>Username: {profile.username}</p>
                    <p>Email: {profile.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
