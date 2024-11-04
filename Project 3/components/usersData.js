import "./usersData.css"
/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @returns {HTMLDivElement}
 */

export const usersData = (firstName, lastName) => {
	const dataContainer = document.createElement("div")
	dataContainer.classList.add("data-container")

	return dataContainer
}
