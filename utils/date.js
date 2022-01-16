const getDistance = (date) => {
  const [,month,day] = date.split("-")
  const today = new Date();
  let year = today.getFullYear()
  if (+month < today.getMonth() + 1 || (+month === today.getMonth() + 1 && +day < today.getDate())) {
    year = year+1
  }
  const birthday = new Date(`${year}-${month}-${day}`);

  return Math.floor((birthday.getTime() - today.getTime()) / (1000*3600*24))
};

module.exports = {
  getDistance
}