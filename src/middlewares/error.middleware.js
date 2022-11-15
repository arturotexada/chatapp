const handleError = (error, req, res, next) => {
    const {status, errorContent, errorMessage} = error;
    res.status(status).json({
        errorMessage,
        error: errorContent.message
    });
};

module.exports = handleError;