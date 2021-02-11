import React from 'react'
import styles from './Message.module.css'

type Props = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message({avatar, name, message, time}: Props) {
    return (
        <div className={styles.message}>
            <div>
                <img className={styles.avatar} src={avatar} alt="Avatar"/>
            </div>
            <div className={styles.message_container}>
                <div>
                    {name}
                </div>
                <div className={styles.message_content}>
                    {message}
                </div>
                <div className={styles.message_timestamp}>
                    {time}
                </div>
            </div>
        </div>
    )
}

export default Message
