function aoc1(){
  for (i in a){
	  for(j=i;++j<a.length;){
		  for(k=j;++k<a.length;){
			  if(a[i]+a[j]+a[k]==2020){
				  console.log(`${a[i]} * ${a[j]} * ${a[k]} = ${a[i]*a[j]*a[k]}`)
  				return true;
	  		}
		  }
	  }
  }
  return false;
}
