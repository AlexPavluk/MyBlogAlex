import jwt from 'jsonwebtoken'

export default (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
     
    console.log(req.headers);
    if (token) {
        try {
           const decodet = jwt.verify(token, 'secret123');
           
           req.userId =  decodet._id;
           next();
        } catch (e) {
           return res.status(403).json({
            message: 'Нет доступа'
           }); 
        }
    } else {
        return res.status(402).json({
            message: 'Нет доступа'
        });
    }
    
}