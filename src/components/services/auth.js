export const TOKEN_KEY = "bvz-identifyByJsonWebTokenOnAPIserver";


export const getToken = () => localStorage.getItem('token');


export const isAuthenticated = () => !!getToken();


export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
}; 