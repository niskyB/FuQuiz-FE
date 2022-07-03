import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { ChartData } from '../containers/newCustomers/interface';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface LineChartProps {
    height?: number;
    title?: string;
    data: ChartData[][];
    name: string[];
}

export const LineChart: React.FunctionComponent<LineChartProps> = ({ height = 350, title = '', data, name }) => {
    const chartConfig = React.useMemo<{ options: ApexOptions; series: ApexAxisChartSeries }>(
        () => ({
            options: {
                chart: {
                    height,
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
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
                    categories: (data && data.length > 0 && data[0].map((item) => item.date)) || [],
                },
            },
            series: data.map((item, index) => ({
                data: item.map((a) => a.value),
                name: name[index],
            })),
        }),
        [data, name]
    );

    return (
        <>
            <Chart options={chartConfig?.options} series={chartConfig?.series} width="600" />
        </>
    );
};
