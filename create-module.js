var list = [];

function createList(num) {
  list.push(num);
  sorting(list);
  return list;
};

function sorting(array) {
  return(array.sort());
};

//sorting([4,3,2]);

module.exports = {
  theList: createList
};


