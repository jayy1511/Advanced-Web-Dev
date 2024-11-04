import "./formComp.css"
import { inputComp } from "./inputComp"
import { updateUser } from "../utils/updateUser"
import { fetchUsers } from "../utils/fetchData"
import { handleData } from "../utils/handleData"
import { modalComp } from "./modalComp"

/**
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} userId
 * @returns {HTMLFormElement}
 */

export const formComp = (firstName, lastName, userId) => {
	const form = document.createElement("form")
	form.classList.add("form")

	form.appendChild(submitBtn)
	return form
}
