import React, { useEffect, useState } from 'react';
import authApi from '../../api/authApi';

const Profile = () => {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      const { data } = await  authApi.profile();
      if (data) {
        setProfile(data);
      }
    }
    fetchProfile();
  }, [])

  return (
  <div>
    <div>Info</div>
    <div>Username: {profile.username}</div>
    <div>Email: {profile.email}</div>
  </div>
  )
}

export default Profile;