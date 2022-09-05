const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const cors = require('cors');
const colors = require('colors');

require('dotenv').config();
const app = express();

app.use(cors());

const PORT = process.env.PORT;
const URL = process.env.URL;

app.get('/', (req, res, next) => {
	res.json('this my web Scraper');
});

app.get('/results', (req, res, next) => {
	const fetch = async () => {
		try {
			const response = await axios(URL);
			const data = await response.data;
			const $ = cheerio.load(data);
			const articules = [];
			$('.fc-sublink__title', data).each(function () {
				const title = $(this).text();
				const url = $(this).find('a').attr('href');
				articules.push({
					title,
					url,
				});
			});
			res.json(articules);
		} catch (error) {
			console.log(error);
		}
	};
	fetch();
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`.yellow));
