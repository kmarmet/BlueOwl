import React from "react";
import ReactDOM from "react-dom";
import Card from "./src/js/Components/Card"
class BlueOwl extends React.Component {
    state = {
        cards: [],
        cardCount: 0
    }
    generateRandomNumber = () => {
        return Math.floor(Math.random() * 101);
    }
    sort = (dir = "asc") => {
        const cards = this.state.cards;
        cards.sort((a,b) => {return a.randomNumber - b.randomNumber});
        if (dir === "desc") {
            cards.sort((a,b) => {return b.randomNumber - a.randomNumber});
        }
        this.setState({ cards: cards });
    }
    render() {
        return (
            <div id="container">
                <section className="column left">
                    <div className="action-bar">
                        <button className="add" onClick={() => this.setState({ cards: [...this.state.cards, {card: <Card />, randomNumber: this.generateRandomNumber(), index: this.state.cardCount}], cardCount: this.state.cardCount += 1 })}>Add Card <i className="ion-plus-round"></i></button>
                        <button className="sort" onClick={() => this.sort("asc")}>Sort Cards (asc) <i className="ion-arrow-up-c"></i></button>
                        <button className="sort" onClick={() => this.sort("desc")}>Sort Cards (desc) <i className="ion-arrow-down-c"></i></button>
                        <div id="card-count">{this.state.cards.length}</div>
                    </div>
                    {/* CARDS */}
                    <div id="cards">
                        {this.state.cards.length > 0 &&
                            this.state.cards.map((card, index) => {
                                return (<Card key={index} randomNumber={card.randomNumber} cardIndex={card.index} removeCard={() => this.setState({ cards: this.state.cards.filter(x => x.index !== card.index)  })} />)
                            })}
                    </div>
                    {/* FOOTER */}
                    <footer><p>Footer</p></footer>
                </section>
                {/* ASIDE - INSTRUCTIONS */}
                <aside className="column right">
                    <h3>Instructions</h3>
                    <p>Please create a responsive React application (using javascript or typescript) that displays a list of cards on a page as shown below.</p>
                    <p>There is a fixed-width pane on the right side of the window that remains attached to the right side when the user re-sizes. Inside the pane, please paste a formatted display of these instructions. And if the browser width is small, hide the pane completely.</p>
                    <p>There is a fixed-height toolbar on the top of the window that has buttons.</p>
                    <p>There is a fixed-height footer on the bottom of the window that just shows the text "footer".</p>
                    <p>The main center portion of the window is the card container. It should start out with zero cards. Cards are only added when the user clicks 'add card' in the top toolbar. It has a vertical scrollbar which can be used if there are too many cards to display at once. It lays out the cards in rows, wrapping as needed. In this mockup only 2 cards are shown per row, but if the browser is wider, 3 or more cards might fit in a row. If narrower, maybe only 1 card would be visible.</p>
                    <p>Each card has a set pixel size, such as 300px by 250px, but you can decide what size you wish to use. Upon instantiation, a card should be given a random number between 0 and 100 and display it in the center of the card.</p>
                    <p>Each card has a button in the top-right corner which can be used to delete the card.</p>
                    <p>If the user clicks the 'sort cards' button at the top of the page, please sort the cards in order of the number that is shown in the center of each card.</p>
                </aside>
            </div>
        )
    }
}

// Render App
ReactDOM.render(<BlueOwl />, document.querySelector("#app"));