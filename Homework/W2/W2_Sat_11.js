// :Su dung ham random() chon ra 2n so thuc ngau nhien trong khoang [0,1] de tinh so PI
// 1. Dien tich hinh tron: S1 = PIr^2. 
// Goi cac diem trong hinh tron la yellow. Dien tich hinh tron = tap hop cac cham yellow.
// 2. Dien tich hinh vuong: S2 = 4r^2. 
// Goi cac diem trong hinh vuong la black. Dien tich hinh vuong = tap hop cac cham black.
// 3. => PI = 4S1/S2. Co nghia la PI duoc tinh bang tap hop cac cham yellow chia cho tap hop cac cham black.
// 4. Random 2n nums in [0.0; 1.0]. Call each pair of number generated from the random func by x, y (are coordinates of a point)
// 5. Determine if this point is in a circle.
// 6. => PI 4*(Tap hop cac cham trong hinh tron)/(Tap hop cac so se random)

function calculatePi(num){
    let inCircle = 0;
    for ( let i = 0; i < num; i++){
        let x = Math.random();
        let y = Math.random();

        if (x*x + y*y <= 1){
            inCircle++;
        }
    }
    return 4*inCircle/num;
}

console.log(calculatePi(10000000));