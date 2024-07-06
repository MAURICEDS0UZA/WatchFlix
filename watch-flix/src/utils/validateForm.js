const validateInput = (email, password) => {
  const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const paswordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g;

  if (!emailPattern.test(email)) {
    return "Please enter validate Email Id";
  }
  if (!paswordPattern.test(password)) {
    return "Please enter validate password";
  }
  return null;
};
export default validateInput;
