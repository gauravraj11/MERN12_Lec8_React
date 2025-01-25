import React from 'react'

export default function Child({children}) {
    return (
        <article>
            <h1>My First Component {children}</h1>
            <ol>
                <li>Components: UI Building Blocks</li>
                <li>Defining a Component</li>
                <li>Using a Component</li>
            </ol>
        </article>
    )
}
