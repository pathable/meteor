const FILES_TO_LOG = [];

export const isFileToLog = (file, {callerName, context} = {}) => {
  if (FILES_TO_LOG) {
    return;
  }

  if (!file) {
    console.log(callerName, ': file was undefined ', JSON.stringify(context));
    return;
  }
  return FILES_TO_LOG.some(f => file.includes(f));
};
