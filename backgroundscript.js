// Listen for keyboard commands.
chrome.commands.onCommand.addListener(function(command){
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var tab = tabs[0];
    var newIndex = tab.index;
    if (command == 'move-tab-right') {
      newIndex += 1;
    } else if (command == 'move-tab-left') {
      newIndex = Math.max(newIndex - 1, 0);
    }
    chrome.tabs.move(tab.id, {index: newIndex});
  });
});