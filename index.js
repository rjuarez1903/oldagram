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

let d     = document;
let main  = d.querySelector('main')

for (let postit of posts) {

    let mainDiv        = d.createElement('div');
    let heading        = d.createElement('div');
    let logo           = d.createElement('img');
    let userAvatar     = d.createElement('img');
    let section1       = d.createElement('div');
    let postData       = d.createElement('div');
    let avatarPost     = d.createElement('img');
    let profileNameLoc = d.createElement('div');
    let name           = d.createElement('h1');
    let loc            = d.createElement('p');
    let postImg        = d.createElement('img');
    let mainPost       = d.createElement('div');
    let icons          = d.createElement('div');
    let iconHeart      = d.createElement('img');
    let iconComment    = d.createElement('img');
    let iconDm         = d.createElement('img');
    let likesNum       = d.createElement('p');
    let txt            = d.createElement('p');
    

    main.appendChild(mainDiv);
    mainDiv.appendChild(heading);
    heading.appendChild(logo);
    heading.appendChild(userAvatar);
    mainDiv.appendChild(section1);
    section1.appendChild(postData);
    section1.appendChild(postImg);
    postData.appendChild(avatarPost);
    postData.appendChild(profileNameLoc);
    mainDiv.appendChild(mainPost);
    profileNameLoc.appendChild(name);
    profileNameLoc.appendChild(loc);
    mainPost.appendChild(icons);
    icons.appendChild(iconHeart);
    icons.appendChild(iconComment);
    icons.appendChild(iconDm);
    mainPost.appendChild(likesNum);
    mainPost.appendChild(txt);

    mainDiv.className     = 'card-oldagram';
    heading.className     = 'heading';
    logo.src              = 'images/logo.png';
    logo.alt              = 'oldagram logo';
    logo.className        = 'oldagram'
    userAvatar.src        = 'images/user-avatar.png';
    userAvatar.alt        = 'user avatar';
    userAvatar.className  = 'user-avatar';
    postData.className    = 'post-data';
    avatarPost.src        = postit.avatar;
    avatarPost.className  = 'avatar-post';
    name.textContent      = postit.name;
    loc.textContent       = postit.location;
    postImg.className     = 'main-pic'
    postImg.src           = postit.post;
    mainPost.className    = 'post';
    icons.className       = 'icons'
    iconHeart.className   = 'icon';
    iconHeart.src         = 'images/icon-heart.png';
    iconComment.className = 'icon';
    iconComment.src       = 'images/icon-comment.png';
    iconDm.className      = 'icon';
    iconDm.src            = 'images/icon-dm.png';
    likesNum.innerHTML    = `<span class="bold">${postit.likes} likes</span>`;
    txt.innerHTML         = `<span class="bold">${postit.username}</span> ${postit.comment}`;     
}
