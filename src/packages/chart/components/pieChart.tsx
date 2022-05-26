import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface PieChartProps {
    series: number[];
    labels: string[];
    size?: number;
}

export const PieChart: React.FunctionComponent<PieChartProps> = ({ labels, series, size = 380 }) => {
    const [options, setOptions] = React.useState<ApexOptions>({
        chart: {
            type: 'pie',
        },
        labels,
        colors: ['#22C55E', '#EF4444', '#3B82F6'],
    });

    return <>{series?.length && <Chart options={options} series={series} type="pie" width={size} />}</>;
};
