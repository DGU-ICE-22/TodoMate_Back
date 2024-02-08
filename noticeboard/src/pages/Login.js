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
            const response = await axios.post('http://127.0.0.1:8000/api/login/', data);
            if (response.status === 200){
                alert('로그인 성공!');
                window.location = '/';
            }else{
                alert(`로그인 실패. 다시 시도하세요. 실패 사유 : ${response.status} ${response.statusText}`);
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                alert(`로그인 중 오류가 발생했습니다 : ${error.response.data}`);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                alert(`로그인 중 오류가 발생했습니다 : ${error.request}`);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                alert(`로그인 중 오류가 발생했습니다 : ${error.message}`);
            }
            console.log(error.config);
            window.location.reload();
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
