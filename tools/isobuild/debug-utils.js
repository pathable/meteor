const FILES_TO_LOG = ['meteor/pathable-ui/components/person/person'];

export const isFileToLog = (file, {callerName, context} = {}) => {
  if (!file) {
    console.log(callerName, ': file was undefined ', JSON.stringify(context));
    return;
  }
  return FILES_TO_LOG.some(f => file.includes(f));
};
