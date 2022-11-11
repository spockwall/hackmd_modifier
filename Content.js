window.addEventListener("load", () => {
	const doc = document.getElementById("doc");
	const spans = doc.getElementsByTagName("span");
	const config = { attributes: true, childList: true, subtree: true };
	const callback = (mutationList, observer) => {
		for (let i = 0; i < spans.length; i++) {
			if (spans[i].innerText == "©") {
				spans[i].innerText = "(c)";
			}
		}
	};
	const observer = new MutationObserver(callback);
	observer.observe(doc, config);
});
// observer.disconnect();
