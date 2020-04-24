// Creating Chart with Canada's Total Medal Count

new Chart(document.getElementById('totalMedalChart'), {
    type: 'bar',
    data: {
        labels: ['Bronze', 'Silver', 'Gold'],
        datasets: [{
            label: ["Canada's total Medal Count"],
            data: [107, 201, 313],
            backgroundColor: [
                '#b08d57',
                '#c0c0c0',
                '#FFD700'
            ],
            borderColor: [
                 '#000',
                '#000',
                '#000'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        animation: {
            duration: '2000',
            easing: 'easeInOutBounce',

        }
    }
});


// Creating a chart to Compare Canada's Men and Women's medal count!

new Chart(document.getElementById('MenWomenMedalChart'), {
    type: 'bar',
    data: {
        labels: ['Bronze', 'Silver', 'Gold'],
        datasets: [
            {
                label: "Men's Medal Count",
                data: ['66', '127', '191'],
                backgroundColor: '#3e95cd'

    },
            {
                label: "Women's Medal Count",
                data: ['41', '74', '122'],
                backgroundColor: '#8e5ea2'

},
            {
                label: 'Average Medal Count Between Men & Women',
                type: 'line',
                fill: false,
                data: ['53.5', '100.5', '156.5'],
                borderColor: '#8B0000',
                backgroundColor: '#8B0000'
            }
        ]
    },
    
    options: {
        animation: {
            duration: '2000',
            easing: 'easeOutElastic',
        }
    }
});

new Chart(document.getElementById('CanadaVsRestOfWorld'),{
    type: 'pie',
    data:{
        labels:['Canada', 'Rest of the World'],
        datasets:[
            {
                data:[621,5770],
                backgroundColor: ['#FF0000', '#DB7093']
            }
        ]
    },
    options:{
        title:{
            display: true,
            text: "Compare Canada's vs Rest Of The World Medal Count"
        },
        animation: {
            duration: '3000',
            easing: 'easeInElastic',
        }
    }
    
});