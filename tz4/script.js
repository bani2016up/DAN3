
const var1Node = $('.j-var1');
const var2Node = $('.j-var2');
const var3Node = $('.j-var3');
const var4Node = $('.j-var4');
const var5Node = $('.j-var5');
const var6Node = $('.j-var6');
const speachNode = $('.j-var1');



   const binCreate = $('.one');
   const textNode = $('.text');
   const binrepleace = $('.two');

    
    
    const starObj = {
"text":["Жили-были {var1} да {var2}",
"Была у них {var3}",
"Снесла {var3} {var4}, не простое - золотое",
"- {var1} бил, бил - не разбил",
"- {var2} била, била - не разбила",
"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
"{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"
    ]
};
binCreate.click(function() {
textNode.html(startOJ.text);


})

binrepleace.click(function() {
    const var1Node = $('.j-var1');
    const var2Node = $('.j-var2');
    const var3Node = $('.j-var3');
    const var4Node = $('.j-var4');
    const var5Node = $('.j-var5');
    const var6Node = $('.j-var6');
    const speachNode = $('.j-var1');
 const neObj = {
    "text":[
        `Жили-были  ${var1} да  ${var2}`,
        `Была у них ${var3}`,
        `Снесла {var3} {var4}, не простое - золотое`,
        `- ${var1} бил, бил - не разбил`,
        `- {var2} била, била - не разбила`,
        `${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
        `${var1} плачет, ${var2} плачет, а ${var3} кудахчет:","${speach}`}
 }

);
