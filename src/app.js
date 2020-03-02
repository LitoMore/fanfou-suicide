import React from 'react';
import queryString from 'query-string';
import async from 'async';
import {ff, consumerKey} from './ff';
import 'nes.css/css/nes.css';
import './app.css';

const fullList = [];
let errorPages: [];

class App extends React.Component {
	state = {
		loged: false,
		user: null,
		fetchDone: false,
		currentPage: 0
		// PrevStatusCount: 0,
		// statusCount: 0
	}

	async componentDidMount() {
		const {location} = window;
		if (location && location.search) {
			this.setState({loged: true});
			const parsed = queryString.parse(location.search);
			const {oauth_token: oauthToken} = parsed;
			const oauthTokenSecret = localStorage.getItem('suicideRequestTokenSecret');
			if (oauthTokenSecret) {
				const res = await ff.getAccessToken({oauthToken, oauthTokenSecret});
				localStorage.setItem('suicideConsumerKey', consumerKey);
				localStorage.setItem('suicideOauthToken', res.oauthToken);
				localStorage.setItem('suicideOauthTokenSecret', res.oauthTokenSecret);
				localStorage.removeItem('requestTokenSecret');
				window.location.replace(window.location.origin + window.location.pathname);
			}
		} else {
			const suicdieConsumerKey = localStorage.getItem('suicideConsumerKey');
			const oauthToken = localStorage.getItem('suicideOauthToken');
			const oauthTokenSecret = localStorage.getItem('suicideOauthTokenSecret');

			if (oauthToken && oauthTokenSecret && consumerKey === suicdieConsumerKey) {
				this.setState({loged: true});
				ff.oauthToken = oauthToken;
				ff.oauthTokenSecret = oauthTokenSecret;
				const user = await ff.get('/users/show');
				this.setState({user});
			}
		}
	}

	goAuth = async () => {
		const res = await ff.getRequestToken();
		localStorage.setItem('suicideRequestTokenSecret', res.oauthTokenSecret);
		window.location.replace(`https://fanfou.com/oauth/authorize?oauth_token=${res.oauthToken}&oauth_callback=${window.location.href}`);
	}

	getErrorPages = () => {
		return errorPages;
	}

	fetchHome = () => {
		const {user, fetchDone} = this.state;
		if (fetchDone) {
			return;
		}

		const {statuses_count: statusesCount} = user;
		const pageCount = Math.ceil(statusesCount / 60);
		const pages = Array.from({length: pageCount}, (v, i) => i + 1);

		async.eachLimit(pages, 6, (page, cb) => {
			ff.get('/statuses/home_timeline', {page, count: 60, mode: 'lite'})
				.then(list => {
					// Const prevCount = fullList.length;
					list.forEach(status => {
						fullList.push(status);
					});
					errorPages = this.getErrorPages().filter(p => p !== page);
					this.setState(state => ({
						currentPage: state.currentPage + 1
						// PrevStatusCount: prevCount,
						// statusCount: fullList.length
					}), cb);
				})
				.catch(error => {
					console.error(`Page ${page} errored`, error);
					errorPages.push(page);
					cb();
				});
		}, error => {
			if (error) {
				console.error(error);
			}

			this.setState({fetchDone: this.getErrorPages().length === 0}, () => {
				this.fetchHome();
			});
		});
	}

	render() {
		const {user, loged} = this.state;

		return (
			<div>
				<div className="nes-container with-title is-centered is-dark" style={{width: '90vw', maxWidth: 800, margin: '40px auto 20px auto'}}>
					<p className="title" style={{fontSize: 24, margin: '-3rem auto 1rem'}}>自杀</p>

					{user ? (
						<>
							<p>
								你好，<img className="nes-avatar is-small" alt="avatar" src={user.profile_image_url} style={{imageRendering: 'pixelated'}}/> {user.name}。
							</p>

							<p>你总计有 {user.statuses_count} 条消息。</p>

							<p>
								<button
									type="button"
									className="nes-btn is-error"
									onClick={() => {
										document.querySelector('#dialog-dark').showModal();
									}}
								>
									删除所有
								</button>

							</p>

							<button
								type="button"
								className="nes-btn is-success"
								style={{
									position: 'absolute',
									right: 0,
									bottom: 4
								}}
								onClick={() => {
									localStorage.removeItem('suicideConsumerKey');
									localStorage.removeItem('suicideOauthToken');
									localStorage.removeItem('suicideOauthTokenSecret');
									window.location.reload();
								}}
							>
								算了
							</button>
						</>
					) : (
						loged ? (
							<p>
								正在登录..
							</p>
						) : (
							<p>
								<button type="button" className="nes-btn is-primary" onClick={this.goAuth}>登录</button>
							</p>
						)
					)}
				</div>

				<p style={{textAlign: 'center', color: 'white'}}>
					<span style={{fontWeight: 700}}>{'<'}</span>
					<span style={{fontWeight: 700, marginLeft: 2}}>{'>'}</span>
					{' without '}
					<a href="https://fanfou.com/lito" target="_blank" rel="noopener noreferrer">
						<i className="nes-icon is-small heart nes-pointer is-empty" style={{marginTop: -4, marginBottom: -4}}/>
					</a>
					{' on '}
					<a href="https://github.com/LitoMore/fanfou-export" target="_blank" rel="noopener noreferrer">
						<i className="nes-icon github is-small" style={{marginTop: -4, marginBottom: -4}}/>
					</a>
				</p>

				<dialog className="nes-dialog is-dark" id="dialog-dark">
					<form method="dialog">
						<p className="title">确认删除你所有的消息吗？</p>
						<p>一旦选择删除，是不可恢复的!</p>
						<menu className="dialog-menu" style={{padding: 0, textAlign: 'center', margin: 0}}>
							<button type="button" className="nes-btn is-success" style={{margin: '0 10px'}}>我后悔了</button>
							<button type="submit" className="nes-btn is-error" style={{margin: '0 10px'}}>决心自杀</button>
						</menu>
					</form>
				</dialog>
			</div>
		);
	}
}

export default App;
