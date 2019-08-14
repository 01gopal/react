import React, { Component } from 'react';

class LikeDislike extends Component {
    constructor(props) {
        super(props)
        this.state = {
            like: {
                count: 100,
                active: false
            },
            dislike: {
                count: 25,
                active: false
            }
        }
        this.handleLike = this.handleLike.bind(this)
        this.handleDislike = this.handleDislike.bind(this)
    }

    handleLike() {
        const {like, dislike} = this.state
        this.setState({
            ...this.state,
            like: {
                count: like.active ? like.count - 1 : like.count + 1,
                active: !like.active
            },
            dislike: {
                count: dislike.active ? dislike.count - 1 : dislike.count,
                active: false
            }
        })
    }

    handleDislike() {
        const {like, dislike} = this.state
        this.setState({
            ...this.state,
            like: {
                count: like.active ? like.count - 1 : like.count,
                active: false
            },
            dislike: {
                count: dislike.active ? dislike.count - 1 : dislike.count + 1,
                active: !dislike.active
            }
        })
    }



    render() {
        const {like, dislike} = this.state

        return (
            <>
                <div>
                    <h2>Like/Dislike</h2>Î
                    <button className={like.active ? "like-button liked" : "like-button"}  onClick={this.handleLike}>Like | {like.count} </button>
                    <button className={dislike.active ? "dislike-button disliked" : "dislike-button"} onClick={this.handleDislike}>Dislike | {dislike.count} </button>
                </div>
                <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
            </>
        );
    }
}

export default LikeDislike