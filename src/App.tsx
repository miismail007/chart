import React, { useRef } from 'react'
import BarChart, { RefType } from './components/BarChart'

function App() {

    const regenerateRef = useRef<RefType>(null)
    return (
        <div className="bg-white">
            <div className="h-screen w-screen flex items-center justify-center">
                <div>
                    <div className="w-[calc(100vh-75px)] bg-gray-900 shadow-2xl p-5 rounded-xl">
                        <BarChart ref={regenerateRef}/>
                    </div>
                    <button onClick={() => {regenerateRef.current?.onRegenerate()}} className="mt-4 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded">
                        Regenerate
                    </button>
                </div>
            </div>
        </div>
  )
}

export default App
