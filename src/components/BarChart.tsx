import React, { forwardRef, Ref, useImperativeHandle, useState } from 'react'

type InitDataType = {
    label: number,
    color: string,
    value: number
}

export type RefType = {
    onRegenerate: () => void
}

const initialData = [
    { label: 1, color: 'bg-red-500 hover:bg-red-700', value: 30 },
    { label: 2, color: 'bg-orange-500 hover:bg-orange-700', value: 50 },
    { label: 3, color: 'bg-yellow-500 hover:bg-yellow-700', value: 40 },
    { label: 4, color: 'bg-green-500 hover:bg-green-700', value: 20 },
    { label: 5, color: 'bg-green-700 hover:bg-green-900', value: 10 },
];

function BarChart(props, ref: Ref<RefType>) {
    const [data, setData] = useState<InitDataType[]>(initialData);

    const randomNumber = () => {
        return Math.floor(Math.random() * (50 - 1) + 1);
    }
    const onRegenerate = () => {
        const newData = data.map(item => ({
            ...item,
            value: randomNumber(),
          }));
        setData(newData);
    }

    useImperativeHandle(ref, () => ({
        onRegenerate
    }))

    return (
        <div className="w-full max-w-4xl mx-auto text-white">
            <div className="flex">
                {/* Y-axis labels */}
                <div className="flex flex-col justify-between h-64 pr-3">
                    {data.sort((a,b) => b.label - a.label).map((val, i) => (
                        <div key={i} className="text-blue-400 text-sm">{val.label * 10}</div>
                    ))}
                    <div className="text-blue-400 text-sm">0</div>
                </div>

                {/* Chart bars */}
                <div className="flex-1 flex items-end h-64 space-x-4 p-2 border-b border-l border-gray-700 relative">
                    {data.sort((a,b) => a.label - b.label).map((item, index) => (
                        <div
                        key={index}
                        className="flex-1 flex flex-col items-center transition-all duration-900"
                        style={{ height: `${(item.value / 50) * 100}%` }}
                        >
                            <div className={`rounded-xl ${item.color}  w-[calc(50%)] h-full opacity-75 flex items-end justify-center`}>
                                <div className="bg-black bg-opacity-50 text-center text-white p-1">
                                    {item.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-2 text-blue-400 pl-7">
                {data.map((item, index) => (
                <div key={index} className="text-center flex-1">
                    {item.label}
                </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <div className="flex flex-col items-center">
                <span className="text-blue-400">Rating</span>
                </div>
            </div>
        </div>
  )
}

export default forwardRef(BarChart)