// register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({
        userid: '',
        password: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append('userid', form.userid);
        data.append('password', form.password);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/user/login/', data);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="App" align="center">
            <h1>로그인</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    아이디:
                    <input type="email" name="userid" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    비밀번호:
                    <input type="password" name="password" onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit">로그인</button>
                <button type="submit">비밀번호 찾기</button>
            </form>
        </div>
    );
}

export default Register;
