import css from './FriendList.module.css'
import clsx from 'clsx'
import profile from "../Profile/profile.json"
import FriendListItem from './FriendListItem/FriendListItem'

function FriendList({ props }) {
    
    return (
        <div className={css.friends}>
            <p className={css.title}>{ profile.username}`s friends</p>
            <ul className={css.list}>
                {props.map(({avatar, name, isOnline, id }) => {
                    return <li key={id}>
                        <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        /></li>
                })}
            </ul>
        </div>
    )
}

export default FriendList


{/* <li key={id} className={css.item}>
                        <img src={avatar} alt={name} className={ css.img} />
                        <p className={css.name}>{ name}</p>
                        <p className={clsx(isOnline ? css.green : css.red)}>{ isOnline? `Online`: `Offline`}</p>
                    </li> */}