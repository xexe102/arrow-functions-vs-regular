const executableName = getExecutableName(channel, appName);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const symbolsPath = path.join(buildOutputPath, 'symbols');