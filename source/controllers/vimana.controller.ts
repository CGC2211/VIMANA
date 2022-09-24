import {Request, Response} from 'express';
import { connect } from '../utils/mysql.connector';


async function getPosts(req: Request, res: Response): Promise<Response | void> {
    try {
        const conn = await connect();
        console.log(process.env.MY_SQL_DB_USER)
        const posts = await conn.query('SELECT * FROM VIMN');
        return res.json(posts[0]);
    }
    catch (e) {
        console.log(e)
        return res.json(e)
    }
}

export default { getPosts };