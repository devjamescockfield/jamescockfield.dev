import React from 'react';

export default function ContentComponent({ content } : { content: string }) {
    return (
        <div>
            {content}
        </div>
    );
};