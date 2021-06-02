module.exports = function requireAuth(req,res,next){


    if(req.session.currentUser === undefined){
        res.status(401).json({message: "Olalala vous n'avez pas le droit detre la"})
    }else{
        next();
    }

}