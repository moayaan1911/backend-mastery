/** @format */

const higherOrderFunction = (functionInstance = async (req, res, next) => {
  try {
    return await functionInstance(req, res, next);
  } catch (error) {
    next(error);
  }
});

export { higherOrderFunction };
