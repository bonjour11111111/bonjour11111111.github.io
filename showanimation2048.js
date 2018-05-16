function showNumberWithAnimation(i, j, randNumber) {

    var numberCell = $('#number-cell-' + i + '-' + j);
    numberCell.css("background-color", getNumberBackgroundColor(randNumber));
    numberCell.css("color", getNumberColor(randNumber));
    numberCell.text(randNumber);
    
    numberCell.animate({
        width : cellSidelength,
        height : cellSidelength,
        top : getPosTop(i, j),
        left : getPosLeft(i, j)
    }, 50);
}

function showMoveAnimation(fromx, fromy, tox, toy){
    
    var numberCell = $('#number-cell-'+fromx +'-'+fromy);
    numberCell.animate({top:getPosTop(tox,toy),
    left:getPosLeft(tox,toy)},200);
}

//将计算的分数显示在页面中
function updateScore(score){
	$('#score').text(score);
}