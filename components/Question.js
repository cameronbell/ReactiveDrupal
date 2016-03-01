Components.Question = React.createClass({
    render() {
        return <div className='row'>
            <p>{this.props.question.question}</p>
            <p>{'Asked By: ' + this.props.question.askedBy}</p>
        </div>;
    }
});