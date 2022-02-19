const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json({ message: 'Somgthing weng wrong, try again later'});
}

module.exports = errorHandlerMiddleware;