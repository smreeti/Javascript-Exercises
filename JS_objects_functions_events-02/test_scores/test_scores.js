var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	//move cursor to the name field when application starts
	$("name").focus();
};

const addScore = () => {
	const name = $("name").value.trim();
	const score = $("score").value.trim();

	//prevent adding empty values and score must be between 0 and 100
	if (!name || !score || score < 0 || score > 100) {
		alert("You must enter a name and a valid score");
	} else {
		names.push(name);
		scores.push(parseFloat(score));
	}

	//move cursor to the name field after adding new name and score
	$("name").focus();
}

const displayResults = () => {
	let sum = 0;
	scores.forEach(score => {
		sum += score;
	});
	const averageScore = (sum / names.length).toFixed(2);
	const highScore = Math.max(...scores);

	$("results").innerHTML =
		`<br> <h2> Results </h2>
		 <p>Average score is ${averageScore}</p>
		 <p>High Score is ${highScore} </p>`;
}

const displayScores = () => {
	$("scores_table").innerHTML =
		`<br> <h2> Scores </h2>
		<tr> 
			<td> <b> Name </b> </td> 
			<td> <b> Score </b> </td>
	 	</tr>`;

	names.forEach((name, index) => {
		const row =
			`<tr> 
				<td>${name}</td>
				<td>${scores[index]}</td>
			</tr>`;
		$("scores_table").innerHTML += `${row}`;
	});
}