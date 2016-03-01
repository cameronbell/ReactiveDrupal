Components.App = React.createClass({
    getInitialState() {
        return {
            questions: [],
        };
    },
    render() {
        return <div className='container'>
            <Components.Submit 
                askQuestion={function(question) {
                    this.setState({questions: this.state.questions.concat(question)});
                }.bind(this)}/>
            {
                this.state.questions.map(function(question) {
                    return <Components.Question question={question} />;
                })
            }
        </div>;
    }
});