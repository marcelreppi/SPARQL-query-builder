import React from 'react'

import '../css/Suggestion.css'

class Suggestion extends React.Component {
    render() {
        return(
            <div className="suggestion-box">
            {this.props.suggestionList.map( (res,idx) => {
                const url = res.split('/')
                const word = url[url.length - 1]
                return <div className="suggestion-item" key={idx} title={res} onClick={() => this.props.onItemSelect(res)} >{word}</div>
                })
            }
            </div>
        )
    }
}

export default Suggestion