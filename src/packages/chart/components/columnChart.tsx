import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import * as React from 'react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ColumnChartProps {
    xAxis: string[];
    height?: number;
    title?: string;
    series: ApexAxisChartSeries;
}

export const ColumnChart: React.FunctionComponent<ColumnChartProps> = ({ series, xAxis, height = 350, title = '' }) => {
    const options = React.useMemo<ApexOptions>(
        () => ({
            chart: {
                height,
                type: 'bar',
            },
            stroke: {
                curve: 'smooth',
            },
            title: {
                text: title,
                align: 'left',
            },
            grid: {
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: xAxis,
            },
        }),
        [series, xAxis]
    );

    return (
        <>
            <Chart options={options} type={'bar'} series={series} width="600" />
        </>
    );
};
