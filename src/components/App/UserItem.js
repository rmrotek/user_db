import React from 'react';

const UserItem = ({ article: user }) => (
 <article >
    <div className="article-wrapper">
       <h3 className="text-center">{user.name}</h3>
       
    </div>
 </article>
);

export default UserItem ;