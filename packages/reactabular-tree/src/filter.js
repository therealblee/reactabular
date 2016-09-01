import getParents from './get-parents';

const filterTree = fieldName => rows => rows.filter((item, index) => {
  if (!item.parent) {
    return true;
  }

  const parents = getParents({ rows, index });

  return parents.filter(
    parent => parent[fieldName]
  ).length === parents.length;
});

export default filterTree;