#include <bits/stdc++.h>

using namespace std;

long long a=0, b=0, c=0;

long long typeOfTriangle(long long a, long long b, long long c){
	if((a+b>c) && (a+c>b) && (b+c>a)){
		if(a!=b && a!=c && b!=c){
			cout << "Tam giac thuong";
		}else{
			if(a==b || b==c || a==c){
				cout << "Tam giac can";
			}else{
				if(a==b && b==c){
					cout << "Tam giac deu";
				}
			}
		}	
	}else{
		cout << "Khong phai tam giac";
	}
}

int main(){
	cin >> a >> b >> c;
	typeOfTriangle(a,b,c);
	return 0;
}
