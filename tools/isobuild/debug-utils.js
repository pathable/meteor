const FILES_TO_LOG = ['pluralize/index.js', 'meteor/pathable-vendor/pluralize',
  'node_modules/pluralize'];

export const isFileToLog = (file, {callerName, context} = {}) => {
  if (!file) {
    console.log(callerName, ': file was undefined ', JSON.stringify(context));
    return;
  }
  return FILES_TO_LOG.some(f => file.includes(f));
};
