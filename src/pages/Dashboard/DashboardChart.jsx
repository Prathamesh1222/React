import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { chartColors } from "./constants"
export default function DashboardChart({ chartData }) {

    return (

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={chartData?.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {chartData?.months?.map((m,index) => {
                        return (

                            <Bar key={m} dataKey={m} fill={chartColors[index]} />
                        )
                    })}
                </BarChart>
            </ResponsiveContainer>


        </div>
    )
}


