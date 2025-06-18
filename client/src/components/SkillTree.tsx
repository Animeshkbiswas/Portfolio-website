import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { Code, Database, Server, Layers, Cpu, Globe, Brain } from 'lucide-react';

interface SkillNode {
  id: string;
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  icon: React.ReactNode;
  connections: string[];
  description: string;
}

const SkillTree = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [draggedNode, setDraggedNode] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationFrame = useRef<number>();

  const initialNodes: SkillNode[] = useMemo(() => [
    // Core Programming
    { id: 'python', name: 'Python', level: 5, category: 'languages', x: 200, y: 100, icon: <Code className="h-4 w-4" />, connections: ['tensorflow', 'flask', 'opencv'], description: 'Advanced Python programming with 3+ years experience' },
    { id: 'javascript', name: 'JavaScript', level: 4, category: 'languages', x: 400, y: 100, icon: <Code className="h-4 w-4" />, connections: ['react', 'nodejs'], description: 'Modern ES6+ JavaScript and TypeScript' },
    { id: 'cpp', name: 'C++', level: 4, category: 'languages', x: 100, y: 180, icon: <Code className="h-4 w-4" />, connections: ['python'], description: 'Data structures and algorithms in C++' },
    
    // Machine Learning
    { id: 'tensorflow', name: 'TensorFlow', level: 4, category: 'ml', x: 150, y: 250, icon: <Brain className="h-4 w-4" />, connections: ['pytorch', 'opencv'], description: 'Deep learning and neural networks' },
    { id: 'pytorch', name: 'PyTorch', level: 4, category: 'ml', x: 300, y: 250, icon: <Brain className="h-4 w-4" />, connections: ['huggingface'], description: 'Research-focused deep learning framework' },
    { id: 'opencv', name: 'OpenCV', level: 3, category: 'ml', x: 100, y: 320, icon: <Brain className="h-4 w-4" />, connections: ['tensorflow'], description: 'Computer vision and image processing' },
    { id: 'huggingface', name: 'Hugging Face', level: 3, category: 'ml', x: 400, y: 320, icon: <Brain className="h-4 w-4" />, connections: ['pytorch'], description: 'NLP models and transformers' },
    
    // Web Development
    { id: 'react', name: 'React', level: 4, category: 'web', x: 500, y: 180, icon: <Globe className="h-4 w-4" />, connections: ['javascript', 'typescript'], description: 'Modern React with hooks and TypeScript' },
    { id: 'nodejs', name: 'Node.js', level: 3, category: 'web', x: 450, y: 250, icon: <Server className="h-4 w-4" />, connections: ['javascript'], description: 'Backend development with Node.js' },
    { id: 'flask', name: 'Flask', level: 4, category: 'web', x: 250, y: 320, icon: <Server className="h-4 w-4" />, connections: ['python'], description: 'Python web framework for APIs' },
    { id: 'typescript', name: 'TypeScript', level: 3, category: 'web', x: 550, y: 250, icon: <Code className="h-4 w-4" />, connections: ['react'], description: 'Type-safe JavaScript development' },
    
    // Databases
    { id: 'mysql', name: 'MySQL', level: 3, category: 'database', x: 350, y: 400, icon: <Database className="h-4 w-4" />, connections: ['postgresql'], description: 'Relational database management' },
    { id: 'postgresql', name: 'PostgreSQL', level: 3, category: 'database', x: 450, y: 400, icon: <Database className="h-4 w-4" />, connections: ['mysql'], description: 'Advanced SQL and database design' },
    { id: 'mongodb', name: 'MongoDB', level: 2, category: 'database', x: 250, y: 400, icon: <Database className="h-4 w-4" />, connections: [], description: 'NoSQL document database' },
    
    // Tools
    { id: 'git', name: 'Git', level: 4, category: 'tools', x: 150, y: 450, icon: <Layers className="h-4 w-4" />, connections: ['github'], description: 'Version control and collaboration' },
    { id: 'github', name: 'GitHub', level: 4, category: 'tools', x: 250, y: 500, icon: <Layers className="h-4 w-4" />, connections: ['git'], description: 'Code hosting and CI/CD' },
    { id: 'docker', name: 'Docker', level: 2, category: 'tools', x: 350, y: 500, icon: <Layers className="h-4 w-4" />, connections: [], description: 'Containerization and deployment' },
  ], []);

  const [nodes, setNodes] = useState(initialNodes);

  const categoryColors = {
    languages: '#3B82F6',
    ml: '#8B5CF6',
    web: '#10B981',
    database: '#F59E0B',
    tools: '#EF4444'
  };

  const getNodeRadius = useCallback((level: number) => 15 + (level * 3), []);

  const handleNodeClick = useCallback((nodeId: string) => {
    if (!isDragging) {
      setSelectedNode(prev => prev === nodeId ? null : nodeId);
    }
  }, [isDragging]);

  const handleMouseDown = useCallback((e: React.MouseEvent, nodeId: string) => {
    e.preventDefault();
    e.stopPropagation();
    setDraggedNode(nodeId);
    setIsDragging(false);
    
    const node = nodes.find(n => n.id === nodeId);
    if (node && svgRef.current) {
      const rect = svgRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - node.x,
        y: e.clientY - rect.top - node.y
      });
    }
  }, [nodes]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (draggedNode && svgRef.current) {
        setIsDragging(true);
        
        if (animationFrame.current) {
          cancelAnimationFrame(animationFrame.current);
        }
        
        animationFrame.current = requestAnimationFrame(() => {
          const rect = svgRef.current!.getBoundingClientRect();
          const newX = e.clientX - rect.left - dragOffset.x;
          const newY = e.clientY - rect.top - dragOffset.y;
          
          const constrainedX = Math.max(30, Math.min(620, newX));
          const constrainedY = Math.max(30, Math.min(520, newY));
          
          setNodes(prevNodes => 
            prevNodes.map(node => 
              node.id === draggedNode 
                ? { ...node, x: constrainedX, y: constrainedY }
                : node
            )
          );
        });
      }
    };

    const handleMouseUp = () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
      setDraggedNode(null);
      setTimeout(() => setIsDragging(false), 100);
    };

    if (draggedNode) {
      document.addEventListener('mousemove', handleMouseMove, { passive: true });
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [draggedNode, dragOffset]);

  const selectedNodeData = useMemo(() => 
    selectedNode ? nodes.find(n => n.id === selectedNode) : null, 
    [selectedNode, nodes]
  );

  const connectionLines = useMemo(() => {
    return nodes.flatMap(node => 
      node.connections.map(connectionId => {
        const connectedNode = nodes.find(n => n.id === connectionId);
        if (!connectedNode) return null;
        
        return (
          <line
            key={`${node.id}-${connectionId}`}
            x1={node.x}
            y1={node.y}
            x2={connectedNode.x}
            y2={connectedNode.y}
            stroke="hsl(var(--muted-foreground))"
            strokeWidth="2"
            strokeOpacity="0.3"
            className="transition-opacity duration-200"
          />
        );
      }).filter(Boolean)
    );
  }, [nodes]);

  return (
    <div className="w-full bg-card rounded-lg border p-6">
      <div className="relative">
        <svg
          ref={svgRef}
          width="100%"
          height="600"
          viewBox="0 0 650 550"
          className="border rounded-lg bg-gradient-to-br from-background to-muted/20"
        >
          {connectionLines}
          
          {nodes.map(node => (
            <g key={node.id}>
              <circle
                cx={node.x}
                cy={node.y}
                r={getNodeRadius(node.level)}
                fill={categoryColors[node.category as keyof typeof categoryColors]}
                stroke={selectedNode === node.id ? 'hsl(var(--ring))' : 'transparent'}
                strokeWidth="3"
                className={`cursor-pointer transition-transform duration-200 hover:scale-110 ${
                  selectedNode === node.id ? 'drop-shadow-lg' : ''
                } ${draggedNode === node.id ? 'scale-110' : ''}`}
                onClick={() => handleNodeClick(node.id)}
                onMouseDown={(e) => handleMouseDown(e, node.id)}
                opacity={selectedNode && selectedNode !== node.id ? 0.6 : 1}
                style={{ 
                  cursor: draggedNode === node.id ? 'grabbing' : 'grab',
                  willChange: draggedNode === node.id ? 'transform' : 'auto'
                }}
              />
              
              <circle
                cx={node.x}
                cy={node.y}
                r={getNodeRadius(node.level) * 0.6}
                fill="rgba(255,255,255,0.9)"
                className="pointer-events-none"
              />
              
              <text
                x={node.x}
                y={node.y + getNodeRadius(node.level) + 15}
                textAnchor="middle"
                className="text-xs font-medium fill-current text-foreground pointer-events-none"
              >
                {node.name}
              </text>
              
              <text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                className="text-xs font-bold fill-current text-foreground pointer-events-none"
              >
                {node.level}
              </text>
            </g>
          ))}
        </svg>
        
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm border rounded-lg p-3 space-y-2">
          <div className="text-sm font-semibold">Categories</div>
          {Object.entries(categoryColors).map(([category, color]) => (
            <div key={category} className="flex items-center gap-2 text-xs">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: color }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </div>
      
      {selectedNodeData && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="p-2 rounded-full"
              style={{ 
                backgroundColor: categoryColors[selectedNodeData.category as keyof typeof categoryColors],
                color: 'white'
              }}
            >
              {selectedNodeData.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{selectedNodeData.name}</h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Level: {selectedNodeData.level}/5</span>
                <span>•</span>
                <span className="capitalize">{selectedNodeData.category}</span>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">{selectedNodeData.description}</p>
          
          {selectedNodeData.connections.length > 0 && (
            <div className="mt-3">
              <div className="text-sm font-medium mb-1">Connected Skills:</div>
              <div className="flex flex-wrap gap-1">
                {selectedNodeData.connections.map(connectionId => {
                  const connectedSkill = nodes.find(n => n.id === connectionId);
                  return connectedSkill ? (
                    <span 
                      key={connectionId}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded cursor-pointer hover:bg-primary/20 transition-colors"
                      onClick={() => handleNodeClick(connectionId)}
                    >
                      {connectedSkill.name}
                    </span>
                  ) : null;
                })}
              </div>
            </div>
          )}
        </div>
      )}
      
      <div className="mt-4 text-xs text-muted-foreground text-center">
        Click nodes to view details • Drag nodes to rearrange • Numbers indicate skill level (1-5)
      </div>
    </div>
  );
};

export default SkillTree;