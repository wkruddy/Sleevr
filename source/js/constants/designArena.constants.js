const sleeveOptions = [
    {
        title: '24 Pin Motherboard/ATX',
        value: '24-pin-mobo',
        numCables: 24,
        defaultRows: 2
    },
    {
        title: '8 Pin CPU',
        value: '8-pin-cpu',
        numCables: 8,
        defaultRows: 2
    },
    {
        title: '6 Pin PCI-E',
        value: '6-pin-pcie',
        numCables: 6,
        defaultRows: 2
    },
    {
        title: '8 Pin PCI-E',
        value: '8-pin-pcie',
        numCables: 8,
        defaultRows: 2
    },
    {
        title: '6 Pin Sata',
        value: '6-pin-sata',
        numCables: 6,
        defaultRows: 2
    },
    {
        title: '4 Pin Molex',
        value: '4-pin-molex',
        numCables: 4,
        defaultRows: 1
    },
    {
        title: 'Custom',
        value: 'custom',
        numCables: 1,
        defaultRows: 1
    }
];
const angleOptions = [
    {
        title: 'Crosscut - Top -> Bottom',
        value: 'xcut-top-bot',
        rows: 2
    },
    {
        title: 'Crosscut - Bottom -> Top',
        value: 'xcut-bot-top',
        rows: 2
    },
    {
        title: 'Top',
        value: 'top',
        rows: 1
    },
    {
        title: 'Bottom',
        value: 'bot',
        rows: 1
    },
    {
        title: 'Side',
        value: 'side',
        rows: 2
    },
    {
        title: 'Curved',
        value: 'curved',
        rows: 2
    }
];

const displayValues = {
    header: 'Design Arena'
};

const makefakeGUID = () => Math.floor((1 + Math.random()) * 0x10000);

export default { angleOptions, sleeveOptions, displayValues, makefakeGUID };
