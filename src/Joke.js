import React from "react";
import "./Joke.css";

const Joke = ({vote, votes, text, id}) => {
  //Functions for up voting and down voting the dad jokes 
  //these will add or decrease the number by the joke.
  const upVote = (e) => {vote(id, +1);}
  const downVote = (e) => {vote(id, -1);}

  return (
    <div>
      <div>
        <button onClick={upVote}>+</button>
        <button onClick={downVote}>-</button>
        {votes}
      </div>
      <div>{text}</div>
    </div>
  )
}

export default Joke;

/** A single joke, along with vote up/down buttons. */

// class Joke extends Component {
//   render() {
//     const { id, vote, votes, text } = this.props;

//     return (
//       <div className="Joke">
//         <div className="Joke-votearea">
//           <button onClick={evt => vote(id, +1)}>
//             <i className="fas fa-thumbs-up" />
//           </button>

//           <button onClick={evt => vote(id, -1)}>
//             <i className="fas fa-thumbs-down" />
//           </button>

//           {votes}
//         </div>

//         <div className="Joke-text">{text}</div>
//       </div>
//     );
//   }
// }

// export default Joke;
