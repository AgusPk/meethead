let currentUrl = '';
let tabId: number;

chrome.webNavigation.onHistoryStateUpdated.addListener(
  (details) => {
    tabId = details.tabId;
    currentUrl = details.url;
    console.log('WEBNAV DETAILS: ', details);
    console.log('WEBNAV, currentRUL: ', currentUrl);
  },
  {
    url: [
      {
        hostContains: '.linkedin',
      },
    ],
  },
);

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    console.log('changeInFO: ', changeInfo);
    const messageType = tab?.url?.includes('https://www.linkedin.com/in')
      ? 'inLinkedinProfile'
      : 'notInLinkedinProfile';
    chrome.tabs.sendMessage(tabId, { type: messageType });
  }
});
