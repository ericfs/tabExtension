// Listen for keyboard commands.
chrome.commands.onCommand.addListener(function(command){
  console.log(command);
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs) {
    var tab = tabs[0];
    var newIndex = tab.index;
    if (command.indexOf('right') >= 0) {
      newIndex += 1;
    } else if (command.indexOf('left')) {
      newIndex = Math.max(newIndex - 1, 0);
    }
    chrome.tabs.move(tab.id, {index: newIndex});
  });
});