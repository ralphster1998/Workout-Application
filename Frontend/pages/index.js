import React from 'react';
import { initStore, initialCards, addItem } from '../store';
import styles from './index.module.css';
import Card from './Card';

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
        // for redux codde, return the store
        // calls from the store, and checks what is state at that point
        return store.dispatch( initialCards() );
    }

    render() {
        return (
            <div className={ styles.app }>
                <header className={styles.header}>
                    <img src="/logo.png" 
                         className = {styles.logo}
                         alt="logo"
                    />
                </header>
                <div className={styles.grid}>
                    {
                        this.props.cards.map( (card) => 
                            (
                                <Card key={card.id} />
                            ))
                    }
                </div>
                {/* <button onClick={() => dispatch(addItem) } />  */}
            </div>
        )
    }
};
/*
In this case when we click on this button, we call the add item action through method dispatch
*/

// So we wrap our code in our store, now we have state available to use in our component
// apply wrapper in our code
export default initStore.withRedux( Index );

