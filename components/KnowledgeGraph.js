import React, { useMemo } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import { useRouter } from 'next/router';

const nodeStyles = {
    background: '#fff',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    padding: '10px 15px',
    fontSize: '14px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
};

const activeNodeStyles = {
    ...nodeStyles,
    borderColor: '#0070f3',
    boxShadow: '0 0 15px rgba(0, 112, 243, 0.3)',
};

export default function KnowledgeGraph({ centerNode, relatedNodes }) {
    const router = useRouter();

    const onNodeClick = (event, node) => {
        router.push(`/pedia/${node.id}`);
    };

    const initialNodes = useMemo(() => {
        const nodes = [
            // 中心节点
            {
                id: centerNode.slug,
                position: { x: 250, y: 150 },
                data: { label: centerNode.title },
                style: activeNodeStyles,
            },
            // 相关节点
            ...relatedNodes.map((node, index) => ({
                id: node.slug,
                position: {
                    x: 250 + 200 * Math.cos((index * 2 * Math.PI) / relatedNodes.length),
                    y: 150 + 150 * Math.sin((index * 2 * Math.PI) / relatedNodes.length),
                },
                data: { label: node.title },
                style: nodeStyles,
            })),
        ];
        return nodes;
    }, [centerNode, relatedNodes]);

    const initialEdges = useMemo(() => {
        return relatedNodes.map(node => ({
            id: `e-${centerNode.slug}-${node.slug}`,
            source: centerNode.slug,
            target: node.slug,
            animated: true,
            style: { stroke: '#9CA3AF' },
        }));
    }, [centerNode, relatedNodes]);

    return (
        <div style={{ height: '350px', border: '1px solid #E5E7EB', borderRadius: '8px', marginTop: '2rem' }}>
            <ReactFlow
                nodes={initialNodes}
                edges={initialEdges}
                onNodeClick={onNodeClick}
                fitView
                nodesDraggable={false}
                nodesConnectable={false}
            >
                <Background />
                <Controls showInteractive={false} />
            </ReactFlow>
        </div>
    );
}