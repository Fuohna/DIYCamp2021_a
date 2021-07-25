#include <bits/stdc++.h>
using namespace std;

int countDigits(long long num){
	int nCnt=0;
	while (num != 0){
		num/=10;
		nCnt++;
	}	
	return nCnt;
}

int main(){
	long long num;
	cin >> num;
	cout << countDigits(num) << endl;
	return 0;
}
