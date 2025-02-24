import React, { useEffect } from 'react';
import cytoscape from 'cytoscape';

const KnowledgeGraph = ({ data }) => {
  useEffect(() => {
    cytoscape({
      container: document.getElementById('cy'),
      elements: [
        { data: { id: 'disease', label: data.disease } },
        { data: { id: 'hypothesis', label: data.hypothesis } },
        { data: { source: 'disease', target: 'hypothesis', label: 'HAS_HYPOTHESIS' } },
      ],
      style: [
        { selector: 'node', style: { label: 'data(label)', 'background-color': '#007bff' }},
        { selector: 'edge', style: { label: 'data(label)', 'line-color': '#888' }}
      ],
      layout: { name: 'breadthfirst' }
    });
  }, [data]);

  return <div id="cy" style={{ width: '100%', height: '400px' }}></div>;
};

export default KnowledgeGraph;