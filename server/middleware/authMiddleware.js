const { verifyToken } = require('@clerk/clerk-sdk-node');

const verifyClerkToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: 'Missing Authorization header' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Invalid Authorization header' });
    }

    // Pass your secret key from env here as options
    const verifiedToken = await verifyToken(token, {
      secretKey: process.env.CLERK_SECRET_KEY,
    });

    req.userId = verifiedToken.sub; // Attach userId to request
    next();
  } catch (error) {
    console.error('Clerk token verification failed:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = verifyClerkToken;
