import {IconChevron} from '../../../assets/icon-chevron'
import {IconProfile} from '../../../assets/icon-profile'
import css from './Profile.module.css'
import {useState} from "react";

 export const Profile = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <div className={css.profile}
             onClick={() => setIsMenuShown(!isMenuShown)}>
            <IconProfile/>
            <div className={`${css.chevron} ${isMenuShown ? css.up : ''}`}>
                <IconChevron/>
            </div>

            {isMenuShown && <div className={css.menu}>
                <div className={css.items}>Profile</div>
                <div className={css.items}>Log Out</div>
            </div>
            }
        </div>
    )
}