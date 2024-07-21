const copyToClipboard = (text) => navigator.clipboard.writeText(text);
const uniqueArray = arr => [...new Set(arr)];
const executableName = getExecutableName(channel, appName);