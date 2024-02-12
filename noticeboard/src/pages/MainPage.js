import React from 'react';

const MainPage = () => {
    // 로컬 스토리지에서 토큰을 가져와서 사용자가 로그인한 상태인지 확인합니다.
    const isLoggedIn = !!localStorage.getItem('token');

    // 로그아웃 버튼을 누르면 토큰을 삭제하여 사용자를 로그아웃 상태로 만듭니다.
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload(); // 페이지를 새로 고침하여 상태를 업데이트합니다.
    };

    return (
        <div align="center">
            <h1>Welcome to TodoMate!</h1>
            {/* 회원가입 페이지로 이동하는 버튼 추가 */}
            <button onClick={() => window.location.href='/register'}>회원가입</button>
            <br></br>
            <br></br>
            {/* 로그인 상태에 따라 '로그인' 버튼 또는 '프로필' 버튼을 띄웁니다. */}
            {isLoggedIn ?
                <>
                    <button onClick={() => window.location.href='/profile'}>프로필</button>
                    <button onClick={handleLogout}>로그아웃</button>
                </> :
                <button onClick={() => window.location.href='/login'}>로그인</button>}
        </div>
    );
}

export default MainPage;
