import { Http, Headers } from '@angular/http';

export class AppConst {
	public static serverPath ="https://bookbackend.herokuapp.com";
	//public static serverPath ="http://localhost:9090";

	public static xAuthToken = "xAuthToken";
	public static createHeaderToken(){
	  	let tokenHeader = new Headers({
	  		'Content-Type' : 'application/json',
	  		'x-auth-token' : localStorage.getItem("xAuthToken")
	  	});
	  	return tokenHeader;
  	}
}