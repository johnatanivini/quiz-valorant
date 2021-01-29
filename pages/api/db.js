import db from './../../db.json'

export default function(request, response){
    
    if(request.method === 'OPTIONS'){
        response.status(200).end()
        return;
    }

    response.setHeader('Access-Control-Credentials',true)
    response.setHeader('Access-Allow-Origin','*')
    response.setHeader('Access-Allow-<ethods','GET,OPTIONS,POST,DELETE,PUT,PATH')
    response.setHeader('Access-Control-Credentials',true)
    
    return response.json(db)

}