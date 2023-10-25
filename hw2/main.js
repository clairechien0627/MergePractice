let myGraph2 = document.getElementById("myGraph2");

let hw2_trace1 = {};
hw2_trace1.type = "bar";
hw2_trace1.name = "國民小學";
hw2_trace1.x = [];
hw2_trace1.y = [];

for(let i=0;i<elementaryschool.length;i++){
    hw2_trace1.x[i] = elementaryschool[i]["name"];
    hw2_trace1.y[i] = elementaryschool[i]["count"];
}

let hw2_trace2 = {};
hw2_trace2.type = "bar";
hw2_trace2.name = "國民中學";
hw2_trace2.x = [];
hw2_trace2.y = [];

for(let i=0;i<middleschool.length;i++){
    hw2_trace2.x[i] = middleschool[i]["name"];
    hw2_trace2.y[i] = middleschool[i]["count"];
}

let hw2_trace3 = {};
hw2_trace3.type = "bar";
hw2_trace3.name = "高級中等學校";
hw2_trace3.x = [];
hw2_trace3.y = [];

for(let i=0;i<highschool.length;i++){
    hw2_trace3.x[i] = highschool[i]["name"];
    hw2_trace3.y[i] = highschool[i]["count"];
}


let data2 = [];
data2.push(hw2_trace1);
data2.push(hw2_trace2);
data2.push(hw2_trace3);

let layout2 = {
    margin:{
        t:80
    },
    title:"台北市各級學校班級數"
};

Plotly.newPlot(myGraph2, data2, layout2);