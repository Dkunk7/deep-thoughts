import React from 'react';
import { Link } from 'react-router-dom';

const ThoughtList = ({ thoughts, title }) => { // props destructured into thoughts array and title to avoid using props.thoughts and props.title
    if (!thoughts.length) {
        return <h3>No Thoughts Yet</h3>;
    }

    return (
        <div>
            <h3>{title}</h3>
            {thoughts &&
                thoughts.map(thought => (
                    <div key = {thought._id} className = "card mb-3"> {/* Use key to help React know which data to re-render if something changes */}
                        <p className = "card-header">
                            <Link
                                to = {`/profile/${thought.username}`}
                                style = {{ fontWeight: 700 }}
                                className = "text-light"
                            >
                                {thought.username}
                            </Link>{' '}
                            thought on {thought.createdAt}
                        </p>
                        <div className = "card-body">
                            <Link to = {`/thought/${thought._id}`}>
                                <p>{thought.thoughtText}</p>
                                <p className = "mb-0">
                                    Reactions: {thought.reactionCount} || Click to{' '}
                                    {thought.reactionCount ? 'see' : 'start' } the discussion! {/* if there are reactions, it says click to SEE the discussion; if not, it says click to START */}
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;