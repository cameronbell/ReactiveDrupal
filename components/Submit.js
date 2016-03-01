Components.Submit = React.createClass({
    getInitialState() {
        return {
            question: '',
            askedBy: ''
        };
    },
    render() {
        return <div className='row'>
            <div className='col-md-8'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Question</label>
                            <input 
                                className='form-control'
                                type='text'
                                value={this.state.question}
                                onChange={function(e) {
                                    this.setState({question: e.target.value});
                                }.bind(this)} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='form-group'>
                            <label>Asked By</label>
                            <input
                                className='form-control'
                                type='text'
                                value={this.state.askedBy}
                                onChange={function(e) {
                                    this.setState({askedBy: e.target.value});
                                }.bind(this)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-2'>
                <button 
                    className='btn btn-primary'
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