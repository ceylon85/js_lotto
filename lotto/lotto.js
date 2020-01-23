//1~45 숫자 생성, 0~44까지의 총 45개의 배열을 생성 후 그 안에 index+1로 숫자를 채움
var candidate = Array(45).fill().map(function (any, index) {
    return index + 1;
});

var shuffle = [];
//기준값이 계속 변경되니 for보다 while 사용
while (candidate.length > 0) {
    //splice: random 자리에서 한개씩 45개 배열이 다 사라질때까지 뽑는다.
    var actvalue = candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0];
    shuffle.push(actvalue);
};

var bonus_number = shuffle[shuffle.length - 1];
var win_number = shuffle.slice(0, 6);
//sort 내의 배열요소는 number, a와 b를 빼서 결과가 0보다 크면 순서를 바꾼다
//JavaScript Array.prototype.sort(), 내림차순을 하려면 b -a 
console.log('당첨숫자: ', win_number.sort(function (a, b) {
    return a - b;
}), ' 보너스: ', bonus_number);

var result = document.querySelector('#result_value');

function ball_colorPaint(number, result) {
    var ball = document.createElement('div');
    ball.textContent = number;
    ball.style.display = 'inline-block';
    ball.style.border = '1px solid black';
    ball.style.borderRadius = '100%';
    ball.style.width ='30px';
    ball.style.height = '30px';
    ball.style.textAlign = 'center';
    ball.style.marginRight = '20px';
    ball.style.fontSize = '20px';
    ball.style.fontWeight = '20px';
    ball.className = 'ball_id' + number;
    var ball_color;
    if (number <= 10) {
        ball_color = 'red';
    } else if (number <= 20) {
        ball_color = 'orange';
    } else if (number <= 30) {
        ball_color = 'yellow';
    } else if (number <= 40) {
        ball_color = 'blue';
    } else {
        ball_color = 'green';
    }
    ball.style.background = ball_color;
    result.appendChild(ball);
}

for (var i = 0; i < win_number.length; i++) {
    (function winTime(j) {
        setTimeout(function () {
            ball_colorPaint(win_number[j], result);
        }, (j + 1) * 1000);
    })(i);
}

setTimeout(function bonusTime() {
    var bonus_line = document.querySelector('.bonus');
    ball_colorPaint(bonus_number, bonus_line);
}, 7000);