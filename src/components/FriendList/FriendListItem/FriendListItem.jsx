import clsx from "clsx"
import css from './FriendListItem.module.css';
function FriendListItem({avatar, name, isOnline}) {
    
    return (
        <div>
            <img src={avatar} alt={name} width="48" className={ css.img} />
            <p className={css.name}>{name}</p>
            <p className={clsx(isOnline? css.green : css.red)}>{ isOnline? `Online` : `Offline`}</p>
        </div>
    )
}

export default FriendListItem