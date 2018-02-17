class Card extends React.Component {
    render() {
        return <div className={'card ' + this.props.additional_class}>
            <div className="card-header" data-background-color={this.props.background_color}>
                {this.props.header_content}
            </div>
            <div className="card-content">
                <p className="category">{this.props.category}</p>
                <h3 className="title">{this.props.title}</h3>
            </div>
            <div className="card-footer">
                <div className="stats">
                    <i className={this.props.footer_icon}>local_offer</i> {this.props.footer_text}
                </div>
            </div>
        </div>
    }
}

ReactDOM.render(
    <Card category="Test" title={72} footer_icon={'material-icons'} additional_class={'card-stats'} background_color={"red"}/>,
    document.getElementById('card')
);