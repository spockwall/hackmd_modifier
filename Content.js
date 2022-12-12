window.addEventListener("load", () => {
	const doc = document.getElementById("doc");
	const spans = doc.getElementsByTagName("span");
	const config = { attributes: true, childList: true, subtree: true };
	const callback = (mutationList, observer) => {
		for (let i = 0; i < spans.length; i++) {
			for (let j = 0; j < spans[i].innerText.length; j++) {
				if (spans[i].innerText[j] == "©") {
					spans[i].innerText =
						spans[i].innerText.slice(0, j) +
						"(c)" +
						spans[i].innerText.slice(j + 1, spans[i].innerText.length);
					console.log("good");
				}
			}
		}
	};
	const observer = new MutationObserver(callback);
	observer.observe(doc, config);
});
// observer.disconnect();
