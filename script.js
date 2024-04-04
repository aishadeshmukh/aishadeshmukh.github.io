document.addEventListener("DOMContentLoaded", function () {
	const portfolioItems = [
		{
			record: "Fastest stumping in T20 cricket",
			year: 2009,
			image: "images/stumping.jpg",
		},
		{
			record: "Most international matches as captain",
			year: 2014,
			image: "images/captain.jpg",
		},
		{
			record: "Most not outs in ODIs",
			year: 2016,
			image: "images/not_outs.jpg",
		},
		{
			record: "Most dismissals in T20 internationals",
			year: 2020,
			image: "images/dismissals.jpg",
		},
	];

	const portfolioContainer = document.getElementById("portfolio-items");

	// Populate portfolio items
	portfolioItems.forEach((item) => {
		const portfolioItem = document.createElement("div");
		portfolioItem.classList.add("portfolio-item");
		portfolioItem.innerHTML = `
      <img src="${item.image}" alt="${item.record}">
      <h3>${item.record}</h3>
      <p>Year: ${item.year}</p>
    `;
		portfolioContainer.appendChild(portfolioItem);
	});

	// Form submission
	document.getElementById("submit-btn").addEventListener("click", function () {
		alert('Form is submitted')
	});

	
});

