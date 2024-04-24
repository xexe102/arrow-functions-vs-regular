console.log(+"1" +  "1" + "2");
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomString = () => Math.random().toString(36).slice(2);
const executableName = getExecutableName(channel, appName);
const intermediateAppPath = path.join(buildOutputPath, 'app');