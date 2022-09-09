chrome.runtime.onConnect.addListener((port) => {
  console.log(port);

  port.disconnect();
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    const messageType = tab?.url?.includes('https://www.linkedin.com/in')
      ? 'inLinkedinProfile'
      : 'notInLinkedinProfile';
    chrome.tabs.sendMessage(tabId, { type: messageType });
  }
});
