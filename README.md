# HTML
<!DOCTYPE html>
<html>
<head>
	<title>Piano</title>

	<link rel="stylesheet" type="text/css" href="style.css">

</head>
<body>

<div id="container">
	<div class="grid-container">
		<div id = "cNote" class="grid-item" onclick="cButton()"><h1>C</h1></div>
		<div id = "dNote" class="grid-item" onclick="dButton()"><h1>D</h1></div>
		<div id = "eNote" class="grid-item" onclick="eButton()"><h1>E</h1></div>
		<div id = "fNote" class="grid-item" onclick="fButton()"><h1>F</h1></div>
		<div id = "gNote" class="grid-item" onclick="gButton()"><h1>G</h1></div>
		<div id = "aNote" class="grid-item" onclick="aButton()"><h1>A</h1></div>
		<div id = "bNote" class="grid-item" onclick="bButton()"><h1>B</h1></div>
	</div>
</div>

	<audio>
		<source src="sound/note1_c.wav">
	</audio>
	<audio>
		<source src="sound/note2_d.wav">
	</audio>
	<audio>
		<source src="sound/note3_e.wav">
	</audio>
	<audio>
		<source src="sound/note4_f.wav">
	</audio>
	<audio>
		<source src="sound/note5_g.wav">
	</audio>
	<audio>
		<source src="sound/note6_a.wav">
	</audio>
	<audio>		
	<source src="sound/note7_b.wav">
	</audio>
	

	<script type="text/javascript" src="actions.js">
		
	</script>


</body>
</html>
