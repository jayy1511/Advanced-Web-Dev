import "./cardImage.css"
/**
 * @param {string} cardImg // image url to be displayed on the image avatar
 * @returns {HTMLDivElement}
 */

export const cardImage = (cardImg) => {
	const cardDiv = document.createElement("div")
	cardDiv.classList.add("card-image")

	return cardDiv
}
