import {jwtDecode} from 'jwt-decode';

function isTokenValid() {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp > currentTime;
    } catch (error) {
        console.error('Token kan niet gedecodeerd worden:', error);
        return false;
    }
}

export default isTokenValid;




// moet nog verder uitgeschreven. -->