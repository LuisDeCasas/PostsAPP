
const initState = {
    posts: [{
        name: "Luis",
        id: 1,
        subject: "New App",
        content: "I like this app",
        likes: 10,
        dislikes: 0
    }]
}

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case "ADD_POST":
            let maxID = 0
            state.posts.map(post => {
                maxID = post.id > maxID ? post.id : maxID
                return post
            })
            return {
                posts: [...state.posts,
                {
                    name: action.name,
                    id: maxID + 1,
                    subject: action.subject,
                    content: action.content,
                    likes: 0,
                    dislikes: 0
                }]
            }

        case "EDIT_POST":
            return {
                posts: state.posts.map(post => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            name: action.name,
                            subject: action.subject,
                            content: action.content

                        }

                    }
                    return post
                })
            }


        case "DELETE_POST":
            return {
                posts: state.posts.filter(post => action.id !== post.id)
            }

        case "LIKE_POST":
            return {
                posts: state.posts.map(post => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            likes: post.likes + 1
                        }

                    }
                    return post
                })
            }


        case "DISLIKE_POST":
            return {
                posts: state.posts.map((post) => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            dislikes: post.dislikes + 1
                        }

                    }
                    return post
                })
            }
        default:
            return state;

    }

}

export default rootReducer;