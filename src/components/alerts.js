

export const MiniTopMessage = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "show" : "hide";
    return(
        <div className={"mini_top_message " + showHideClassName}>
            {children}
        </div>
    )
}