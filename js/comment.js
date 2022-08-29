function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displaycomment(data))
}


function displaycomment(comments) {

    const commentContainer = document.getElementById('comment-container');
    
    for (const comment of comments) {
        const commentDiv = document.createElement('div');

        commentDiv.classList.add('comment')
        // console.log(comment);

        commentDiv.innerHTML = `
            <h4>UserId-${comment.postId}</h4>
            <h5>ID: ${comment.id}</h5>
            <p>comment name: ${comment.name}</p>
            <p>comment email: ${comment.email}</p>
            <p>comment Description: ${comment.body}</p>
        `;
        commentContainer.appendChild(commentDiv);
    }
}

loadComments();