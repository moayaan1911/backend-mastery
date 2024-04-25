/** @format */

// const higherOrderFunction = (functionInstance = async (req, res, next) => {
//   try {
//     return await functionInstance(req, res, next);
//   } catch (error) {
//     next(error);
//   }
// });

const higherOrderFunction = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};
export { higherOrderFunction };
