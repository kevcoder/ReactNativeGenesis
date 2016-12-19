import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity, 
	Dimensions
} from 'react-native';


const {width, height} = Dimensions.get('window');
export class Todo extends Component{
	constructor() {
		super();
		this.state = {
			todos: [],
			newTodo: ''
		}
	}
	handleChange(text){
		this.setState({newTodo: text});
	}

	handlePress(){
		const todos = [...this.state.todos, this.state.newTodo];
		this.setState({todos, newTodo: ''});
	}
	render() {
		return(
			<View style={styles.container}>
				<TextInput 
					value={this.state.newTodo}
					onChangeText={this.handleChange.bind(this)}
					style={styles.input}/>

				<TouchableOpacity 
					style={styles.button} 
					onPress={this.handlePress.bind(this)}>
					<Text style={styles.buttonText}>create task</Text>
				</TouchableOpacity>
				<View style={styles.todos}>
					{this.state.todos.map((todo, i) => (
						<Text key={i} style={styles.todo}>{todo}</Text>
						))}
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container : {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#2F608E',
		padding: 7,
	},
	button: {
		borderWidth: 1,
		borderColor: 'black',
		borderRadius: 3,
		backgroundColor: '#030807',
		justifyContent: 'center',
		marginTop: 15
		},
		
	input: {
		height: 44,
		backgroundColor: '#F6EBE4',
		marginRight: 3,
		marginLeft: 3,
		marginTop: 35,
		borderRadius: 7,
		fontSize: 25
	},
	buttonText:{
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
		padding: 5
	},
	todos: {
		marginTop: 35,
	},
	todo: {
		color: 'white',
		fontSize: 20,
		paddingRight: 200
	}
})

