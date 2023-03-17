import { color } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
	return (
		<div className="container-fluid nav_bg">
			<div className="row">
				<div className="col-12 mx-auto">

							<footer className="footer">
								<div class="footer-content">
									<h3 style={{color: '#000'}}>Welcome to Docker Application</h3>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error blanditiis amet culpa nihil dolorum numquam, enim dolorem tenetur impedit minus et, ex nobis eius consequuntur soluta provident accusantium. Officia, facere! Laboriosam quod quisquam saepe repellat autem expedita eius praesentium ducimus nam quos odio, explicabo neque! Atque culpa ex maiores natus fuga id ad expedita commodi!</p>
									<ul class="socials">
										<li><NavLink to="/home"><i class="fa fa-facebook"></i></NavLink></li>
										<li><NavLink to="/home"><i class="fa fa-twitter"></i></NavLink></li>
										<li><NavLink to="/home"><i class="fa fa-google-plus"></i></NavLink></li>
										<li><NavLink to="/home"><i class="fa fa-youtube"></i></NavLink></li>
										<li><NavLink to="/home"><i class="fa fa-linkedin-square"></i></NavLink></li>
									</ul>
								</div>
							</footer>
					
				</div>
			</div>
		</div>
	)
}

export default Footer
