export const removeFromArray = (ar, val) => {
  const array = [...ar]
  const index = array.indexOf(val);
  if (index !== -1) {
    array.splice(index, 1);
    return array;
  }
  return array;
};
