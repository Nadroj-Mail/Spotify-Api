const clientId = 'CLIENT-ID';
const clientSecret = 'CLIENT-SECRET';
const tokenEndpoint = 'https://accounts.spotify.com/api/token';

const requestData = new URLSearchParams();
requestData.append('grant_type', 'client_credentials');
requestData.append('client_id', clientId);
requestData.append('client_secret', clientSecret);

fetch(tokenEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: requestData
})
  .then(response => response.json())
  .then(data => {
    console.log('Access Token:', data.access_token);
    console.log('Token Type:', data.token_type);
    console.log('Expires In:', data.expires_in);
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });