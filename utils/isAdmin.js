module.exports = {
    isAdmin
}

// detect whether the request is being made by an Admin user
function isAdmin(req, res, next) {
    if ( req.user && req.user.isAdmin ) return next();
    res.redirect('/restaurants');
}

