import React from 'react'
// import fetch from 'isomorphic-fetch'

export const DataLoadComponent = (IncomingComponent, url) =>
    class DataLoadComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                data: [],
                loading: false,
                loaded: false
            }
        }

        componentWillMount() {
            this.setState({ loading: true })
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({loaded: true, loading: false, data}, () => console.log("RESPONSE=======>" + this.state)))
                .catch(err => console.log(err));
        }


        render() {
            // console.log`DID: state= ${this.state}`
            return (
                <div>
                    {this.state.loading
                        ? <p>Loading....</p>
                        : <IncomingComponent {...this.state} />
                    }
                </div>
            )
        }
    }

export default DataLoadComponent