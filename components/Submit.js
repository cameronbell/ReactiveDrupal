Components.Submit = React.createClass({
    getInitialState() {
        return {
            question: '',
            askedBy: ''
        };
    },
    render() {
        return <div className='submit-box'>
            <div className='box'>
                <div>
                    <label>Question:</label>
                    <input 
                        type='text'
                        value={this.state.question}
                        onChange={function(e) {
                            this.setState({question: e.target.value});
                        }.bind(this)} />
                </div>
                <div>
                    <label>Asked By:</label>
                    <input
                        type='text'
                        value={this.state.askedBy}
                        onChange={function(e) {
                            this.setState({askedBy: e.target.value});
                        }.bind(this)} />
                </div>
                <button 
                    onClick={function() {
                        this.props.askQuestion({
                            question: this.state.question,
                            askedBy: this.state.askedBy
                        });

                        this.setState({question: '', askedBy: ''});
                    }.bind(this)}>
                    Ask
                </button>
            </div>
        </div>;
    }
});