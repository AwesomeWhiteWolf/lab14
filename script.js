// $(".needed p:first").css('color', 'red');
// $(".needed p:not(:first)").css('background-color', 'silver');
// $("p:not(.needed p)").css('font-size', '20px');

// let paragraphs = $("p:not(.needed p)");  
// let count = paragraphs.length;  
// if (count > 0) {  
//     let centralIndex = Math.floor(count / 2);  
//     $(paragraphs[centralIndex]).css("font-style", "italic");  
// }


// // Функция для обработки нажатия на блок  
// function highlightBlocks(blockIndex, isFirstGroup) {  
//     const $smallBlocks = isFirstGroup ? $('.big-block').first().find('.small-block') : $('.big-block').last().find('.small-block');  
//     $smallBlocks.slice(0, blockIndex).css('background-color', 'lightblue');  
//     $smallBlocks.slice(blockIndex + 1).css('background-color', 'lightgreen');  
//     $smallBlocks.slice(0, $smallBlocks.length).css('border', 'none');  
//     $smallBlocks.eq(blockIndex).css('border', '5px solid red');  
//     $smallBlocks.eq(blockIndex).css('background-color', 'orange');  
// }  

// // Назначение обработчиков для каждого блока в первой группе  
// $('.big-block').first().find('.small-block').on('click', function() {  
//     const blockNumber = parseInt($(this).data('number'));  
//     highlightBlocks(blockNumber, true); // true для первой группы  
// });  

// // Назначение обработчиков для каждого блока во второй группе  
// $('.big-block').last().find('.small-block').on('click', function() {  
//     const blockNumber = parseInt($(this).data('number'));  
//     highlightBlocks(blockNumber, false); // false для второй группы  
// });  


// function darkenColor(rgb, factor) {  
//     const r = Math.max(0, Math.min(255, Math.floor(rgb.r * factor)));  
//     const g = Math.max(0, Math.min(255, Math.floor(rgb.g * factor)));  
//     const b = Math.max(0, Math.min(255, Math.floor(rgb.b * factor)));  
//     return `rgb(${r}, ${g}, ${b})`;  
// }  
// function getRgb(color) {  
//     const rgb = color.match(/\d+/g);  
//     return {  
//         r: parseInt(rgb[0], 10),  
//         g: parseInt(rgb[1], 10),  
//         b: parseInt(rgb[2], 10)  
//     };  
// }  

// function changeBackgroundColors($element) {  
//     const baseColor = getRgb($element.css('background-color'));  
//     let factor = 1;

//     $element.css('background-color', `rgb(${baseColor.r}, ${baseColor.g}, ${baseColor.b})`);  

//     $element.prevAll('.small-block').each(function(index) {  
//         factor -= 0.05;  
//         const newColor = darkenColor(baseColor, factor);  
//         $(this).css('background-color', newColor);  
//     });  

//     factor = 1; 
//     $element.nextAll('.small-block').each(function(index) {  
//         factor -= 0.05; 
//         const newColor = darkenColor(baseColor, factor);  
//         $(this).css('background-color', newColor);  
//     });  
// }  
// $('.small-block').on('click', function() {  
//     changeBackgroundColors($(this));  
// });  
