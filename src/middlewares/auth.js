export const adminAuth = (req,res,next)=>{
 const token = 'Valid'
    const isAdminAuthrised = token === 'Valid'
    if(isAdminAuthrised){
        next();
        res.send('user is Authrisedd and login succesfully')
    }
    else res.status(401).send('unathrised request')
}