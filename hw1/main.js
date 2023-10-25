let myGraph1 = document.getElementById("myGraph1");

let hw1_trace1 = {};
hw1_trace1.mode = "lines+markers";
hw1_trace1.type = "scatter"
hw1_trace1.name = "公立大專校院";

hw1_trace1.marker = {
    size:10
};
hw1_trace1.x = [];
hw1_trace1.y = [];
hw1_trace1.text = [];
hw1_trace1.visible = true;
for(let i=0;i<set1.length;i++) {
    hw1_trace1.x[i] = set1[i][0];
    hw1_trace1.y[i] = set1[i][1];
    hw1_trace1.text[i] = set1[i][2];
}

let hw1_trace2 = {};
hw1_trace2.mode = "lines+markers";
hw1_trace2.type = "scatter";
hw1_trace2.name = "私立大專校院";

hw1_trace2.marker = {
    size:10
};
hw1_trace2.x = [];
hw1_trace2.y = [];
hw1_trace2.text = [];
hw1_trace2.visible = true;
for(let i=0;i<set2.length;i++) {
    hw1_trace2.x[i] = set2[i][0];
    hw1_trace2.y[i] = set2[i][1];
    hw1_trace2.text[i] = set2[i][2];
}

let hw1_trace3 = {};
hw1_trace3.mode = "lines+markers";
hw1_trace3.type = "scatter";
hw1_trace3.name = "公立高中職";
hw1_trace3.marker = {
    size:10
};
hw1_trace3.x = [];
hw1_trace3.y = [];
hw1_trace3.text = [];
hw1_trace3.visible = true;
for(let i=0;i<set3.length;i++) {
    hw1_trace3.x[i] = set3[i][0];
    hw1_trace3.y[i] = set3[i][1];
    hw1_trace3.text[i] = set3[i][2];
}

let hw1_trace4 = {};
hw1_trace4.mode = "lines+markers";
hw1_trace4.type = "scatter";
hw1_trace4.name = "私立高中職";
hw1_trace4.marker = {
    size:10
};
hw1_trace4.x = [];
hw1_trace4.y = [];
hw1_trace4.text = [];
for(let i=0;i<set4.length;i++) {
    hw1_trace4.x[i] = set4[i][0];
    hw1_trace4.y[i] = set4[i][1];
    hw1_trace4.text[i] = set4[i][2];
}

let data1 = [];
data1.push(hw1_trace1);
data1.push(hw1_trace2);
data1.push(hw1_trace3);
data1.push(hw1_trace4);

let layout1 = {
    margin:{
        t:25
    },
    xaxis:{
        range:[99.8,110.2]
    },
    yaxis:{
        range:[0,300000]
    },
    title:"101-110學年度高中職以上學校學生就學貸款統計",
    updatemenus:[
        {
            y:1.2,
            x:0.15,
            yanchor:"top",
            buttons:[
                {
                    method:"restyle",
                    args:["visible",[true,true,true,true]],
                    label:"Display All"
                },
                {
                    method:"restyle",
                    args:["visible",[true,false,false,false]],
                    label:"公立大專校院"
                },
                {
                    method:"restyle",
                    args:["visible",[false,true,false,false]],
                    label:"私立大專校院"
                },
                {
                    method:"restyle",
                    args:["visible",[false,false,true,false]],
                    label:"公立高中職"
                },
                {
                    method:"restyle",
                    args:["visible",[false,false,false,true]],
                    label:"私立高中職"
                }
                  
            ]
        }
    ]
};

Plotly.newPlot(myGraph1, data1, layout1);