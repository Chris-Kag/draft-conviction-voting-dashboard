import images from "./images"

const data = {
    user: {
        name: 'Gitcoin conviction voting'
    },
    summary: [
        {
            title: 'Votes',
            subtitle: 'Total votes today',
            value: '1.400',
            percent: 26
        },
        {
            title: '',
            subtitle: 'to be added',
            value: '3000',
            percent: 49
        },
        {
            title: 'Total raised',
            subtitle: 'Today',
            value: '$69k',
            percent: 38
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '6580',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Raised',
        value: '$36k',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 310, 340, 380, 400, 405, 420, 444]
        }
    },
    overall: [
        {
            value: '400k',
            title: 'raised'
        },
        {
            value: '4K',
            title: 'Voters'
        }
    ],
    revenueByChannel: [
    ],
    revenueByMonths: {
        labels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120]
    }
}

export default data