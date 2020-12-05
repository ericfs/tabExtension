// Listen for keyboard commands.
chrome.commands.onCommand.addListener(function(command){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var tab = tabs[0];
    var newIndex = tab.index;
    if (command.indexOf('right') >= 0) {
      newIndex += 1;
    } else if (command.indexOf('left') >= 0) {
      newIndex = Math.max(newIndex - 1, 0);
    } else if (command == 'new-window') {
      sendToNewWindow(tab);
      return;
    }
    chrome.tabs.move(tab.id, {index: newIndex});
  });
});

function sendToNewWindow(tab) {
  chrome.windows.get(tab.windowId, (w) => {
    const {top, left, width, height} = w;
    chrome.windows.create({tabId: tab.id, top, left, width, height});
  });
}