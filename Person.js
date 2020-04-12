class Person {
	constructor(){

		getCount()
			var personCountref = database.ref('personCount');
			personCountref.on("value".function (data){
				personCount = data.val();
			})
		

		updateCount(count){
			database.ref('/').update({
				personCount : count
			})
		}
		update(name){
			var personIndex = "person" + personCount;
			database.ref(personIndex).set({
				name:name
			})
		}
	}
}