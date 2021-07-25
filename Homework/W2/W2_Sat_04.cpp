#include <bits/stdc++.h>
using namespace std;
int divisibility(long long a, long long b){
	for(int i=0; i<b; i++){
		if((a+i)%b==0){
			return i;
		}
	}
}

int main(){
	long long a,b;
	cin >> a >> b;
	cout << divisibility(a,b) << endl;
	return 0;
}
