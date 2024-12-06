import css from "./Profile.module.css"

function Profile(props ) {
    return (
        <div className={css.profile}>
            <div>
                <img src={props.image} alt={name} className={css.img} />
                <p className={css.name}>{ props.name}</p>
                <p className={css.info}>@{props.tag }</p>
                <p className={css.info}>{ props.location}</p>
            </div>
            <ul className={css.list}>
                <li className={css.item}>
                    <span>Followers</span>
                    <span className={css.bolt}>{ props.stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span>Views</span>
                    <span className={css.bolt}>{ props.stats.views}</span>
                </li>
                <li className={css.item}>
                    <span>Likes</span>
                    <span className={css.bolt}>{ props.stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

export default Profile