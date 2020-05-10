// choose text
	function myFunction() {
		const x = document.getElementById("myText").value;
		document.getElementById("text").innerHTML = x;
	}

//na kuy, taza kod charenq
		
	const convertTo = {
		pascal: text => text.split(" ").map(
		    word => word.charAt(0).toUpperCase() + word.slice(1)
		    ).join(" "),
		};

		const MyClick = () => {
		    const input = document.querySelector('input').value; 

		     document.querySelector('#PascalText').innerHTML = convertTo.pascal(input);
		}; 

		const setInput = input => {
		    document.querySelector('input').value = input;
		    };
		setInput('');
    