import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const chartRef = useRef();

  useEffect(() => {
    axios.get("http://localhost:3001/api/metrics").then(res => {
      setData(res.data);
      drawChart(res.data);
    });
  }, []);

  function drawChart(metrics) {
    const svg = d3.select(chartRef.current);
    svg.selectAll("*").remove();
    const width = 400, height = 200;
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };

    const x = d3.scaleBand()
      .domain(metrics.map(d => d.name))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(metrics, d => d.value)]).nice()
      .range([height - margin.bottom, margin.top]);

    const svgEl = svg
      .attr("width", width)
      .attr("height", height);

    svgEl.append("g")
      .selectAll("rect")
      .data(metrics)
      .enter().append("rect")
        .attr("x", d => x(d.name))
        .attr("y", d => y(d.value))
        .attr("height", d => y(0) - y(d.value))
        .attr("width", x.bandwidth())
        .attr("fill", "#3b82f6");

    svgEl.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svgEl.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }

  async function askAI() {
    const res = await axios.post("http://localhost:3001/api/ask", { prompt });
    setAiResponse(res.data.answer);
  }

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-3xl mb-4 font-bold">📊 AI SaaS Dashboard</h1>
      <svg ref={chartRef}></svg>
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">🤖 AI Assistant</h2>
        <input
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Ask something..."
          className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        <button
          onClick={askAI}
          className="mt-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Ask
        </button>
        {aiResponse && <p className="mt-4 text-green-400">{aiResponse}</p>}
      
<footer className="mt-12 text-sm text-gray-500 text-center">
  Made by Tobias Tesauri
</footer>

</div>
    
<footer className="mt-12 text-sm text-gray-500 text-center">
  Made by Tobias Tesauri
</footer>

</div>
  );
}