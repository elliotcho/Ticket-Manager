import React, { useEffect, useState } from "react";
import { describeUser } from '../tickets/ticket-operations';
import decode from 'jwt-decode';

const Profile = () => {
    const token = window.localStorage.getItem("token");
    const id = decode(token);

    const [profile, setProfile] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const profileResponse = await describeUser(id);
            setProfile(profileResponse);
        };
        fetchData();
    }, [id]);

    return(
        <div class= 'login-container'>
        <div></div>

        <div className='login-form-container'>
          <h3>THIS IS YOU</h3>
          <h3>{profile.firstName}</h3>
          <h3>{profile.lastName}</h3>
        </div>

      </div>
    );


};

export default Profile;