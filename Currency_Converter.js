
var x;
var y;
var amount;
var convertion;
var unit;

fetch('https://homel.vsb.cz/~mor03/TAMZ/cnb_json.php')
  .then(response => {
    return response.json()
  })
  .then(data => {
  for (var i=0; i<data.data.length; i++) {
  localStorage.setItem(data.data[i].code, JSON.stringify(data.data[i].rate));
  localStorage.setItem(data.data[i].code+"_unit", JSON.stringify(data.data[i].unit));
}
  })
  .catch(err => {
   console.log(err);
  })

  function calculate(value){
		x = 'EUR'; // From EUR
		y = 'CZK'; // To CZK
		amount = 1; // Quantity
		var rate = JSON.parse(localStorage[x]);
		unit = JSON.parse(localStorage[x+"_unit"]);
		
		if(y == 'CZK'){
			var res = amount*unit + " " + x + " Equals to " + ((amount)*(parseFloat(rate))).toFixed(2) + " CZK"
			console.log(res);
		}
		else {
			var rate2 = JSON.parse(localStorage[y]);
			var res = amount*unit + " " + x + " Equals to " + ((amount)*(parseFloat(rate))/(parseFloat(rate2))).toFixed(2) + " " + y
			console.log(res);
		}
		
  }


