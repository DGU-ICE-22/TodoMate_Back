// register.js
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [form, setForm] = useState({
        userid: '',
        password: '',
        password2:'',
        realname: '',
        nickname: '',
        phonenumber: '',
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
        data.append('password2', form.password2);
        data.append('realname', form.realname);
        data.append('nickname', form.nickname);
        data.append('phonenumber', form.phonenumber);

        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register/', data);
            if (response.status === 200){
                alert('회원가입에 성공했습니다!');
                window.location = '/login';
            }
            else{
                alert(`회원가입에 실패했습니다. 다시 시도하세요.\n 실패 사유 :  ${response.status} ${response.statusText}`);
                window.location.reload();
            }
        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                alert(`회원가입 중 오류가 발생했습니다 : ${error.response.data}`);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
                alert(`회원가입 중 오류가 발생했습니다 : ${error.request}`);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                alert(`회원가입 중 오류가 발생했습니다 : ${error.message}`);
            }
            console.log(error.config);
            window.location.reload();
        }
    };

    return (
        <div className="App" align="center">
            <h1>회원가입</h1>
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
                <label>
                    비밀번호 재입력:
                    <input type="password" name="password2" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    이름:
                    <input type="text" name="realname" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    닉네임:
                    <input type="text" name="nickname" onChange={handleChange} />
                </label>
                <br></br>
                <label>
                    전화번호:
                    <input type="text" name="phonenumber" onChange={handleChange} />
                </label>
                <br></br>
                <br></br>
                <button type="submit">회원가입</button>
            </form>
        </div>
    );
}

export default Register;
