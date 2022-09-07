chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log('onUpdated');
  console.log(changeInfo.status, tab);
  if (changeInfo.status == 'complete' && tab.active) {
    console.log('mandando mensaje');
    const messageType = tab?.url?.includes('https://www.linkedin.com/in')
      ? 'inLinkedinProfile'
      : 'notInLinkedinProfile';
    chrome.tabs.sendMessage(tabId, { type: messageType });
  }
});
