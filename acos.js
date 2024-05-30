const removeDuplicates = (arr) => [...new Set(arr)];
const buildOutputPath = path.join(repositoryRootPath, 'out');
const apmRootPath = path.join(repositoryRootPath, 'apm');