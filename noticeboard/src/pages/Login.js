import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
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

        const data = {
            userid: form.userid,
            password: form.password,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', data);
            if (response.status === 200){
                localStorage.setItem('token', response.data.token); // 로컬 스토리지에 토큰을 저장합니다.
                alert('로그인 성공!');
                window.location = '/';
            }else{
                alert(`로그인 실패. 다시 시도하세요. 실패 사유 : ${response.status} ${response.statusText}`);
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                alert(`로그인 중 오류가 발생했습니다 : ${error.response.data}`);
            } else if (error.request) {
                console.log(error.request);
                alert(`로그인 중 오류가 발생했습니다 : ${error.request}`);
            } else {
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

export default Login;
