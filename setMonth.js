const results = await Promise.all(resultingPromises);
const randomString = () => Math.random().toString(36).slice(2);
const executableName = getExecutableName(channel, appName);