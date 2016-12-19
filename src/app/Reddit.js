import React, {Component} from 'react';
import{
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity
} from 'react-native';

export class Redit extends Component{
	constructor() {
		super();
		this.state = {
			post: []
		}
	}
	componentDidMount() {
		fetch('https://www.reddit.com/.json',{
			Accept: 'application/json'
		})
		.then(res => res.json())
		.then(data => 
			this.setState({posts: data.data.children})
			)};
	render() {
		return(
			<View>
				<Text>Reddit</Text>
				<View>
					{this.state.posts.map(post => (
						<Text>{post.data.author}</Text>
						))}
				</View>
			</View>
		)
	}
}
