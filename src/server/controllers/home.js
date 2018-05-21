export default function (request, response) {
	const data = {title: 'title'};
	response.render('home', {data})
}
