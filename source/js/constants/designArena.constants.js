const sleeveOptions = [
    {
        title: '24 Pin Motherboard',
        value: '24-pin-mobo'

    },
    {
        title: '12 Pin CPU',
        value: '12-pin-cpu'
    }
];
const angleOptions = [
    {
        title: 'Crosscut - Top -> Bottom',
        value: 'xcut-top-bot'
    },
    {
        title: 'Crosscut - Bottom -> Top',
        value: 'xcut-bot-top'
    },
    {
        title: 'Top',
        value: 'top'
    },
    {
        title: 'Bottom',
        value: 'bot'
    },
    {
        title: 'Curved',
        value: 'curved'
    }
];

const displayValues = {
    header: 'Design Arena'
};

const sleeveHash = {
    '24-pin-mobo': {
        numCables: 24,
        rows: 2
    },
    '12-pin-cpu': {
        numCables: 12,
        rows: 2
    }
};

export default { angleOptions, sleeveOptions, displayValues, sleeveHash };
