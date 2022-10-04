import { connect } from '../utils/mysql.connector';

const getPosts = async () => {
    let results
    try {
        const conn = await connect();
        const posts = await conn.query('SELECT * FROM VIMN');
        results = posts[0]
        return results
    }
    catch (e) {
        console.log(e)
        results = e
        return results
    }
}

export { getPosts };