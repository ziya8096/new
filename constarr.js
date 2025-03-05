const countCharacters = (arr) => {
    const countObj = {};
  
    arr.forEach((char) => {
      countObj[char] = (countObj[char] || 0) + 1;
    });
  
    return countObj;
  };
  
  const arr = ["a", "a", "a", "b", "b", "c", "c", "c", "d"];
  console.log(countCharacters(arr));
  