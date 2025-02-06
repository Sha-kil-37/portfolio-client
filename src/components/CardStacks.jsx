import { Fragment, useState } from "react";

const CardStacks = () => {
  const [cardsTransition, setCardsTransition] = useState(false);
  const [stacksTransition, setStacksTransition] = useState(false);
  const [splitTransition, setSplitTransition] = useState(false);
  const [splitDelayTransition, setSplitDelayTransition] = useState(false);
  //
  return (
    <Fragment>
      <ul
        className={`cards ${cardsTransition ? "transition" : ""}`}
        onClick={() => setCardsTransition(!cardsTransition)}
      >
        <li className="title">
          <h2>Slide right</h2>
        </li>
        <li className="card card-1">
          <img src="/src/assets/images/five.png" alt="City" />
          <div className="content">
            <h1>Card 1 Title</h1>
            <p>Card description</p>
          </div>
        </li>
        <li className="card card-2">
          <img src="/src/assets/images/four.png" alt="Food" />
          <div className="content">
            <h1>Card 2 Title</h1>
            <p>Card description</p>
          </div>
        </li>
        <li className="card card-3">
          <img src="http://lorempixel.com/400/250/animals" alt="Animals" />
          <div className="content">
            <h1>Card 3 Title</h1>
            <p>Card description</p>
          </div>
        </li>
      </ul>
      <hr />
      <ul
        className={`card-stacks ${stacksTransition ? "transition" : ""}`}
        onClick={() => setStacksTransition(!stacksTransition)}
      >
        <li className="title">
          <h2>Expand to grid</h2>
        </li>
        <li className="stack stack-1">
          <ul className="cards-down">
            <li className="card card-1">
              <img src="http://lorempixel.com/401/250/city" alt="City" />
              <div className="content">
                <h1>Card 1 Title</h1>
                <p>Stack 1</p>
              </div>
            </li>
            <li className="card card-2">
              <img src="http://lorempixel.com/401/250/food" alt="Food" />
              <div className="content">
                <h1>Card 2 Title</h1>
                <p>Stack 1</p>
              </div>
            </li>
            <li className="card card-3">
              <img src="http://lorempixel.com/401/250/animals" alt="Animals" />
              <div className="content">
                <h1>Card 3 Title</h1>
                <p>Stack 1</p>
              </div>
            </li>
          </ul>
        </li>
        <li className="stack stack-2">
          <ul className="cards-down">
            <li className="card card-1">
              <img src="http://lorempixel.com/402/250/city" alt="City" />
              <div className="content">
                <h1>Card 1 Title</h1>
                <p>Stack 2</p>
              </div>
            </li>
            <li className="card card-2">
              <img src="http://lorempixel.com/402/250/food" alt="Food" />
              <div className="content">
                <h1>Card 2 Title</h1>
                <p>Stack 2</p>
              </div>
            </li>
            <li className="card card-3">
              <img src="http://lorempixel.com/402/250/animals" alt="Animals" />
              <div className="content">
                <h1>Card 3 Title</h1>
                <p>Stack 2</p>
              </div>
            </li>
          </ul>
        </li>
        <li className="stack stack-3">
          <ul className="cards-down">
            <li className="card card-1">
              <img src="http://lorempixel.com/403/250/city" alt="City" />
              <div className="content">
                <h1>Card 1 Title</h1>
                <p>Stack 3</p>
              </div>
            </li>
            <li className="card card-2">
              <img src="http://lorempixel.com/403/250/food" alt="Food" />
              <div className="content">
                <h1>Card 2 Title</h1>
                <p>Stack 3</p>
              </div>
            </li>
            <li className="card card-3">
              <img src="http://lorempixel.com/403/250/animals" alt="Animals" />
              <div className="content">
                <h1>Card 3 Title</h1>
                <p>Stack 3</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <hr />
      <ul
        className={`cards-split ${splitTransition ? "transition" : ""}`}
        onClick={() => setSplitTransition(!splitTransition)}
      >
        <li className="title">
          <h2>Split from middle</h2>
        </li>
        <li className="card card-1">
          <img src="http://lorempixel.com/400/250/city" alt="City" />
          <div className="content">
            <h1>Card 1 Title</h1>
            <p>Card description</p>
          </div>
        </li>
        <li className="card card-2">
          <img src="http://lorempixel.com/400/250/food" alt="Food" />
          <div className="content">
            <h1>Card 2 Title</h1>
            <p>Card description</p>
          </div>
        </li>
        <li className="card card-3">
          <img src="http://lorempixel.com/400/250/animals" alt="Animals" />
          <div className="content">
            <h1>Card 3 Title</h1>
            <p>Card description</p>
          </div>
        </li>
      </ul>
      <hr />
      <ul
        className={`cards-split-delay ${
          splitDelayTransition ? "transition" : ""
        }`}
        onClick={() => setSplitDelayTransition(!splitDelayTransition)}
      >
        <li className="title">
          <h2>Delayed split from middle</h2>
        </li>
        <li className="card card-1">
          <img src="http://lorempixel.com/400/250/city" alt="City" />
          <div className="content">
            <h1>Card 1 Title</h1>
            <p>Card description</p>
          </div>
        </li>
        <li className="card card-2">
          <img src="http://lorempixel.com/400/250/food" alt="Food" />
          <div className="content">
            <h1>Card 2 Title</h1>
            <p>Card description</p>
          </div>
        </li>
        <li className="card card-3">
          <img src="http://lorempixel.com/400/250/animals" alt="Animals" />
          <div className="content">
            <h1>Card 3 Title</h1>
            <p>Card description</p>
          </div>
        </li>
      </ul>
    </Fragment>
  );
};

export default CardStacks;
