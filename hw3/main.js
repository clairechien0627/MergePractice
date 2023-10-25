let myGraph3 = document.getElementById("myGraph3");

let trace1 = {};
trace1.type = "pie";
trace1.title = "全國BMI";
trace1.labels = [];
trace1.values = [];
trace1.domain = {
    row:0,
    column:0
};
trace1.hole = 0.5;

for(let i=0;i<men_women_BMI.length;i++){
    trace1.labels[i] = men_women_BMI[i]["name"];
    trace1.values[i] = men_women_BMI[i]["count"];
}

let trace2 = {};
trace2.type = "pie";
trace2.title = "男性BMI";
trace2.labels = [];
trace2.values = [];
trace2.domain = {
    row:1,
    column:0
};
trace2.hole = 0.5;

for(let i=0;i<men_BMI.length;i++){
    trace2.labels[i] = men_BMI[i]["name"];
    trace2.values[i] = men_BMI[i]["count"];
}

let trace3 = {};
trace3.type = "pie";
trace3.title = "女性BMI";
trace3.labels = [];
trace3.values = [];
trace3.domain = {
    row:1,
    column:1
};
trace3.hole = 0.5;

for(let i=0;i<women_BMI.length;i++){
    trace3.labels[i] = women_BMI[i]["name"];
    trace3.values[i] = women_BMI[i]["count"];
}

let data3 = [];
data3.push(trace1);
data3.push(trace2);
data3.push(trace3);

let layout3 = {
    margin:{
        t:50,
        l:0,
    },
    title:"18歲以上人口體位分布",
    grid:{
        rows:2,
        columns:2
    }
};

Plotly.newPlot(myGraph3, data3, layout3);