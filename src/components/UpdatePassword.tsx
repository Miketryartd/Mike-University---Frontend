import {useProfile} from "../hooks/useProfile"
export default function UpdatePassword(){

    return (
        <>
        <div>
            <form>
                <input type="password" placeholder="Enter your password" required></input>
                <input type="password" placeholder="Enter new password" required ></input>
                <input type="password" placeholder="Re-enter new password" required></input>
                <button>Save</button>
            </form>
            </div>
        </>
    )
}