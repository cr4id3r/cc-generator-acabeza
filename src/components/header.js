import {Link} from "react-router-dom";
import {useState} from "react";

const MenuItem = ({target_path, actual_path, label, handle_change}) => {
    function clicked_menu_element() {
        handle_change(target_path);
    }

    return (
        <Link to={target_path} className={`link_element ${target_path == actual_path ? 'active': ''}`}
              onClick={() => clicked_menu_element(target_path)}>
            {label}
        </Link>
    )
};

export function Header() {
    const [actualPath, setActualPath] = useState('/');

    return (
        <div className="header">
            <div className="credit_cards_list">
                <MenuItem
                    target_path={"/"}
                    actual_path={actualPath}
                    label={'Visa'}
                    handle_change={(path_to_set) => setActualPath(path_to_set)}
                />

                <MenuItem
                    target_path={"/mastercard"}
                    actual_path={actualPath}
                    label={'MasterCard'}
                    handle_change={(path_to_set) => setActualPath(path_to_set)}
                />

                <MenuItem
                    target_path={"/ax"}
                    actual_path={actualPath}
                    label={'American Express'}
                    handle_change={(path_to_set) => setActualPath(path_to_set)}
                />
            </div>
        </div>
    )
}