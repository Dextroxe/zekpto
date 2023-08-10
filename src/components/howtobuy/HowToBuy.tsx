
import ReactFlow, {
    MiniMap,
    Controls,
    // Background,
    useNodesState,
    useEdgesState,
} from 'reactflow';

import CustomNode from './CustomNode';
import 'reactflow/dist/base.css';
import { GoDownload } from "react-icons/Go";
import { BiPurchaseTagAlt } from "react-icons/Bi";
import { BsBrowserChrome } from "react-icons/Bs";
import { BsCurrencyBitcoin } from "react-icons/Bs";
import { VscSymbolInterface } from "react-icons/Vsc";
import { AiOutlineSwap } from "react-icons/Ai";
import { MdGeneratingTokens } from "react-icons/Md";




const nodeTypes = {
    custom: CustomNode,
};

const initNodes = [
    {
        id: '1',
        type: 'custom',
        data: {
            icon: <GoDownload/>,
            task: 'Go to the Apple or Play store and download Trust Wallet or MetaMask.',
        },
        position: { x: 0, y: 0 },
    },
    {
        id: '2',
        type: 'custom',
        data: {
            icon: <BiPurchaseTagAlt />,
            task: 'Purchase ETH via the app, or deposit to your address.',
        },
        position: { x: 0, y: 250 },
    },
    {
        id: '3',
        type: 'custom',
        data: {
            icon: <BsBrowserChrome />,
            task: `Go to the DApps tab at the bottom and find PancakeSwap. iPhone
            users will have to enable the browser within TrustWallet
            by typing trust://browser_enable within Safari.`,
        },
        position: { x: 0, y: 450 },
    },
    {
        id: '4',
        type: 'custom',
        data: {
            icon: <BsCurrencyBitcoin />,
            task: `On Pancake Swap, in the "From" slot select ETH depending on
            which one you bought. In the bottom slot tap "Select currency"
            to search, and then paste in the contact address on this page`,
        },
        position: { x: 0, y: 750 },
    },
    {
        id: '5',
        type: 'custom',
        data: {
            icon: <VscSymbolInterface />,
            task: `Click the icon with the dials at the top left, then set the
            slippage tolerance to 11-12%, and close that interface once
            done.`,
        },
        position: { x: 0, y: 1050 },
    },
    {
        id: '6',
        type: 'custom',
        data: {
            icon: <AiOutlineSwap />,
            task: `Put the amount of ETH you wish to spend in the "From" box, and
            press the "Swap" button.`,
        },
        position: { x: 0, y: 1300 },
    },
    {
        id: '7',
        type: 'custom',
        data: {
            icon: <MdGeneratingTokens />,
            task: `Click the swap button & confirm the transaction …
            Congratulations you now own Einpunk Token!`,
        },
        position: { x: 0, y: 1550 },
    },
];

const initEdges = [
    {
        id: 'e1-2',
        source: '1',
        target: '2',
    },
    {
        id: 'e2-3',
        source: '2',
        target: '3',
    },
    {
        id: 'e3-4',
        source: '3',
        target: '4',
    },
    {
        id: 'e4-5',
        source: '4',
        target: '5',
    },
    {
        id: 'e5-6',
        source: '5',
        target: '6',
    },
    {
        id: 'e6-7',
        source: '6',
        target: '7',
    },
];

const HowToBuy = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

    // const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

    const edgeOptions = {
        animated: true,
        style: {
            stroke: 'white',
        },
    };

    const connectionLineStyle = { stroke: 'white' };

    return (
        <>
            <div className='flex flex-col justify-center gap-10 '>
                <h1 className='text-white text-5xl mb-10'>How to Buy</h1>
                <div style={{ height: '600px', width:'50rem' }}>
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        // onConnect={onConnect}
                        nodeTypes={nodeTypes}
                        defaultEdgeOptions={edgeOptions}
                        fitView
                        className="border-x-[1px]  rounded-md shadow-md relative"
                        nodesDraggable={false}
                        connectionLineStyle={connectionLineStyle}

                    >
                        {/* <MiniMap /> */}
                        <Controls className='bg-white' />
                   
                    </ReactFlow>
                </div>
            </div>
        </>
    )
}

export default HowToBuy;