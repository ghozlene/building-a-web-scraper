const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const cors = require('cors');
const colors = require('colors');

require('dotenv').config();
const app = express();

app.use(cors());

PORT = process.env.PORT;
const fetch = async () => {
	try {
		const response = await axios(process.env.URL);
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
		console.log(articules);
	} catch (error) {
		console.log(error);
	}
};
fetch();
app.listen(PORT, () => console.log(`Listening on ${PORT}`.yellow));
