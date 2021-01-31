exports.getDate = function() { // "module.exports" can be written as "exports"
  const today = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  return day = today.toLocaleDateString("en-US", options);
}

exports.getDay = function() {
  const today = new Date();
  const options = {
    weekday: "long",
  };

  return day = today.toLocaleDateString("en-US", options);
}
