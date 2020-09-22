export const chartHeight = 250;

export const initialOptions = {
  chart: {
    height: chartHeight,
    backgroundColor: {
      linearGradient: [0, 0, 500, 500],
      stops: [
        [0, 'rgb(255, 255, 255)'],
        [1, 'rgb(200, 200, 255)']
      ]
    },
  },
  loading: {
    hideDuration: 1000,
    showDuration: 1000
  },
  credits: {
    enabled: false,
  },
  title: {
    text: '',
  },
  yAxis: {
    title: {
      text: ''
    },
    endOnTick: false,
    startOnTick: false,
  },
  legend: {
    enabled: false,
  },

  plotOptions: {
    series: {
      marker: {
        enabled: false,
      },
      states: {
        inactive: {
          opacity: 1
        }
      }
    }
  },
  series: []
}

export const demoSeries = [{
  animation: true,
  name: 'MSFT',
  color: 'blue',
  data: [1, 3, 2, 3, 4, 5, 53, 53, 53, 53, 53, 31, 31, 33, 32]
},
{
  animation: true,
  name: 'APPL',
  color: 'red',
  data: [13, 13, 32, 13, 14, 15, 153, 153, 153, 153, 153, 131, 131, 133, 132]
}];

export const demoSeries1 = [
  ...demoSeries,
  {
    animation: true,
    name: 'TSLA',
    color: 'green',
    data: [3, 3, 2, 3, 1, 5, 13, 15, 13, 15, 13, 11, 31, 13, 12]
  }];