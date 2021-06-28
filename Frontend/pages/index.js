import React from 'react';
import { initStore } from '../store';
import styles from './index.module.css';
import Card from './Card';

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
                    <div className={styles.grid}>
                        {
                            this.props.cards.map( (card) => 
                                (
                                    <Card key={card.id} />
                                ))
                        }
                    </div>
                </header>
            </div>
        )
    }
};

// So we wrap our code in our store, now we have state available to use in our component
// apply wrapper in our code
export default initStore.withRedux( Index );

