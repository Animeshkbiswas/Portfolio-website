
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SkillNode {
  id: string;
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  unlocked: boolean;
  prerequisites?: string[];
}

const skillNodes: SkillNode[] = [
  // Core Programming
  { id: 'python', name: 'Python', level: 95, category: 'core', x: 200, y: 100, unlocked: true },
  { id: 'cpp', name: 'C++', level: 85, category: 'core', x: 300, y: 150, unlocked: true },
  { id: 'js', name: 'JavaScript', level: 80, category: 'core', x: 100, y: 150, unlocked: true },
  
  // Machine Learning Branch
  { id: 'ml', name: 'Machine Learning', level: 90, category: 'ml', x: 200, y: 250, unlocked: true, prerequisites: ['python'] },
  { id: 'tensorflow', name: 'TensorFlow', level: 85, category: 'ml', x: 100, y: 350, unlocked: true, prerequisites: ['ml'] },
  { id: 'pytorch', name: 'PyTorch', level: 80, category: 'ml', x: 300, y: 350, unlocked: true, prerequisites: ['ml'] },
  { id: 'cv', name: 'Computer Vision', level: 85, category: 'ml', x: 200, y: 400, unlocked: true, prerequisites: ['tensorflow'] },
  
  // Web Development Branch
  { id: 'react', name: 'React', level: 80, category: 'web', x: 50, y: 250, unlocked: true, prerequisites: ['js'] },
  { id: 'flask', name: 'Flask', level: 75, category: 'web', x: 350, y: 250, unlocked: true, prerequisites: ['python'] },
  { id: 'fastapi', name: 'FastAPI', level: 70, category: 'web', x: 400, y: 350, unlocked: true, prerequisites: ['flask'] },
];

const connections = [
  ['python', 'ml'],
  ['ml', 'tensorflow'],
  ['ml', 'pytorch'],
  ['tensorflow', 'cv'],
  ['js', 'react'],
  ['python', 'flask'],
  ['flask', 'fastapi'],
];

const SkillTree = () => {
  const [selectedNode, setSelectedNode] = useState<SkillNode | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'core': return '#3b82f6';
      case 'ml': return '#10b981';
      case 'web': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-background to-muted/50 rounded-lg overflow-hidden">
      <svg className="absolute inset-0 w-full h-full">
        {/* Render connections */}
        {connections.map(([from, to]) => {
          const fromNode = skillNodes.find(n => n.id === from);
          const toNode = skillNodes.find(n => n.id === to);
          if (!fromNode || !toNode) return null;
          
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="#374151"
              strokeWidth="2"
              opacity="0.6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          );
        })}
        
        {/* Render skill nodes */}
        {skillNodes.map((node, index) => (
          <motion.circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="20"
            fill={getCategoryColor(node.category)}
            stroke="#ffffff"
            strokeWidth="2"
            className="cursor-pointer hover:opacity-80"
            onClick={() => setSelectedNode(node)}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
          />
        ))}
        
        {/* Render skill labels */}
        {skillNodes.map((node) => (
          <text
            key={`${node.id}-label`}
            x={node.x}
            y={node.y + 35}
            textAnchor="middle"
            className="text-xs font-medium fill-foreground"
          >
            {node.name}
          </text>
        ))}
      </svg>
      
      {/* Skill details panel */}
      {selectedNode && (
        <motion.div
          className="absolute top-4 right-4 bg-card p-4 rounded-lg shadow-lg border max-w-xs"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3 className="font-semibold text-lg">{selectedNode.name}</h3>
          <p className="text-sm text-muted-foreground capitalize">{selectedNode.category}</p>
          <div className="mt-2">
            <div className="flex justify-between text-sm">
              <span>Proficiency</span>
              <span>{selectedNode.level}%</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2 mt-1">
              <motion.div
                className="bg-primary h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${selectedNode.level}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
          <button
            className="absolute -top-2 -right-2 bg-muted rounded-full w-6 h-6 flex items-center justify-center text-xs"
            onClick={() => setSelectedNode(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default SkillTree;
