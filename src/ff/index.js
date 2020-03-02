import Fanfou from 'fanfou-sdk-browser';

export const consumerKey = '3cc32ea427205774597c191a10d46b38';
export const consumerSecret = '7b2cdcd2c8d21e035740f4cb182ecd4c';

export const ff = new Fanfou({
	consumerKey,
	consumerSecret,
	apiDomain: 'cors.fanfou.pro',
	oauthDomain: 'cors.fanfou.pro',
	hooks: {
		baseString: str => str
			.replace('%2F%2Fcors.fanfou.pro%2Foauth', 'http%3A%2F%2Ffanfou.com%2Foauth')
			.replace('%2F%2Fcors.fanfou.pro', 'http%3A%2F%2Fapi.fanfou.com')
	}
});
