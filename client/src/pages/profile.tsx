import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface UserProfile {
    username: string;
    picture_url: string;
    bio: string;
}

const Profile: React.FC = () => {
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const { username } = useParams<{ username: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = sessionStorage.getItem("token");

            {
                /* Check if token in session */
            }
            if (!token) {
                navigate("/auth");
                return;
            }

            {
                /* Try to fetch user data */
            }
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER}/client/users/${username}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setProfile(response.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
                navigate("/auth");
            }
        };

        fetchProfile();
    }, [username, navigate]);

    return (
        <div className='profile-container p-6 max-w-4xl mx-auto'>
            <div className='flex items-center space-x-6'>
                {/* User Image */}
                <img
                    src={profile?.picture_url}
                    alt='User Avatar'
                    className='w-32 h-32 rounded-full object-cover border-4 border-gray-300'
                />

                {/* User Info */}
                <div>
                    <h1 className='text-4xl font-extrabold text-gray-800 text-left mb-2'>{profile?.username}</h1>
                    <p className='text-lg text-gray-600 mb-4 text-left'>{profile?.bio}</p>
                </div>
            </div>

            {/* List of user's blogs */}
            <div className='mt-6 p-4 border-t border-gray-200'>
                <h2 className='text-2xl font-semibold text-gray-700 text-left'>Blogs by {profile?.username}</h2>
            </div>
        </div>
    );
};

export default Profile;
