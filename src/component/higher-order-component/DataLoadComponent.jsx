import React from 'react'

export const DataLoadComponent = (IncomingComponent, url) =>
    class DataLoadComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {loading: false, loaded: false, data: []}
        }

        componentWillMount() {
            this.setState({ loading: true })
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({ loaded: true, loading: false, data }))
                .catch(err => console.log(err));
        }

        render() {
            return (
                <div>
                    {this.state.loading
                        ? <p>Loading....</p>
                        : <IncomingComponent {...this.state} {...this.props} />
                    }
                </div>
            )
        }
    }

export default DataLoadComponent