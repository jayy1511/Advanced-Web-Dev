import "./userActions.css"
import { actionButton } from "./actionButton "
import edit from "../assets/edit.svg"
import trash from "../assets/trash.svg"
import { formComp } from "./formComp"
import { deleteUser } from "../utils/deleteUser"
import { init } from "../main"

export const usersActions = () => {
	const actionsContainer = document.createElement("div")
	actionsContainer.classList.add("actions-container")

	const buttonOne = actionButton(edit, "warning-btn", buttonOneFn)
	const buttonTwo = actionButton(trash, "danger-btn", buttonTwoFn)

	actionsContainer.appendChild(buttonOne)
	actionsContainer.appendChild(buttonTwo)

	return actionsContainer
}

function buttonOneFn(e) {
	const selectedCard = e.target.parentElement.parentElement
	const userId = selectedCard.getAttribute("userId")

}

function buttonTwoFn(e) {
	const selectedCard = e.target.parentElement.parentElement
	const userId = selectedCard.getAttribute("userId")
}
