import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import Card from './Card';
import { initStore, initialCards, addItem } from '../store';
import data from './API/data.json'

/*
Actions:
- They are called from the component 
through the function call dispatch.

- You pass the actual function as an action.
In this case, we're passing initial cards.

- Once we call this, we are returning or
executing an action, which is passed down
into the reducer, which we will do shortly.

*/
class Index extends React.Component {

    // We also add the update for state of get initial props
    static async getInitialProps ({ store }) {
        // for redux code, return the store
        // calls from the store, and checks what is state at that point
        return store.dispatch( initialCards() )
    }

    render() {
        return (
            <div className={ styles.app }>
                <header className={styles.header}>
                    <Link href="/page3">
                        <img src="/logo.png" 
                            className = {styles.logo}
                            alt="logo"
                        />
                    </Link>
                </header>
                <div className={styles.grid}>
                    {
                        this.props.cards.map( (card) => 
                            (
                                <Card key={card.id} />
                            ))
                    }
                </div>
                {/* <button onClick={() => dispatch(addItem(item)) } />  <-- add 'item' if adding item from reducers */}
            </div>
        )
    }
};
/*
In this case when we click on this button, we call the add item action through method dispatch
*/

// So we wrap our code in our store, now we have state available to use in our component
// apply wrapper in our code
export default initStore.withRedux(Index);

/*
UPDATE 06/29/2021:
- Changed dependencies based from the video, then did 'npm update'
- dependencies can make things undefined in the code
*/

