import WPAPI from 'wpapi'

const endpoint = 'https://api.eatthisbeef.com/index.php/wp-json/wp/v2/posts'

const api = new WPAPI({ endpoint })
export default api
