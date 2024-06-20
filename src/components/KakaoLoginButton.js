import React from "react";
import KakaoLogin from "react-kakao-login";

const KakaoLoginButton = () => {
  const responseKakao = response => {
    console.log(response);
    // 여기서 로그인 후 처리 작업을 추가할 수 있습니다.
  };

  return (
    <KakaoLogin
      token="YOUR_KAKAO_API_KEY" // 여기에 카카오 API 키를 입력하세요
      onSuccess={responseKakao}
      onFail={console.error}
      onLogout={console.info}
      render={({ onClick }) => (
        <button className="kakao-login" onClick={onClick}>
          카카오 로그인
        </button>
      )}
    />
  );
};

export default KakaoLoginButton;
