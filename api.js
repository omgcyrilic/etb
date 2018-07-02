import WPAPI from 'wpapi';

let endpoint = 'https://api.eatthisbeef.com/wp-json';

const api = new WPAPI({ endpoint });
export default api;
