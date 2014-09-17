// Events
chrome.tabs.onCreated.addListener(tabCreatedEvent);

function tabCreatedEvent(tab)
{
	chrome.tabs.move([tab.id], { index : -1})	
}
