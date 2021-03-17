export const TOKEN_KEY = "bvz-identifyByJsonWebTokenOnAPIserver";


export const getToken = () => localStorage.getItem(TOKEN_KEY);


export const isAuthenticated = () => getToken() !== null;


export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};


export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
}; 