const getWelcome = (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getWelcome
};