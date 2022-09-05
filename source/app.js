const displaying = document.querySelector('#feeding');

const getAllData = async () => {
	try {
		const response = await fetch('http://localhost:5000/results');
		const data = await response.json();

		data.forEach((element) => {
			const title =
				`<div><h3>` +
				element.title +
				`</h3><a href='${element.url}'>` +
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
