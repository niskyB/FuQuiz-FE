import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DonutChartProps {
    series: number[];
    labels: string[];
}

export const DonutChart: React.FunctionComponent<DonutChartProps> = ({ labels, series }) => {
    const [options, setOptions] = React.useState<ApexOptions>({
        chart: {
            type: 'donut',
        },
        labels,
        colors: ['#22C55E', '#EF4444', '#3B82F6'],
    });

    return <>{series?.length && <Chart options={options} series={series} type="donut" width="380" />}</>;
};
