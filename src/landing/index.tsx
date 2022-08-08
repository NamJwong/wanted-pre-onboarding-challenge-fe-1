import styled from 'styled-components';

export default function Landing() {
  return (
    <StLanding>
      <h1>
        안녕하세요! <br />
        <a href="https://github.com/NamJwong">NamJwong</a>이 만든 투두리스트 앱입니다.
      </h1>
      <button>로그인</button>
      <button>회원가입</button>
    </StLanding>
  );
}

const StLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  & > button {
    width: 100px;
  }
  & > h1 {
    text-align: center;
    line-height: 120%;
  }
`;
