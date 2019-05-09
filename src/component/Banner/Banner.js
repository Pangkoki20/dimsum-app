import React from 'react'
import { UncontrolledCarousel } from 'reactstrap'
import './Banner.css'

const items = [
	{
		src: 'http://f.ptcdn.info/006/035/000/1441040062-22-o.jpg',
		altText: '',
		caption: '',
		header: ''
	},
	{
		src: 'https://img.wongnai.com/p/1968x0/2018/04/03/4afe13b527544c44bd677fc2c4f4a854.jpg',
		altText: '',
		caption: '',
		header: ''
	},
	{
		src: 'http://f.ptcdn.info/006/035/000/1441040119-26-o.jpg',
		altText: '',
		caption: '',
		header: ''
	}
]
export default class Banner extends React.Component {
	render() {
		return (
			<div className="ban-size">
				<UncontrolledCarousel items={items} className="" />
			</div>
		)
	}
	
}
