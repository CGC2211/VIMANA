import { createPool, Pool } from 'mysql2/promise'

/*export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'wintermute.public.hanka.com.mx',
        user: 'cagpony',
        password: '47jtrcP8rVs6KFKWcDMj',
        database: 'testing_api',
        connectionLimit: 10
    });
    console.log('connection object', connection)
    return connection;
}*/

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host:process.env.MY_SQL_DB_HOST,
        user: process.env.MY_SQL_DB_USER,
        password: process.env.MY_SQL_DB_PASSWORD,
        database: process.env.MY_SQL_DB_DATABASE,
        connectionLimit: 10
    });
    return connection;
}