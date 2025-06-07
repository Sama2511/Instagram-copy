const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainEl = document.getElementById("main-el")



function renderPosts(){
    let profiles = ''
    for (i = 0 ; i < posts.length ; i++){
        profiles += `            
                <main id="main-el">
                    <section class="account">
                        <img id="icon-avatar" src="${posts[i].avatar}">
                        <h1> ${posts[i].name}</h1>
                        <p> ${posts[i].location}</p>
                    </section>
                    <div>
                        <img  id="post-avatar" src="${posts[i].post}">
                    </div>
                    <section class="captain">
                        <div class="icons">
                            <img id="icon" class="likeButton" src="images/icon-heart.png">
                            <img id="icon" src="images/icon-comment.png">
                            <img id="icon" src="images/icon-dm.png">
                        </div>
                        <h2> <span id="likes">${posts[i].likes}</span> likes</h2>
                        <p> <strong>${posts[i].username}</strong> ${posts[i].comment}</p>
                    </section>
                    <h3 id="bottomSpace"></h3>
                </main>
                `
        }
    mainEl.innerHTML = profiles
}



renderPosts()

const likeButtons = document.querySelectorAll('.likeButton')
const likesCounts = document.querySelectorAll("#likes")

likeButtons.forEach((button, i) =>{
    button.addEventListener('click', function(){
        let current = parseInt(likesCounts[i].textContent)
        likesCounts[i].textContent = current + 1
    })
})
