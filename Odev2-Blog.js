const posts = [
    { name: "Post 1", Text: "Test 1" },
    { name: "Post 2", Text: "Test 2" },
    { name: "Post 3", Text: "Test 3" },
];

const listPosts = () => {
    posts.map((post) => {
        console.log(post.name);
    });
};

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        //reject('BIR HATA OLUSTU');
    });
};

async function showPosts() {
    try {
        await addPost({ name: "Post 4", author: "Test 4" });
        listPosts();
    } catch (error) {
        console.log(error);
    }
}

showPosts();