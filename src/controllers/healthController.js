const getHealth = (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
};

module.exports = {
  getHealth
};