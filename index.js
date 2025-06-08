import { posts } from './data.js'


const closingbutton = document.getElementById('closingbtn')
const commentWindow = document.getElementById('comment-window')

closingbutton.addEventListener('click' ,function(){ 
    commentWindow.style.display = 'none'
})


document.addEventListener('click', function(e){
    if(e.target.dataset.like){
        Handlelikebtn(e.target.dataset.like)
    }else if(e.target.dataset.comment){
        HandleCommentbtn(e.target.dataset.comment)
    }else if(e.target.dataset.dm){
        HandleDMbtn(e.target.dataset.dm)
    }
})



function Handlelikebtn(id){
    const targetpostlike = posts.filter(function(post){
        return post.uuid === id
    })[0]
    if(targetpostlike.isLiked){
        targetpostlike.likes--
    }else{
        targetpostlike.likes++
    }
    targetpostlike.isLiked = !targetpostlike.isLiked
    render()
}



function HandleCommentbtn(id){
    commentWindow.style.display = 'flex'
    const targetpostcomment = posts.filter(function(post){
        return post.uuid === id
    })[0]
    
}

function HandleDMbtn(id){
    const targetpostdm = posts.filter(function(post){
        return post.uuid === id
    }) [0]
    console.log(targetpostdm)
}



function buildPosts(){

    let profiles = ''
    posts.forEach(function(post){
        let likeIconClass = ''
        if(post.isLiked){
            likeIconClass = 'liked'
        }

        profiles += `            
                <main id="main-el">
                    <section class="account">
                        <img id="icon-avatar" src="${post.avatar}">
                        <h1> ${post.name}</h1>
                        <p> ${post.location}</p>
                    </section>
                    <div>
                        <img  id="post-avatar" src="${post.postimg}">
                    </div>
                    <section class="captain">
                        <div class="icons">
                            <i class="fa-solid fa-heart ${likeIconClass} " data-like='${post.uuid}'></i>
                            <i class="fa-regular fa-comment " data-comment ='${post.uuid}'></i>
                            <i class="fa-regular fa-paper-plane " data-dm ='${post.uuid}'></i>
                        </div>
                        <h2> <span id="likes">${post.likes}</span> likes</h2>
                        <p> <strong>${post.username}</strong> ${post.comment}</p>
                    </section>
                    <h3 id="bottomSpace"></h3>
                </main>

                `
    })
    return profiles

        }


function render(){
        document.getElementById("main-el").innerHTML = buildPosts()
}

render()

