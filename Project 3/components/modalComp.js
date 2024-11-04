import "./modalComp.css"

export const modalComp = (titleText) => {
	const modalOverLay = document.createElement("div")

	window.addEventListener("keydown", (e) => {
		if (e.key === "Escape") return modalOverLay.classList.remove("show")
	})

	return modalOverLay
}
