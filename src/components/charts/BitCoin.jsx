import { AreaSeries, createChart } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';

const BitCoin = () => {
    const chartContainerRef = useRef();

    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: { textColor: 'black', background: { type: 'solid', color: 'white' } }, width: 500,
                height: 200,});
            chart.timeScale().fitContent();

            const newSeries = chart.addSeries(AreaSeries,
                { lineColor: "#D22B2B", topColor: "#D22B2B", bottomColor: 'rgb(210, 43, 43, 0.28)' });
            newSeries.setData([
                { value: 0, time: 1642425322 }, { value: 8, time: 1642511722 }, { value: 10, time: 1642598122 }, { value: 20, time: 1642684522 }, { value: 3, time: 1642770922 }, { value: 43, time: 1642857322 }, { value: 41, time: 1642943722 }, { value: 43, time: 1643030122 }, { value: 56, time: 1643116522 }, { value: 46, time: 1643202922 }
            ]);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        }, []
    );

    return (
        <div
            ref={chartContainerRef}
        />
    );
};

export default BitCoin