import {Request, Response} from 'express';
import { getPosts } from '../vimana/vimana.service';


 const posts = async (req: Request, res: Response): Promise<Response | void>  => {
    let results  = getPosts()
    await results.then(resolve => {
        return res.json(resolve)
    }).catch(error =>{
        console.log(error)
        return res.json(error)
    })
}

const createUser = async (req: Request, res: Response): Promise<Response | void>  => {
    try {

    }catch (e) {
        console.log(e)
        return res.json(e)
    }
}

export default { posts };