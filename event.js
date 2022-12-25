// background (event) page
let parent = chrome.contextMenus.create({
	title: "nice print",
	id: "0",
	contexts: ["all"],
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
	chrome.tabs.sendMessage(tab.id, {});
});
