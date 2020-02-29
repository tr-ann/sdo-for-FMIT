module.exports.build = (data, message, code, status) => {
  return { data, code, message, status };
};

module.exports.error = (error, message, code, status) => {
  return { error, code, message, status };
};