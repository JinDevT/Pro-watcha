import client from './client';

// 회원인증에 필요한 API를 사용하기 쉽도록 함수화하여 정리.

// 로그인
export const login = ({ email, password}) => 
    client.post('/api/auth/login', { email, password });

 // 회원가입
export const register =({ email, password }) =>
    client.post('/api/auth/register', { email, password });

// 로그인 상태확인
export  const check =() => client.get('/api/auth/check');
