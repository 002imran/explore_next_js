import Link from 'next/link';
import React from 'react';

const blog = () => {
    return (
        <div>
            <h2>Welcome, to my blog page!</h2>
            <Link href='/'>Home</Link>
        </div>
    );
};

export default blog;