import React, { Component } from 'react';
import { Container } from 'reactstrap'
import { connect } from 'react-redux'
import Post from './Post';



class Feed extends Component {
    state = {
    }

    handleOnClick = (e, id) => {
        const action = e.target.name
        switch (action) {
            case 'like':
                this.props.likePost(id)
                break
            case 'dislike':
                this.props.dislikePost(id)
                break
            case 'delete':
                this.props.deletePost(id)
                break
            case 'edit':
                console.log("edit")
                break
            default:
        }
    }

    render() {
        console.log(this.props.posts)
        console.log(this.state)
        const postsUI = this.props.posts.map(post => <Post
            message={post.content}
            dislikes={post.dislikes}
            handleOnClick={this.handleOnClick}
            id={post.id}
            key={post.id}
            likes={post.likes}
            name={post.name}
            title={post.subject}
        />
        )
        return (
            <Container>
                {postsUI}
            </Container>

        )

    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({
                type: 'DELETE_POST',
                id: id
            })
        },
        likePost: (id) => {
            dispatch({
                type: 'LIKE_POST',
                id: id
            })
        },
        dislikePost: (id) => {
            dispatch({
                type: 'DISLIKE_POST',
                id
            })
        }

    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Feed);