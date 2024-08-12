import CreateButton from "./CreateButton"

export default function Nav(){
    return (
        <div className="navbar px-20">
            <div className="flex-1">
                <a className="font-mono btn btn-ghost text-xl font-bold text-white">LearnWithFUN</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li><a><CreateButton /></a></li>
                </ul>
            </div>
        </div>
    )
}