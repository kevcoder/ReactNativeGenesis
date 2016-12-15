import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native';

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
		this.setState({todos, newTodo: ''})
	}
	render() {
		return(
			<View style={styles.container}>
				<TextInput 
					value={this.state.newTodo}
					onChangeText={this.handleChange.bind(this)}
					style={styles.input}/>

				<TouchableOpacity 
					style={styles.button} onPress={this.handlePress.bind(this)}>
					<Text>create</Text>
				</TouchableOpacity>
				<View>
					{this.state.todos.map((todo, i) => (
						<Text key={i}>{todo}</Text>
						))}
				</View>
			</View>
		)
	}
}
const styles = StyleSheet.create({
	container : {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D4BEE9'
	},
	button: {
		backgroundColor: 'pink',
		marginTop: 15
		
	},
	input: {
		height: 44,
		backgroundColor: '#F6EBE4',
		marginRight: 3,
		marginLeft: 3,
		borderRadius: 7
	}
})
