// var GroceryListItem = (props) => {
// 	var onListItemClick = (event) => {
// 		console.log('first item clicked');
// 	};
// 	return (
// 		<ul>
// 			<li onClick={onListItemClick}>{props.groceryItems[0]}</li>
// 			<li>{props.groceryItems[1]}</li>
// 		</ul>
// 	);
// };

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hovered: false
		};
	}
	onListItemEnter() {
		this.setState({
			hovered: true
		});
	}
	onListItemLeave() {
		this.setState({
			hovered: false
		});
	}
	render() {
		var style = {
			fontWeight: this.state.hovered ? 'bold' : 'normal'
		};
		return (
			<li style={style} onMouseEnter={this.onListItemEnter.bind(this)} onMouseLeave={this.onListItemLeave.bind(this)}>{this.props.item}</li>
		);
	}
};

// var GroceryList = () => (
// 	<div>
// 		<h2>My Grocery List</h2>
// 		<GroceryListItem groceryItems={['chicken', 'bananas']} />
// 	</div>	
// );

var GroceryList = (props) => (
	<div>
		<h2>My Grocery List</h2>
		<ul>
			{props.groceryItems.map(item =>
				<GroceryListItem item={item} />
			)}
		</ul>
	</div>
);



ReactDOM.render(
	<GroceryList groceryItems={['chicken', 'bananas']}/>,
	document.getElementById('app')
);