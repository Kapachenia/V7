const arr = [4,6, [5,9]];

const getMaxDepthAndSum = (arr) => {
  const isArray = (item) => Array.isArray(item);

  const getMaxDepth = (item, level = 0) =>
    isArray(item) ? Math.max(...item.map((value, index) => getMaxDepth(value, level + 1))) - (level > 0 ? 0 : 1) : level;
  const getSum = array =>
    array.reduce((sum, num) => sum + (isArray(num) ? getSum(num) : num * 1), 0);

  const maxDepth = getMaxDepth(arr);
  const arrSum = getSum(arr);

  return `Сумма: ${arrSum}, Макс. вложенность: ${maxDepth}`;
}


console.log(getMaxDepthAndSum(arr))
