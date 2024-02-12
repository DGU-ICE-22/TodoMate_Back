import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState({});

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token'); // 로컬 스토리지에서 토큰을 가져옵니다.
            const response = await axios.get('http://127.0.0.1:8000/api/profile/<int:pk>/', {
                headers: {
                    'Authorization': `Token ${token}` // 'Authorization' 헤더에 토큰을 포함시킵니다.
                }
            });
            setProfile(response.data);
        } catch (error) {
            console.error('프로필을 불러오는 데 실패했습니다.', error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    return (
        <div className="App" align="center">
            <h1>프로필</h1>
            <div>
                <p>아이디: {profile.userid}</p>
                <p>이름: {profile.name}</p>
                <p>이메일: {profile.email}</p>
                {/* 추가적으로 필요한 프로필 정보를 이곳에 표시하세요. */}
            </div>
        </div>
    );
}

export default Profile;
