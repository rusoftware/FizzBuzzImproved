var controlar = function(val){
		
	if ((val % 2 === 0) && (val % 9 === 0)) {
		return 'foobar';
	}
	else if(val % 2 === 0) {
		return 'foo';
	}
	else if(val % 9 === 0) {
		return 'bar';
	}
	else{
		return val;
	}
}