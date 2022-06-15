import React from 'react';
import './index.css';

export const About = () => {
	return (
		<div className='about'>
			<h2 className='youtube-clone'>Youtube Clone Project</h2>
			<p className='text'>
				For this project we were tasked with creating a clone of the infamous
				website Youtube.com. Our clone site has the ability to search for videos
				using the youtube api.
			</p>
			<br></br>
			<h2>Meet Our Pursuit Fellows</h2>
			<h4>
				<img
					className='photo'
					src='https://avatars.githubusercontent.com/u/23618854?v=4'
					alt=''
				/>
				<br></br>
				<em>Edwin Codrington (Project Manager)</em>
			</h4>
			<p className='text'>
				Amateur Software Engineer, Professional Problem Solver Happiest when
				working with cars or computers.
			</p>
			<p className='text'>Please see the links below to connect with Edwin!</p>
			<a href='https://github.com/ecod24'>Github</a> &nbsp;
			<a href='https://www.linkedin.com/in/ecodrington24/'>Linkedin</a>
			<br></br>
			<h4>
				<img
					className='photo'
					src='https://avatars.githubusercontent.com/u/44096343?v=4'
					alt=''
				/>
				<br></br>
				<em>Pratima Roy</em>
			</h4>
			<p className='text'>
				A Software Engineer with a background in Computer Engineering
				Technology. I have interned at NASA 2x and I also went viral for being
				me during the NASA internship!
			</p>
			<p className='text'>Please see the links to connect with Pratima!</p>
			<a href='https://github.com/PratimaRoy'>Github</a> &nbsp;
			<a href='https://www.linkedin.com/in/pratimaroy/'>Linkedin</a>
			<br></br>
			<h4>
				<img
					className='photo'
					src="https://avatars.githubusercontent.com/u/96316119?v=4'"
					alt=''
				/>
				<br></br>
				<em>Taryne Leach Gonzalez</em>
			</h4>
			<p className='text'>
				Brooklyn native and an aspiring Full Stack Web Developer. Enrolling in
				Pursuit was my first experience with tech and coding. My favorite
				hobbies are collecting candles and perfumes! Connect with me and I can
				give you some reccomendations!
			</p>
			<p className='text'>Please see the links below to connect with Taryne!</p>
			<a href='https://github.com/TaryneLeach'>Github</a> &nbsp;
			<a href='https://www.linkedin.com/in/taryne-leachgonzalez/'>Linkedin</a>
		</div>
	);
};

export default About;
