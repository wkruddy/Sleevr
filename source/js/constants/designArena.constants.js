const sleeveOptions = [
    {
        title: '24 Pin Motherboard/ATX',
        value: '24-pin-mobo'
    },
    {
        title: '8 Pin CPU',
        value: '8-pin-cpu'
    },
    {
        title: '6 Pin PCI-E',
        value: '6-pin-pcie'
    },
    {
        title: '8 Pin PCI-E',
        value: '8-pin-pcie'
    },
    {
        title: '6 Pin Sata',
        value: '6-pin-sata'
    },
    {
        title: '4 Pin Molex',
        value: '4-pin-molex'
    },
    {
        title: 'Custom',
        value: 'custom'
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
        title: 'Side',
        value: 'side'
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
    '8-pin-cpu': {
        numCables: 8,
        rows: 2
    },
    '6-pin-pcie': {
        numCables: 6,
        rows: 2
    },
    '8-pin-pcie': {
        numCables: 8,
        rows: 2
    },
    '6-pin-sata': {
        numCables: 6,
        rows: 2
    },
    '4-pin-molex': {
        numCables: 4,
        rows: 1
    },
    custom: {
        numCables: 1,
        rows: 1
    },

};

const makefakeGUID = () => Math.floor((1 + Math.random()) * 0x10000);

export default { angleOptions, sleeveOptions, displayValues, sleeveHash, makefakeGUID };
