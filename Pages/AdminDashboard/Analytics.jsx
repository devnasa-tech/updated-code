import React, { useState, useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';
import { FaUsers, FaEye, FaMousePointer, FaDollarSign } from 'react-icons/fa';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

// --- Reusable Components ---
const StatCard = ({ icon, title, value, change, changeType }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <div className="flex items-center">
            <div className="bg-yellow-100 text-yellow-600 p-3 rounded-full mr-4">
                {icon}
            </div>
            <div>
                <p className="text-sm font-medium text-gray-500">{title}</p>
                <p className="text-2xl font-bold text-gray-800">{value}</p>
            </div>
        </div>
        <p className={`mt-2 text-sm ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
            {change} vs. previous period
        </p>
    </div>
);






// --- Mock API for Data Simulation ---
// In a real app, this would be an actual API call
const mockApi = {
    fetchAnalyticsData: async (timeRange) => {
        // Simulate network delay
        await new Promise(res => setTimeout(res, 800));
        
        const generateData = (numPoints, base, variance) => 
            Array.from({ length: numPoints }, () => base + Math.floor(Math.random() * variance) - (variance / 2));

        const generateLabels = (numPoints, unit) => 
            Array.from({ length: numPoints }, (_, i) => `Day ${i + 1}`);

        let numPoints = 7;
        if (timeRange === '30d') numPoints = 30;
        if (timeRange === '90d') numPoints = 90;

        return {
            kpis: {
                totalUsers: (1250 * numPoints).toLocaleString(),
                pageViews: (8750 * numPoints).toLocaleString(),
                bounceRate: `${38 + Math.floor(Math.random() * 5)}%`,
                avgSession: `2m ${Math.floor(Math.random() * 60)}s`,
            },
            userChart: {
                labels: generateLabels(numPoints),
                data: generateData(numPoints, 1000, 400),
            },
            trafficSources: {
                labels: ['Direct', 'Organic Search', 'Referral', 'Social'],
                data: [35, 45, 10, 10],
            },
            deviceUsage: {
                labels: ['Desktop', 'Mobile', 'Tablet'],
                data: [60, 35, 5],
            },
            topPages: [
                { path: '/', views: '15,432' },
                { path: '/products', views: '11,120' },
                { path: '/blog/new-features', views: '9,876' },
                { path: '/pricing', views: '7,543' },
                { path: '/contact', views: '4,321' },
            ],
        };
    },
};

// --- Main Analytics Dashboard Component ---
const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [timeRange, setTimeRange] = useState('30d'); // '7d', '30d', '90d'

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await mockApi.fetchAnalyticsData(timeRange);
            setAnalyticsData(data);
            setIsLoading(false);
        };
        fetchData();
    }, [timeRange]);

    if (isLoading || !analyticsData) {
        return ;
    }

    const userChartData = {
        labels: analyticsData.userChart.labels,
        datasets: [{
            label: 'Users',
            data: analyticsData.userChart.data,
            borderColor: '#f59e0b', // yellow-500
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            tension: 0.3,
            fill: true,
        }],
    };
    
    const sourceChartData = {
        labels: analyticsData.trafficSources.labels,
        datasets: [{
            data: analyticsData.trafficSources.data,
            backgroundColor: ['#3b82f6', '#10b981', '#ef4444', '#6366f1'],
        }],
    };
    
    const deviceChartData = {
        labels: analyticsData.deviceUsage.labels,
        datasets: [{
            data: analyticsData.deviceUsage.data,
            backgroundColor: ['#3b82f6', '#10b981', '#ef4444'],
        }],
    };

    const chartOptions = {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false } }, y: { grid: { color: '#e5e7eb' } } }
    };

    const doughnutOptions = {
        responsive: true,
        plugins: { legend: { position: 'right' } }
    };

    return (
        <div className="max-w-6xl mt-7">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800 lg:mb-5">Analytics Dashboard</h1>
                <div className="flex space-x-2 bg-white p-1 rounded-lg shadow-sm border">
                    {['7d', '30d', '90d'].map(range => (
                        <button
                            key={range}
                            onClick={() => setTimeRange(range)}
                            className={`px-4 py-1 text-sm font-semibold rounded-md transition-colors ${timeRange === range ? 'bg-yellow-500 text-white shadow' : 'text-gray-600 hover:bg-gray-100'}`}
                        >
                            Last {range.replace('d', '')} Days
                        </button>
                    ))}
                </div>
            </div>

            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard icon={<FaUsers size={20} />} title="Total Users" value={analyticsData.kpis.totalUsers} change="+5.2%" changeType="increase" />
                <StatCard icon={<FaEye size={20} />} title="Page Views" value={analyticsData.kpis.pageViews} change="+12.8%" changeType="increase" />
                <StatCard icon={<FaMousePointer size={20} />} title="Bounce Rate" value={analyticsData.kpis.bounceRate} change="-1.5%" changeType="decrease" />
                <StatCard icon={<FaDollarSign size={20} />} title="Avg. Session" value={analyticsData.kpis.avgSession} change="+0.5%" changeType="increase" />
            </div>

            {/* Main Chart */}
            <div className="bg-white p-6 rounded-lg shadow-md border mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Users Over Time</h2>
                <div className="h-80">
                    <Line data={userChartData} options={chartOptions} />
                </div>
            </div>
            
            {/* Breakdowns */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md border">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">Top Pages</h2>
                    <table className="w-full text-left">
                        <thead className="border-b text-sm text-gray-500">
                            <tr><th className="py-2">Page Path</th><th className="py-2">Views</th></tr>
                        </thead>
                        <tbody>
                            {analyticsData.topPages.map(page => (
                                <tr key={page.path} className="border-b last:border-0 text-gray-700">
                                    <td className="py-3">{page.path}</td><td>{page.views}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="space-y-6">
                     <div className="bg-white p-6 rounded-lg shadow-md border">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Traffic Sources</h2>
                        <div className="h-48 flex items-center justify-center">
                            <Doughnut data={sourceChartData} options={doughnutOptions} />
                        </div>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-md border">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">Device Usage</h2>
                         <div className="h-48 flex items-center justify-center">
                            <Doughnut data={deviceChartData} options={doughnutOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;