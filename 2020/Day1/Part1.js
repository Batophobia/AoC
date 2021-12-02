function aoc1(){
  for (i in a){
  	for(j=i;++j<a.length;){
  		if(a[i]+a[j]==2020){
  			console.log(`${a[i]} * ${a[j]} = ${a[i]*a[j]}`)
  			return true;
  		}
  	}
  }
  return false;
}
