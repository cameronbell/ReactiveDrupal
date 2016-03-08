Components.Question = React.createClass({
    render() {
        return <div className='box'>
            <p>{this.props.question.question}</p>
            <label>Asked By:</label>
            <span>{this.props.question.askedBy}</span>
        </div>;
    }
});