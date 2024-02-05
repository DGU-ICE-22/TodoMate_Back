// import React, { useState } from 'react';
// import axios from 'axios';

// function Signup() {
//   const [form, setForm] = useState({
//     userid: '',
//     password: '',
//     realname: '',
//     nickname: '',
//     phonenumber: '',
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     const data = new FormData();
//     data.append('userid', form.userid);
//     data.append('password', form.password);
//     data.append('password2', form.password);
//     data.append('realname', form.realname);
//     data.append('nickname', form.nickname);
//     data.append('phonenumber', form.phonenumber);
  
//     try {
//       const response = await axios.post('http://127.0.0.1:8000/api/user/register/', data);
//       console.log(response.data);
//     } catch (error) {
//       console.error('There was an error!', error);
//     }
//   };

//   return (
//     <div className="App" align="center">
//       <h1>회원가입</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           아이디:
//           <input type="email" name="userid" onChange={handleChange} />
//         </label>
//         <br></br>
//         <label>
//           비밀번호:
//           <input type="password" name="password" onChange={handleChange} />
//         </label>
//         <br></br>
//         <label>
//           비밀번호 재입력:
//           <input type="password" name="password" onChange={handleChange} />
//         </label>
//         <br></br>
//         <label>
//           이름:
//           <input type="text" name="realname" onChange={handleChange} />
//         </label>
//         <br></br>
//         <label>
//           닉네임:
//           <input type="text" name="nickname" onChange={handleChange} />
//         </label>
//         <br></br>
//         <label>
//           전화번호:
//           <input type="text" name="phonenumber" onChange={handleChange} />
//         </label>
//         <br></br>
//         <br></br>
//         <button type="submit">회원가입</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import Register from './components/register';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
    );
}

export default App;
