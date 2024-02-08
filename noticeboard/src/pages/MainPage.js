// MainPage.js
import React from 'react';

const MainPage = () => {
    return (
        <div align="center">
            <h1>Welcome to TodoMate!</h1>
            {/* 회원가입 페이지로 이동하는 버튼 추가 */}
            <button onClick={() => window.location.href='/register'}>회원가입</button>
            <br></br>
            <br></br>
            <button onClick={() => window.location.href='/login'}>로그인</button>
        </div>
    );
}

export default MainPage;
