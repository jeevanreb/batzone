export const allowMailInput = (currentValue, oldValue, max = null) => {
  if (max !== null && currentValue.length > max) return oldValue;
  const re = /^[\a-zA-Z0-9@.!]*$/; // adjust allowed chars as needed
  if (currentValue === "" || re.test(currentValue)) return currentValue;

  return oldValue;
};

export const allowNameInput = (currentValue, oldValue, max = null) => {
  if (max !== null && currentValue.length > max) return oldValue;

 const re = /^[A-Za-z][A-Za-z\s]*$/;
  if (currentValue === "" || re.test(currentValue)) return currentValue;

  return oldValue;
};

export const allowNumberInput = (currentValue, oldValue, max = null) => {
  if (max !== null && currentValue.length > max) return oldValue;

  const re = /^[0-9\b]+$/; //number
  if (currentValue === "" || re.test(currentValue)) return currentValue;

  return oldValue;
};
