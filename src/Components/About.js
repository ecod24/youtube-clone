import React from 'react';

export const About = () => {
	return (
		<div>
			<h2>
				Youtube Clone Project
				<p>
					For this project we were tasked with creating a clone of the infamous
					website Youtube.com
				</p>
			</h2>
			<br></br>
			<h2 className='fellows'>Meet Our Fellows</h2>

			<h4>
				<img
					src='https://avatars.githubusercontent.com/u/23618854?v=4'
					alt=''
				/>
				<em>Edwin Codrington (Project Manager)</em>
				<p>
					Amateur Software Engineer, Professional Problem Solver Happiest when
					working with cars or computers.
				</p>

				<p>Please see the link below for Edwin's github!</p>
				<a href='https://github.com/ecod24'>Ecod24</a>
				<br></br>
			</h4>
			<h4>
				<img
					src='https://avatars.githubusercontent.com/u/44096343?v=4'
					alt=''
				/>
				<em>Pratima Roy</em>
				<p>
					A Software Engineer with a background in Computer Engineering
					Technology. I have interned at NASA 2x and I also got viral for being
					me during the NASA internship!
				</p>
				<p>Please see the link below for Pratima's github!</p>
				<a href='https://github.com/PratimaRoy'>PratimaRoy</a>
			</h4>
			<br></br>
			<h4>
				<img
					src="https://avatars.githubusercontent.com/u/96316119?v=4'"
					alt=''
				/>
				<em>Taryne Leach Gonzalez</em>
				<p>
					I am an aspiring Full Stack Web Developer. Enrolling in Pursuit was my
					first experience with coding. My favorite hobbies are collecting
					candles and perfumes! Connect with me and I can give you some
					reccomendations!
				</p>
				<p>Please see the link below for Taryne's github!</p>
				<a href='https://github.com/TaryneLeach'>TaryneLeach</a>
			</h4>
		</div>
	);
};

export default About;
