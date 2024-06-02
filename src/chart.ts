import mount from ".";

declare global {
    interface Window {
        chart: any;
    }
}

let chart = {
    init: function() {
        mount()
    }
}

window.chart = chart
export default chart