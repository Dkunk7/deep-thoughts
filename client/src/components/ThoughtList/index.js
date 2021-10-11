import React from 'react';

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
                            {thought.username}
                            thought on {thought.createdAt}
                        </p>
                        <div className = "card-body">
                            <p>{thought.thoughtText}</p>
                            <p className = "mb-0">
                                Reactions: {thought.reactionCount} || Click to{' '}
                                {thought.reactionCount ? 'see' : 'start' } the discussion! {/* if there are reactions, it says click to SEE the discussion; if not, it says click to START */}
                            </p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ThoughtList;