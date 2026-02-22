let avarage = (val) => {
  let total = val.reduce((acc, num) => {
    return acc + num;
  }, 0);

  let av = total / val.length;
  let final_num = val.filter((val) => {
    if (val > av) {
      return true;
    }
  });
  return final_num;
};
console.log(avarage([10, 20, 40, 50, 60, 130, 500]));

