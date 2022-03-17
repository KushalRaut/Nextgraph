import React, { useState } from 'react'
import Image from 'next/image'
import Toggle from 'react-toggle'
import { FaCompactDisc } from 'react-icons/fa'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const data = [
  {
    name: 'Day 1',
    Compound: 40,
    AAVE: 24,
    amt: 24,
  },
  {
    name: 'Day 2',
    Compound: 30,
    AAVE: 13,
    amt: 22,
  },
  {
    name: 'Day 3',
    Compound: 20,
    AAVE: 98,
    amt: 22,
  },
  {
    name: 'Day 4',
    Compound: 27,
    AAVE: 39,
    amt: 20,
  },
  {
    name: 'Day 5',
    Compound: 18,
    AAVE: 48,
    amt: 21,
  },
  {
    name: 'Day 6',
    Compound: 23,
    AAVE: 38,
    amt: 25,
  },
  {
    name: 'Day 7',
    Compound: 34,
    AAVE: 43,
    amt: 21,
  },
]

const Graph = () => {
  const [explicitContent, setExplicitContent] = useState(true)
  console.log(explicitContent)

  return (
    <>
      <div className="container p-5">
        <div className="w-100 d-flex align-items-center gap-3">
          <div className="d-flex align-items-center gap-2">
            <span className="d-flex align-items-center fw-bold gap-1">
              <Image width={20} height={20} className="crpto-icons" src="/img/aave.svg" alt="aave" />
              AAVE V2{' '}
            </span>
            <Toggle
              id="cheese-status"
              defaultChecked={explicitContent}
              onChange={() => {
                setExplicitContent(!explicitContent)
              }}
            />
          </div>
          <div className="d-flex align-items-center gap-2">
            <span className="d-flex align-items-center fw-bold gap-1">
              <Image width={35} height={35}
                className="crpto-icons-two"
                src="/img/compound.svg"
                alt="compound"
              />
              Compound{' '}
            </span>
            <Toggle
              id="cheese-status"
              defaultChecked={explicitContent}
              onChange={() => {
                setExplicitContent(!explicitContent)
              }}
            />
          </div>
        </div>
        <div className="graph-container">
          <h5 className="px-3 py-1">Liquidity Converage Ratio(LCR)</h5>
          <hr className="p-0 m-0" />
          <div className="w-100 px-3 py-1">
            <div className="crypto-names d-flex align-items-center gap-2">
              <div className="box d-flex flex-column  fw-bold align-items-center">
                <p className="d-flex align-items-center gap-2">
                  <Image width={20} height={20} className="crpto-icons" src="/img/aave.svg" alt="aave" />
                  AAVE
                </p>
                <p>25.56%</p>
              </div>
              <div className="box d-flex flex-column fw-bold align-items-center">
                <p className="d-flex align-items-center gap-2">
                  <FaCompactDisc />
                  Compound
                </p>
                <p>25.56%</p>
              </div>
            </div>
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart width={1000} height={300} data={data}>
                  <CartesianGrid strokeDasharray="0" />
                  <XAxis dataKey="name" />
                  <YAxis axisLine={false} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="AAVE"
                    stroke="#00cfcf"
                    strokeWidth={3}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="Compound"
                    stroke="#800080"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Graph
