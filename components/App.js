Components.App = React.createClass({
    getInitialState() {
        return {
            questions: [],
        };
    },
    render() {
        return <div>
            <Components.Submit 
                askQuestion={function(question) {
                    this.setState({questions: this.state.questions.concat(question)});
                }.bind(this)}/>
            <div className='box questions-box'>
                {
                    this.state.questions.map(function(question) {
                        return <Components.Question question={question} />;
                    })
                }
            </div>
        </div>;
    }
});