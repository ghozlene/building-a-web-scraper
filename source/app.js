const displaying = document.querySelector('#feeding');

const getAllData = async () => {
	try {
		const response = await fetch('http://localhost:5000/results');
		const data = await response.json();

		data.forEach((element) => {
			const title =
				`<div class="subtitle"><h3>` +
				element.title +
				`</h3></div><div class="options"><a href='${element.url}'>` +
				element.url +
				`</a></div>`;

			displaying.insertAdjacentHTML('beforeend', title);
		});
		{
		}
	} catch (error) {
		console.log(error);
	}
};
getAllData();
